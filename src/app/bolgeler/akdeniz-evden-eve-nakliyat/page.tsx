import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import BuildingAnalysis from '@/components/geo/BuildingAnalysis';
import { FACTS } from '@/lib/facts';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE } from '@/lib/site-config';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building, Shield, ClipboardList, Coins, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Akdeniz Evden Eve Nakliyat | Uzman Eller Nakliyat',
  description: "Mersin Akdeniz Kazanlı, Karaduvar, Çilek, Şevket Sümer mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
  alternates: {
    canonical: '/bolgeler/akdeniz-evden-eve-nakliyat',
  },
};

export default function AkdenizPage() {
  const sss = [
  {
    "question": "Mesudiye'deki dar sokaklarda asansör kurulabilir mi?",
    "answer": "Evet, dar sokaklarda yanaşabilen kompakt hidrolik asansörlerimizle Akdeniz'in dar sokaklarında da hizmet vermekteyiz."
  },
  {
    "question": "Bahçe Mahallesi'ndeki eski binalarda de-montaj nasıl yapılıyor?",
    "answer": "Deneyimli marangoz ustalarımız gardırop ve yatak odası mobilyalarını söküp paketler, yeni evinizde tekrar monte eder."
  },
  {
    "question": "Akdeniz içi ev taşıma süresi ortalama kaç saat sürmektedir?",
    "answer": "Akdeniz sınırları içerisindeki evden eve nakliye işlemleri ortalama 6-8 saat içinde biter."
  }
];

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: 'Akdeniz Evden Eve Nakliyat',
        description: "Mersin Akdeniz Kazanlı, Karaduvar, Çilek, Şevket Sümer mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
        slug: 'bolgeler/akdeniz-evden-eve-nakliyat',
        areaName: 'Akdeniz'
      }),
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Bölgelerimiz', url: '/bolgeler' },
        { name: 'Akdeniz', url: '/bolgeler/akdeniz-evden-eve-nakliyat' }
      ]),
      faqSchema(sss)
    ]
  };

  const mahalleler = [
  "Kazanlı",
  "Karaduvar",
  "Çilek",
  "Şevket Sümer",
  "Hal",
  "Gündoğdu",
  "Bahçe",
  "Mesudiye"
];

  return (
    <>
      <JsonLd data={schemas} />
      
      <main className="pt-24 bg-off-white">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/#ilcelerimiz' }, { name: 'Akdeniz', url: '/bolgeler/akdeniz-evden-eve-nakliyat' }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-navy text-white text-center space-y-4">
          <span className="text-orange font-bold text-xs tracking-widest font-sans">
            MERSİN MERKEZ İLÇE SERVİSİ
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Akdeniz Evden Eve Nakliyat
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Akdeniz genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.
          </p>
        </section>

        {/* Detailed Content */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange" />
              <span>Güvenilir Akdeniz Nakliye Çözümleri</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Mersin'in yükselen değeri Akdeniz ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.
            </p>
          </div>

          <PricingMatrix />
          <BuildingAnalysis districtName="Akdeniz" />
          <RelatedLinks currentSlug="akdeniz-evden-eve-nakliyat" type="bolge" />

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange" />
              <span>Akdeniz'ta Hizmet Verdiğimiz Başlıca Mahalleler</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akdeniz ilçesinin her mahallesine asansörlü nakliye araçlarımızla kesintisiz ulaşıyoruz. Yoğun olarak hizmet verdiğimiz mahallelerden bazıları şunlardır:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {mahalleler.map((mah, idx) => (
                <div key={idx} className="bg-off-white p-4 rounded-lg border border-gray-light/60 text-center font-bold text-navy text-sm">
                  {mah}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Building className="w-6 h-6 text-orange" />
              <span>Akdeniz Bina Yapısı ve Eşya Asansörü İhtiyacı</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              Akdeniz ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6 text-orange" />
              <span>Akdeniz Evden Eve Nakliyat Fiyatları</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-3 font-display rounded-tl-lg">Daire Tipi</th>
                    <th className="p-3 font-display">Ortalama Eşya Hacmi</th>
                    <th className="p-3 font-display rounded-tr-lg">Fiyat Aralığı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-light text-charcoal">
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">1+1 Daire Taşıma</td>
                    <td className="p-3">Hafif Hacim (3 Personel)</td>
                    <td className="p-3 font-bold text-orange-text">12.000 TL - 15.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">2+1 Daire Taşıma</td>
                    <td className="p-3">Orta Hacim (4 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">15.000 TL - 20.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">3+1 Daire Taşıma</td>
                    <td className="p-3">Yoğun Hacim (5 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">18.000 TL - 23.000 TL</td>
                  </tr>
                  <tr className="hover:bg-off-white/50">
                    <td className="p-3 font-bold">4+1 Daire Taşıma</td>
                    <td className="p-3">Geniş Hacim (6 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-orange-text">22.000 TL - 28.000 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-orange" />
              <span>Taşınma Süreci Kontrol Adımları</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-charcoal">
              <div className="bg-off-white p-5 rounded-lg border border-gray-light/60 space-y-2">
                <span className="bg-orange text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span>
                <span className="font-bold text-navy text-sm block">Ekspertiz</span>
                <p className="text-xs leading-relaxed">Eşya hacmi ve asansör kurulum açısı yerinde incelenir, sabit teklif sözleşmeye dökülür.</p>
              </div>
              <div className="bg-off-white p-5 rounded-lg border border-gray-light/60 space-y-2">
                <span className="bg-orange text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span>
                <span className="font-bold text-navy text-sm block">Paketleme</span>
                <p className="text-xs leading-relaxed">Mobilyalar demonte edilir ve havalı balonlu kalın naylonlarla sarılır.</p>
              </div>
              <div className="bg-off-white p-5 rounded-lg border border-gray-light/60 space-y-2">
                <span className="bg-orange text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">3</span>
                <span className="font-bold text-navy text-sm block">Yükleme</span>
                <p className="text-xs leading-relaxed">Eşyalarınız dış cephe asansörüyle hasarsızca kapalı çelik kasalı araçlarımıza yüklenir.</p>
              </div>
              <div className="bg-off-white p-5 rounded-lg border border-gray-light/60 space-y-2">
                <span className="bg-orange text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">4</span>
                <span className="font-bold text-navy text-sm block">Montaj</span>
                <p className="text-xs leading-relaxed">Yeni evinizde marangoz montajları ve beyaz eşya bağlantıları ücretsiz yapılır.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-navy text-xl md:text-2xl flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-orange" />
              <span>Sıkça Sorulan Sorular</span>
            </h2>
            <div className="space-y-4 text-sm text-charcoal">
              {sss.map((item, idx) => (
                <div key={idx} className={idx > 0 ? "border-t border-gray-light/60 pt-4" : ""}>
                  <span className="font-bold text-navy block mb-1">{item.question}</span>
                  <p className="text-charcoal/95 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-light shadow-sm">
            <h3 className="font-display font-bold text-navy text-xl md:text-2xl border-b border-gray-light pb-3 mb-6">
              Hızlı Fiyat Teklifi Alın
            </h3>
            <QuoteForm isInline={true} />
          </div>
        </section>
      </main>
    </>
  );
}
