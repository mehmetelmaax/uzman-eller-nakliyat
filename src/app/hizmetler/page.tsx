import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site-config';
import { servicesDatabase } from '@/lib/services-data';
import * as Icons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Mersin Uzman Eller Nakliyat',
  description: "Mersin genelinde K3 yetki belgeli asansörlü evden eve nakliyat, parça eşya taşıma, eşya depolama ve ofis taşımacılığı hizmetlerimiz.",
  alternates: {
    canonical: '/hizmetler',
  },
};

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.Shield;
  return <IconComponent className={className} />;
};

export default function HizmetlerPage() {
  const services = Object.values(servicesDatabase);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hizmetlerimiz | Uzman Eller Nakliyat',
    description: 'Mersin genelinde sunduğumuz profesyonel taşımacılık ve depolama hizmetleri.',
    url: `${SITE.url}/hizmetler`,
    hasPart: services.map(s => ({
      '@type': 'Service',
      name: s.name,
      description: s.description,
      url: `${SITE.url}/hizmetler/${s.slug}`
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      
      <main className="pt-24 bg-surface-muted min-h-screen">
        <Breadcrumb items={[{ name: 'Hizmetlerimiz', url: '/hizmetler' }]} className="pt-4" />
        
        {/* Intro */}
        <section className="py-20 bg-brand-primary text-white text-center space-y-4">
          <span className="text-brand-accent font-bold text-xs tracking-widest font-sans">
            KURUMSAL TAŞIMACILIK
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Nakliye ve Depolama Hizmetlerimiz
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Mersin merkezli K3 yetki belgeli filomuz ve uzman kadromuzla sunduğumuz profesyonel lojistik çözümleri.
          </p>
        </section>

        {/* Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => {
              const mainIcon = s.sections[0]?.icon || 'Shield';
              return (
                <div key={s.slug} className="bg-white p-8 rounded-2xl border border-border-light shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-4">
                    <div className="bg-surface-muted p-4 rounded-xl border border-border-light w-fit">
                      <DynamicIcon name={mainIcon} className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h2 className="font-display font-bold text-brand-primary text-xl">
                      {s.name}
                    </h2>
                    <p className="text-charcoal text-sm leading-relaxed line-clamp-3">
                      {s.introParagraph}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link 
                      href={`/hizmetler/${s.slug}`} 
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:text-brand-primary transition-colors"
                    >
                      <span>Hizmet Detayını İnceleyin</span>
                      <Icons.ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
