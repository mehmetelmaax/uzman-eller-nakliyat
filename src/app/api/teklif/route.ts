import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';
import { estimatePriceFromForm } from '@/lib/pricing';

// In-memory cache for idempotency keys (last 5 minutes)
const processedKeys = new Map<string, { timestamp: number }>();

function cleanIdempotencyKeys() {
  const now = Date.now();
  for (const [key, val] of processedKeys.entries()) {
    if (now - val.timestamp > 300000) { // 5 minutes expiry
      processedKeys.delete(key);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check (Distributed Upstash with local fallback)
    const forwarded = req.headers.get('x-forwarded-for');
    const firstForwarded = forwarded ? forwarded.split(',')[0] : null;
    const ip = firstForwarded ? firstForwarded.trim() : (req.headers.get('x-real-ip') || '127.0.0.1');
    
    const limitCheck = await checkRateLimit(ip, 3, 60);
    if (!limitCheck.success) {
      return NextResponse.json(
        { ok: false, message: 'Çok fazla istek gönderdiniz. Lütfen bir dakika sonra tekrar deneyin.' },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json().catch(() => ({}));

    // 3. Honeypot Check (Field check)
    if (body.website && body.website.trim().length > 0) {
      console.warn('BOT_DETECTION: Honeypot field filled by bot:', body.website);
      return NextResponse.json({ ok: true }); // Return 200 silently to deceive the bot
    }

    // 4. Honeypot Check (Time-based check: less than 2 seconds is likely a bot)
    const formLoadedAt = Number(body.formLoadedAt || 0);
    const now = Date.now();
    if (formLoadedAt > 0 && now - formLoadedAt < 2000) {
      console.warn('BOT_DETECTION: Form submitted in less than 2 seconds:', now - formLoadedAt, 'ms');
      return NextResponse.json({ ok: true }); // Return 200 silently
    }

    // 5. Server-side validation using Zod
    const validationResult = QuoteFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const errorMessage = firstErrorKey 
        ? ((fieldErrors as any)[firstErrorKey]?.[0] || 'Lütfen bilgilerinizi kontrol edin.')
        : 'Lütfen bilgilerinizi kontrol edin.';
      
      return NextResponse.json(
        { ok: false, message: errorMessage, errors: fieldErrors },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 6. Idempotency Check
    cleanIdempotencyKeys();
    if (leadData.idempotencyKey) {
      if (processedKeys.has(leadData.idempotencyKey)) {
        console.warn('IDEMPOTENCY_TRIGGER: Duplicate request blocked:', leadData.idempotencyKey);
        return NextResponse.json({ ok: true, message: 'Talebiniz zaten alındı.' });
      }
      processedKeys.set(leadData.idempotencyKey, { timestamp: now });
    }

    const referrer = req.headers.get('referer') || '/teklif-al';
    const timestamp = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    
    // Unified price calculation using shared estimatePriceFromForm
    const est = estimatePriceFromForm(leadData.rooms, leadData.elevator, leadData.fromDistrict, leadData.toDistrict);

    const leadLogPayload = {
      ...leadData,
      referrer,
      timestamp,
      estimate: est
    };

    // 7. Log lead as JSON (Vercel Backup - ALWAYS written, primary source of truth)
    console.log('LEAD_CAPTURE:', JSON.stringify(leadLogPayload));

    // 8. Send email notification via Resend
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL;

    if (apiKey && notifyEmail) {
      const emailContent = {
        from: 'Uzman Eller Nakliyat <onboarding@resend.dev>',
        to: notifyEmail,
        subject: `Yeni Teklif Talebi - ${leadData.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e9eef2; border-radius: 10px;">
            <h2 style="color: #0b2d5b; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">Yeni Teklif Talebi Alındı</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2; width: 180px;">Ad Soyad:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${leadData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Telefon:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Nereden:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${leadData.fromDistrict}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Nereye:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${leadData.toDistrict}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Oda Sayısı:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${leadData.rooms} Daire</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Asansör Kurulumu:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${leadData.elevator === 'evet' ? 'Asansör Kurulsun' : 'Asansör İstenmiyor'}</td>
              </tr>
              <tr style="background: #f0f7f4;">
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2; color: #16a34a;">Tahmini Fiyat:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2; font-weight: bold; color: #16a34a;">
                  ${est.min.toLocaleString('tr-TR')} TL - ${est.max.toLocaleString('tr-TR')} TL
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Zaman Damgası:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2;">${timestamp}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e9eef2;">Referans Sayfa:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e9eef2; font-size: 11px;">${referrer}</td>
              </tr>
            </table>
            <div style="margin-top: 25px; font-size: 11px; color: #7b8a97; text-align: center;">
              Bu e-posta Mersin Uzman Eller Nakliyat web sitesi teklif hesaplayıcısı üzerinden otomatik olarak gönderilmiştir.
            </div>
          </div>
        `
      };

      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailContent),
          signal: AbortSignal.timeout(6000)
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error('RESEND_ERROR: Email notification delivery failed:', errText);
          // Graceful fallback for failed Resend response (log already contains payload)
          return NextResponse.json({ ok: true, message: 'Talebiniz kaydedildi. Sistem hatası nedeniyle e-posta gecikebilir, yetkililerimiz sizi en kısa sürede arayacaktır.' });
        } else {
          console.log('RESEND_SUCCESS: Email notification sent successfully to:', notifyEmail);
        }
      } catch (err) {
        console.error('RESEND_FATAL_ERROR: Unexpected error sending email notification:', err);
        // Graceful fallback on network/timeout errors
        return NextResponse.json({ ok: true, message: 'Talebiniz kaydedildi. Sistem hatası nedeniyle e-posta gecikebilir, yetkililerimiz sizi en kısa sürede arayacaktır.' });
      }
    } else {
      console.warn('RESEND_WARNING: RESEND_API_KEY or NOTIFY_EMAIL is not set in env. Skipping email notification.');
    }

    return NextResponse.json({ ok: true });

  } catch (error: any) {
    console.error('API_TEKLIF_ERROR:', error);
    return NextResponse.json(
      { ok: false, message: 'İstek işlenirken sunucuda bir hata oluştu.' },
      { status: 500 }
    );
  }
}
