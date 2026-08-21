import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, DISTRICTS } from '@/lib/site-config';
import { FACTS } from '@/lib/facts';
import HeroSlider from '@/components/HeroSlider';
import TrustStrip from '@/components/TrustStrip';
import ServicesGrid from '@/components/ServicesGrid';
import FAQAccordion from '@/components/FAQAccordion';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, websiteSchema, faqSchema, webPageSchema, howToMovingSchema } from '@/lib/schema';
import { faqs } from '@/lib/faq-data';
import { Star, ShieldAlert, BadgeCheck, Users2, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mersin Evden Eve Nakliyat | Uzman Eller Nakliyat Sabit Fiyat',
  description: "Mersin'de taşınma günü ek ücret çıkarmayan, sabit fiyat garantili asansörlü evden eve nakliyat firması. Yenişehir ve Mezitli ilçelerinde sigortalı taşıma.",
  keywords: [
    'mersin evden eve nakliyat',
    'eseyler evden eve nakliyat',
    'esneleme evden eve',
    'yenisehir evden eve nakliyat',
    'mezitli evden eve nakliyat',
    'mersin nakliyat firmalari',
  ],
  alternates: {
    canonical: '/',
  },
};



export default function Home() {
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      webPageSchema({ url: '/' }),
      faqSchema(faqs),
      howToMovingSchema()
    ]
  };

  return (
    <>
      <JsonLd data={graphSchema} />
      
      <main className="flex-1 w-full">
        <h1 className="sr-only">Mersin Evden Eve Nakliyat | Sabit Fiyatlı Asansörlü Taşımacılık</h1>
        {/* Hero Area */}
        <HeroSlider />

        {/* Local Verified badges */}
        <TrustStrip />

        {/* Neden Uzman Eller Section */}
        <section className="py-20 bg-brand-primary text-white" id="neden-uzman-eller">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest">
                KURUMSAL FARKIMIZ
              </span>
              <h2 className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
                Neden Uzman Eller Mersin Nakliyat?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Taşınma günündeki sürpriz ek masraf ve hasar endişelerinizi yasal garantilerle ortadan kaldırıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-brand-accent/20 transition-all duration-300 space-y-4">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-lg w-fit">
                  <BadgeCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Sabit Fiyat Sözleşmesi</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Taşıma öncesinde hazırladığımız resmi sözleşme ile anlaşılan fiyatı sabitliyoruz. Taşınma günü veya yol bittiğinde hiçbir ad altında ek ücret talep etmiyoruz.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-brand-accent/20 transition-all duration-300 space-y-4">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-lg w-fit">
                  <Users2 className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Eğitimli Kadrolu Personel</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ekiplerimizin tamamı marangozluk ve beyaz eşya tesisatı konularında deneyimli kendi çalışanlarımızdır. Günlük yevmiyeli veya güvencesiz hamal çalıştırmıyoruz.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-brand-accent/20 transition-all duration-300 space-y-4">
                <div className="bg-brand-accent/10 text-brand-accent p-3.5 rounded-lg w-fit">
                  <Building2 className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Kendi Mobil Asansör Filomuz</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dışarıdan kiralık asansör aramak yerine, 25. kata kadar ulaşan kendi araç filomuzdaki mobil asansör sistemlerini sevk ederek işlerin aksamasını önlüyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Services */}
        <ServicesGrid />

        {/* Operational Steps */}
        <section className="py-20 bg-brand-primary text-white border-t border-white/5" id="surec">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent font-bold text-xs tracking-widest">
                İŞLEYİŞ MODELİ
              </span>
              <h2 className="font-display font-black text-white text-3xl md:text-4xl tracking-tight leading-tight">
                Nasıl Taşıyoruz?
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Taşınma gününün karmaşasını ortadan kaldıran 4 adımlı standart çalışma modelimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="space-y-4 text-center md:text-left relative">
                <span className="font-display font-black text-brand-accent/30 text-5xl md:text-6xl block">01</span>
                <h3 className="font-display font-bold text-white text-lg">Hızlı Keşif ve Fiyatlama</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Oda sayınızı ve eşya miktarınızı analiz edip net, sabit fiyat teklifimizi sözleşmeyle sunarız.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-black text-brand-accent/30 text-5xl md:text-6xl block">02</span>
                <h3 className="font-display font-bold text-white text-lg">Özenli Paketleme</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eşyalarınızı çift katlı havalı balonlu naylonlar ve kalın Kraft karton kutularla darbeye karşı sararız.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-black text-brand-accent/30 text-5xl md:text-6xl block">03</span>
                <h3 className="font-display font-bold text-white text-lg">Asansörlü Yükleme</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Kendi dış cephe asansörlerimizle eşyaları dar apartman merdivenlerine sokmadan doğrudan araca indiririz.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 text-center md:text-left">
                <span className="font-display font-black text-brand-accent/30 text-5xl md:text-6xl block">04</span>
                <h3 className="font-display font-bold text-white text-lg">Montaj ve Yerleşim</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Yeni evinizde gardırop marangoz montajını yapar, beyaz eşyaları bağlar ve çalışır halde teslim ederiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mersin'in Tüm İlçelerinde Hizmetteyiz Section */}
        <section className="py-20 bg-white" id="ilcelerimiz">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-brand-accent-dark font-bold text-xs tracking-widest">
                GENİŞ HİZMET AĞI
              </span>
              <h2 className="font-display font-black text-brand-primary text-3xl md:text-4xl tracking-tight leading-tight">
                Mersin'in Tüm İlçelerinde Hizmetteyiz
              </h2>
              <p className="text-charcoal text-base leading-relaxed">
                Mersin merkezli araç filomuzla Yenişehir'den Anamur'a kadar {FACTS.districtCount} ilçenin tamamında asansörlü ve sigortalı ev taşıma desteği sağlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {DISTRICTS.map((d, idx) => {
                const anchors = [
                  `${d.name} evden eve nakliyat`,
                  `${d.name} ev taşıma firması`,
                  `${d.name} asansörlü nakliye`,
                  `${d.name} nakliyat hizmetleri`,
                ];
                const anchorText = anchors[idx % anchors.length];
                return (
                  <div key={d.slug} className="bg-surface-muted p-6 rounded-xl border border-border-light hover:border-brand-accent/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3">
                    <h3 className="font-display font-bold text-brand-primary text-base">{d.name} Şubesi</h3>
                    <p className="text-charcoal/80 text-xs leading-relaxed">
                      {d.name} ilçesinde yüksek katlı daireler için modüler dış cephe asansörlerimizle sabit fiyatlı ev nakliyat hizmeti vermekteyiz.
                    </p>
                    <Link
                      href={`/bolgeler/${d.slug}`}
                      className="text-brand-accent-dark hover:underline text-xs font-bold block"
                    >
                      {anchorText} ➔
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Google Maps Reviews Section */}
        <section className="py-20 bg-brand-primary text-white border-t border-white/5" id="yorumlar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-accent font-bold text-xs tracking-widest block">
              MÜŞTERİ DENEYİMLERİ
            </span>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl tracking-tight leading-tight max-w-2xl mx-auto">
              Müşterilerimizin Google Değerlendirmeleri
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Mersin genelinde sunduğumuz asansörlü evden eve nakliyat hizmetlerimizin kalitesini ve müşteri memnuniyetini doğrudan Google Haritalar profilimiz üzerinden inceleyebilirsiniz.
            </p>
            
            {SITE.gbpUrl ? (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <a
                  href={SITE.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-accent hover:bg-white text-brand-primary font-black px-6 py-3.5 rounded-xl border border-brand-primary transition-all duration-200 text-sm flex items-center gap-2 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span>Google'da Bizi Değerlendirin</span>
                </a>
                <a
                  href={SITE.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-accent font-bold text-sm flex items-center gap-1.5 transition-colors py-3"
                >
                  <span>Tüm Yorumları Google'da Okuyun</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <p className="text-brand-accent text-xs italic pt-4">
                * Google Harita profilimiz yakında hizmete girecektir.
              </p>
            )}
          </div>
        </section>

        {/* Bottom Call to Action banner */}
        <section className="py-16 bg-brand-accent text-brand-primary text-center space-y-6">
          <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl tracking-tight max-w-xl mx-auto text-brand-primary">
            Hemen Sabit Fiyatlı Teklifinizi Alın
          </h2>
          <p className="text-brand-primary/85 text-sm max-w-md mx-auto leading-relaxed font-semibold">
            Dairenizin oda durumunu seçin, asansör ihtiyacınızı belirterek taşınma bedelinizi hemen hesaplayın.
          </p>
          <Link
            href="/teklif-al"
            className="bg-brand-primary hover:bg-white text-white hover:text-brand-primary font-black px-8 py-4 rounded border border-brand-primary transition-all duration-200 inline-block text-base shadow-md cursor-pointer active:scale-95"
          >
            Maliyeti Hesapla
          </Link>
        </section>

        {/* FAQ Area */}
        <FAQAccordion />
      </main>

      {/* Floating CTA */}
      <StickyMobileCTA />
    </>
  );
}
