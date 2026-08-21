import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { SITE, DISTRICTS } from '@/lib/site-config';
import FooterAccordion from './FooterAccordion';
import TrackedLink from './TrackedLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainRegions = DISTRICTS.filter(d => d.indexable && d.tier === 'merkez').map(d => ({
    name: d.name,
    href: `/bolgeler/${d.slug}`
  }));

  const allRegions = DISTRICTS.filter(d => d.indexable).map(d => ({
    name: d.name,
    href: `/bolgeler/${d.slug}`
  }));

  return (
    <footer className="bg-brand-primary text-white border-t border-white/5 pt-16 pb-8" id="iletisim-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & NAP */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group bg-white px-5 py-3 rounded-2xl shadow-xl border border-border-light/20 w-fit">
              <Image
                src="/img/logo.png"
                alt="Mersin Uzman Eller Evden Eve Nakliyat logosu"
                width={160}
                height={64}
                loading="lazy"
                className="h-16 md:h-22 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              20 yıldır Mersin'de evden eve nakliyat, ofis taşımacılığı ve asansörlü nakliye hizmetleri vermekte olan yerel ve güvenilir taşımacılık ortağınız.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <FooterAccordion title="Hizmetlerimiz">
              <nav aria-label="Footer Hizmet Linkleri">
                <ul className="space-y-2 text-xs md:text-sm text-gray-300 font-semibold">
                  <li>
                    <Link href="/hizmetler/sehirici-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">1. Şehiriçi Evden Eve Nakliyat</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">2. Şehirlerarası Evden Eve Nakliyat</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/asansorlu-evden-eve-nakliyat" className="hover:text-brand-accent transition-colors">3. Asansörlü Evden Eve Nakliyat</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/ofis-ve-isyeri-tasimaciligi" className="hover:text-brand-accent transition-colors">4. İşyeri ve Ofis Taşıma</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/profesyonel-esya-paketleme" className="hover:text-brand-accent transition-colors">5. Profesyonel Eşya Paketleme</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/ucretsiz-ekspertiz" className="hover:text-brand-accent transition-colors">6. Ücretsiz Ekspertiz</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/esya-depolama" className="hover:text-brand-accent transition-colors">7. Kiralık Eşya Depolama</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/parca-esya-tasima" className="hover:text-brand-accent transition-colors">8. Parça Eşya Taşıma</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/piyano-ve-kasa-tasima" className="hover:text-brand-accent transition-colors">9. Piyano ve Ağır Kasa Taşıma</Link>
                  </li>
                  <li>
                    <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:text-white transition-colors">➔ Şehirlerarası Lojistik Rotalar</Link>
                  </li>
                </ul>
              </nav>
            </FooterAccordion>
          </div>

          {/* Column 3: Service Areas */}
          <div className="lg:col-span-3">
            <FooterAccordion title="Hizmet Bölgelerimiz">
              <nav aria-label="Footer Bölge Linkleri">
                {/* Desktop View: Always shows all 13 districts in 2 columns */}
                <div className="hidden lg:grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300 font-semibold">
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-brand-accent hover:underline col-span-2 font-bold">→ Şehirlerarası Taşımacılık</Link>
                  <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:underline col-span-2 border-b border-white/10 pb-1 font-bold">→ Şehirlerarası Lojistik Rotalar</Link>
                  {allRegions.map((reg, idx) => (
                    <Link key={idx} href={reg.href} prefetch={false} className="hover:text-brand-accent transition-colors">{reg.name}</Link>
                  ))}
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                  <div className="space-y-3">
                    <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat" className="text-brand-accent hover:underline block pb-1 font-bold text-xs border-b border-white/5">→ Şehirlerarası Taşımacılık</Link>
                    <Link href="/hizmetler/sehirlerarasi-evden-eve-nakliyat#rotalar" className="text-brand-accent hover:underline block pb-1 font-bold text-xs border-b border-white/5">→ Şehirlerarası Lojistik Rotalar</Link>
                    
                    {/* 5 regions limit initially */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 font-semibold">
                      {mainRegions.map((reg, idx) => (
                        <Link key={idx} href={reg.href} prefetch={false} className="hover:text-brand-accent transition-colors">📍 {reg.name}</Link>
                      ))}
                    </div>

                    <Link
                      href="/hizmetler/sehirlerarasi-evden-eve-nakliyat"
                      className="mt-3 text-brand-accent hover:underline text-xs font-bold flex items-center gap-1.5 justify-center bg-white/5 py-2.5 rounded-xl border border-white/10"
                    >
                      <span>Mersin Ev Taşıma Bölgelerimiz ➔</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </FooterAccordion>
          </div>

          {/* Column 4: Contact details (NAP Microdata structured) */}
          <div className="lg:col-span-3 space-y-4" itemScope itemType="https://schema.org/MovingCompany">
            <meta itemProp="name" content={SITE.name} />
            <meta itemProp="url" content={SITE.url} />
            {SITE.gbpUrl && <meta itemProp="sameAs" content={SITE.gbpUrl} />}
            <h4 className="font-display font-bold text-base tracking-wider uppercase border-l-2 border-brand-accent pl-3 text-white border-b border-white/5 pb-2 lg:border-none lg:pb-0">
              İletişim
            </h4>
            <div className="space-y-4 text-xs md:text-sm text-gray-300 pt-2 lg:pt-0">
              <div className="flex gap-2 items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span itemProp="streetAddress">{SITE.address.street}, <span itemProp="addressLocality">{SITE.address.locality}</span> / <span itemProp="addressRegion">{SITE.address.region}</span></span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-brand-accent" />
                <span>08:00 – 20:00 (Her Gün)</span>
              </div>
              <TrackedLink 
                itemProp="telephone"
                href={SITE.phoneHref} 
                eventName="telefon_tikla"
                eventParams={{ konum: 'footer', sayfa: 'footer' }}
                className="flex gap-2 items-center hover:text-brand-accent transition-colors font-bold"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>{SITE.phoneDisplay}</span>
              </TrackedLink>
              <a 
                itemProp="email"
                href={`mailto:${SITE.email}`} 
                className="flex gap-2 items-center hover:text-brand-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-gray-400 font-semibold pb-[env(safe-area-inset-bottom)] border-t border-white/5">
          {/* Left: Copyright & K3 */}
          <div className="text-center md:text-left">
            &copy; {currentYear} Mersin Uzman Eller Nakliyat. Tüm hakları saklıdır. K3 Yetki Belgesi ile Hizmet Vermekteyiz.
          </div>
          
          {/* Center: Growb Agency Credit */}
          <div className="flex justify-center">
            <a
              href="https://growbdijital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors bg-white px-3.5 py-2.5 rounded-xl shadow-md hover:shadow-lg w-fit transition-all duration-200"
            >
              <span className="text-[10px] text-gray-500 font-extrabold tracking-wide">TASARIM & SEO:</span>
              <Image
                src="/img/growb-logo.jpg"
                alt="Growb. Dijital Pazarlama ve SEO Ajansı logosu"
                width={100}
                height={32}
                loading="lazy"
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right: Legal Links */}
          <nav aria-label="Yasal Bağlantılar" className="flex gap-6 justify-center md:justify-end">
            <Link href="/yasal/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
