import QuoteForm from '@/components/QuoteForm';
import PricingMatrix from '@/components/geo/PricingMatrix';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedLinks from '@/components/RelatedLinks';
import JsonLd from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema, serviceSchema, getPageSchemas } from '@/lib/schema';
import { SITE } from '@/lib/site-config';
import { FACTS } from '@/lib/facts';
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HelpCircle, Shield } from 'lucide-react';
import * as Icons from 'lucide-react';
import { servicesDatabase } from '@/lib/services-data';

// Define static params for all 9 services
export async function generateStaticParams() {
  return Object.keys(servicesDatabase).map((slug) => ({
    slug
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDatabase[slug];
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
  };
}

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.Shield;
  return <IconComponent className={className} />;
};

function replaceVariables(text: string) {
  if (!text) return '';
  return text
    .replaceAll('{FACTS.maxFloor}', FACTS.maxFloor.toString())
    .replaceAll('{FACTS.insurer}', FACTS.insurer)
    .replaceAll('{FACTS.foundedYear}', FACTS.foundedYear.toString())
    .replaceAll('{FACTS.districtCount}', FACTS.districtCount.toString());
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const s = servicesDatabase[slug];
  if (!s) {
    notFound();
  }

  const sss = s.faqs;
  
  const schemas = getPageSchemas({
    url: `/hizmetler/${s.slug}`,
    nodes: [
      serviceSchema({
        name: s.name,
        description: s.description,
        slug: `hizmetler/${s.slug}`,
        areaName: 'Mersin'
      }),
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Hizmetlerimiz', url: '/hizmetler' },
        { name: s.name, url: `/hizmetler/${s.slug}` }
      ]),
      faqSchema(sss)
    ]
  });

  return (
    <>
      <JsonLd data={schemas} />
      
      <main className="pt-24 bg-surface-muted min-h-screen">
        <Breadcrumb items={[{ name: 'Hizmetlerimiz', url: '/hizmetler' }, { name: s.name, url: `/hizmetler/${s.slug}` }]} className="pt-4" />
        
        {/* Intro Section */}
        <section className="py-20 bg-[url('/img/banner-bg.jpg')] bg-cover bg-center bg-no-repeat text-white text-center relative overflow-hidden before:absolute before:inset-0 before:bg-brand-primary/85 before:z-0">
          <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest uppercase">
              {replaceVariables(s.introSubtitle)}
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
              {replaceVariables(s.name)}
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {replaceVariables(s.introParagraph)}
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {s.sections.map((sect, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <DynamicIcon name={sect.icon} className="w-6 h-6 text-brand-accent" />
                <span>{replaceVariables(sect.title)}</span>
              </h2>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                {replaceVariables(sect.content)}
              </p>
            </div>
          ))}

          {s.slug === 'esya-depolama' && (
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Icons.Play className="w-6 h-6 text-brand-accent" />
                <span>Mersin Depolama Tesisimiz</span>
              </h2>
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-border-light shadow-inner bg-brand-primary/5 relative">
                <video 
                  src="/videos/merkezim.mp4" 
                  controls 
                  preload="metadata"
                  poster="/img/slayt-1.jpg"
                  className="w-full h-full object-cover"
                >
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              </div>
              <p className="text-charcoal text-xs md:text-sm leading-relaxed font-semibold text-center italic text-gray-500">
                * Mersin Yenişehir'de yer alan 7/24 kamera takipli, korunaklı eşya depolama tesisimiz.
              </p>
            </div>
          )}

          {s.hasMatrix && <PricingMatrix />}

          {s.table && (
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-accent" />
                <span>{s.name} Hizmet Standartları Tablosu</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-primary text-white">
                      {s.table.headers.map((hdr, idx) => (
                        <th 
                          key={idx} 
                          className={`p-3 font-display ${
                            idx === 0 ? 'rounded-tl-lg' : idx === s.table!.headers.length - 1 ? 'rounded-tr-lg' : ''
                          }`}
                        >
                          {hdr}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light text-charcoal">
                    {s.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-surface-muted/50">
                        {row.map((cell, cIdx) => (
                          <td 
                            key={cIdx} 
                            className={`p-3 ${cIdx === 0 ? 'font-bold' : ''} ${
                              cIdx === row.length - 1 ? 'font-medium text-brand-accent-dark' : ''
                            }`}
                          >
                            {replaceVariables(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <RelatedLinks currentSlug={s.slug} type="hizmet" />

          {sss && sss.length > 0 && (
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-brand-accent" />
                <span>Sıkça Sorulan Sorular</span>
              </h2>
              <div className="space-y-4 text-sm text-charcoal">
                {sss.map((item, idx) => (
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
