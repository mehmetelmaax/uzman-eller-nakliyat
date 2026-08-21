import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import BuildingAnalysis from '@/components/geo/BuildingAnalysis';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HelpCircle, Shield, Building, MapPin, ClipboardList, Coins } from 'lucide-react';
import { districtsDatabase } from '@/lib/districts-data';
import { DISTRICTS } from '@/lib/site-config';
import { FACTS } from '@/lib/facts';

// Pre-render all 13 districts statically
export async function generateStaticParams() {
  return DISTRICTS.filter(d => d.indexable).map((d) => ({
    slug: d.slug
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = slug.replace('-evden-eve-nakliyat', '');
  const district = districtsDatabase[cleanSlug];
  if (!district) {
    return {};
  }
  return {
    title: district.title,
    description: district.description,
    alternates: {
      canonical: `/bolgeler/${district.slug}-evden-eve-nakliyat`,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = slug.replace('-evden-eve-nakliyat', '');
  const d = districtsDatabase[cleanSlug];
  if (!d) {
    notFound();
  }

  const sss = d.sss;
  
  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: (d.title.split('|')[0] || d.title).trim(),
        description: d.description,
        slug: `bolgeler/${d.slug}-evden-eve-nakliyat`,
        areaName: d.name
      }),
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Bölgelerimiz', url: '/bolgeler' },
        { name: d.name, url: `/bolgeler/${d.slug}-evden-eve-nakliyat` }
      ]),
      faqSchema(sss)
    ]
  };

  return (
    <>
      <JsonLd data={schemas} />
      
      <main className="pt-24 bg-surface-muted">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/bolgeler' }, { name: d.name, url: `/bolgeler/${d.slug}-evden-eve-nakliyat` }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-[url('/img/banner-bg.jpg')] bg-cover bg-center bg-no-repeat text-white text-center relative overflow-hidden before:absolute before:inset-0 before:bg-brand-primary/85 before:z-0">
          <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest font-sans">
              {d.introSubtitle}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
              {d.name} Evden Eve Nakliyat
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {d.introParagraph}
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-accent" />
              <span>{d.block1Title}</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              {d.block1Paragraph}
            </p>
          </div>

          <PricingMatrix />
          <BuildingAnalysis districtName={d.name} />
          <RelatedLinks currentSlug={`${d.slug}-evden-eve-nakliyat`} type="bolge" />

          {d.mahalleler && d.mahalleler.length > 0 && (
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-brand-accent" />
                <span>{d.name}'da Hizmet Verdiğimiz Başlıca Mahalleler</span>
              </h2>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                {d.name} ilçesinin her mahallesine asansörlü nakliye araçlarımızla kesintisiz ulaşıyoruz. Yoğun olarak hizmet verdiğimiz mahallelerden bazıları şunlardır:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {d.mahalleler.map((mah, idx) => (
                  <div key={idx} className="bg-surface-muted p-4 rounded-lg border border-border-light/60 text-center font-bold text-brand-primary text-sm">
                    {mah}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
            <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
              <Building className="w-6 h-6 text-brand-accent" />
              <span>{d.block3Title}</span>
            </h2>
            <p className="text-charcoal text-sm md:text-base leading-relaxed">
              {d.block3Paragraph}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
              <Coins className="w-6 h-6 text-brand-accent" />
              <span>{d.name} Evden Eve Nakliyat Fiyatları</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-primary text-white">
                    <th className="p-3 font-display rounded-tl-lg">Daire Tipi</th>
                    <th className="p-3 font-display">Ortalama Eşya Hacmi</th>
                    <th className="p-3 font-display rounded-tr-lg">Fiyat Aralığı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light text-charcoal">
                  <tr className="hover:bg-surface-muted/50">
                    <td className="p-3 font-bold">1+1 Daire Taşıma</td>
                    <td className="p-3">Hafif Hacim (3 Personel)</td>
                    <td className="p-3 font-bold text-brand-accent-dark">21.000 TL - 26.000 TL</td>
                  </tr>
                  <tr className="hover:bg-surface-muted/50">
                    <td className="p-3 font-bold">2+1 Daire Taşıma</td>
                    <td className="p-3">Orta Hacim (4 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-brand-accent-dark">21.000 TL - 26.000 TL</td>
                  </tr>
                  <tr className="hover:bg-surface-muted/50">
                    <td className="p-3 font-bold">3+1 Daire Taşıma</td>
                    <td className="p-3">Yoğun Hacim (5 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-brand-accent-dark">21.000 TL - 26.000 TL</td>
                  </tr>
                  <tr className="hover:bg-surface-muted/50">
                    <td className="p-3 font-bold">4+1 Daire Taşıma</td>
                    <td className="p-3">Geniş Hacim (6 Personel + Asansör)</td>
                    <td className="p-3 font-bold text-brand-accent-dark">25.000 TL - 31.000 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
            <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-brand-accent" />
              <span>Taşınma Süreci Kontrol Adımları</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-charcoal">
              <div className="bg-surface-muted p-5 rounded-lg border border-border-light/60 space-y-2">
                <span className="bg-brand-accent text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span>
                <span className="font-bold text-brand-primary text-sm block">Ekspertiz</span>
                <p className="text-xs leading-relaxed">Eşya hacmi ve asansör kurulum açısı yerinde incelenir, sabit teklif sözleşmeye dökülür.</p>
              </div>
              <div className="bg-surface-muted p-5 rounded-lg border border-border-light/60 space-y-2">
                <span className="bg-brand-accent text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span>
                <span className="font-bold text-brand-primary text-sm block">Paketleme</span>
                <p className="text-xs leading-relaxed">Mobilyalar demonte edilir ve havalı balonlu kalın naylonlarla sarılır.</p>
              </div>
              <div className="bg-surface-muted p-5 rounded-lg border border-border-light/60 space-y-2">
                <span className="bg-brand-accent text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">3</span>
                <span className="font-bold text-brand-primary text-sm block">Yükleme</span>
                <p className="text-xs leading-relaxed">Eşyalarınız dış cephe asansörüyle hasarsızca kapalı çelik kasalı araçlarımıza yüklenir.</p>
              </div>
              <div className="bg-surface-muted p-5 rounded-lg border border-border-light/60 space-y-2">
                <span className="bg-brand-accent text-white font-black w-7 h-7 rounded-full flex items-center justify-center text-xs">4</span>
                <span className="font-bold text-brand-primary text-sm block">Montaj</span>
                <p className="text-xs leading-relaxed">Yeni evinizde marangoz montajları ve beyaz eşya bağlantıları ücretsiz yapılır.</p>
              </div>
            </div>
          </div>

          {sss && sss.length > 0 && (
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-brand-accent" />
                <span>Sıkça Sorulan Sorular</span>
              </h2>
              <div className="space-y-4 text-sm text-charcoal">
                {sss.map((item: any, idx: number) => (
                  <div key={idx} className={idx > 0 ? "border-t border-border-light/60 pt-4" : ""}>
                    <span className="font-bold text-brand-primary block mb-1">{item.question}</span>
                    <p className="text-charcoal/95 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm">
            <h3 className="font-display font-bold text-brand-primary text-xl md:text-2xl border-b border-border-light pb-3 mb-6">
              Hızlı Fiyat Teklifi Alın
            </h3>
            <QuoteForm isInline={true} />
          </div>
        </section>
      </main>
    </>
  );
}
