import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SITE, DISTRICTS } from '@/lib/site-config';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hizmet Bölgelerimiz | Mersin Uzman Eller Nakliyat',
  description: "Mersin Yenişehir, Mezitli, Toroslar, Akdeniz ve Tarsus dahil 13 ilçenin tamamında asansörlü, sigortalı evden eve nakliye hizmet bölgelerimiz.",
  alternates: {
    canonical: '/bolgeler',
  },
};

export default function BolgelerPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hizmet Bölgelerimiz | Uzman Eller Nakliyat',
    description: 'Mersin genelinde asansörlü ve marangozlu ev taşıma hizmeti sunduğumuz ilçeler listesi.',
    url: `${SITE.url}/bolgeler`,
    hasPart: DISTRICTS.filter(d => d.indexable).map(d => ({
      '@type': 'Place',
      name: d.name,
      url: `${SITE.url}/bolgeler/${d.slug}`
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      
      <main className="pt-24 bg-surface-muted min-h-screen">
        <Breadcrumb items={[{ name: 'Bölgelerimiz', url: '/bolgeler' }]} className="pt-4" />
        
        {/* Intro */}
        <section className="py-20 bg-brand-primary text-white text-center space-y-4">
          <span className="text-brand-accent font-bold text-xs tracking-widest font-sans">
            Mersin Geneli Geniş Hizmet Ağı
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Hizmet Bölgelerimiz ve İlçelerimiz
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Mersin'in 13 ilçesinde yasal belgeli asansörlü araçlarımız ve uzman kadrolarımızla kapıdan kapıya nakliye çözümleri.
          </p>
        </section>

        {/* Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DISTRICTS.filter(d => d.indexable).map((d) => (
              <div key={d.slug} className="bg-white p-6 rounded-xl border border-border-light shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="bg-surface-muted p-3 rounded-lg border border-border-light w-fit text-brand-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="font-display font-bold text-brand-primary text-lg">
                    {d.name}
                  </h2>
                  <p className="text-charcoal text-xs leading-relaxed">
                    Mersin merkezine yaklaşık {d.distanceKm} km mesafede yer alan {d.name} ilçesinde asansörlü ve sigortalı ev taşıma desteği vermekteyiz.
                  </p>
                </div>
                <div className="pt-4">
                  <Link 
                    href={`/bolgeler/${d.slug}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-primary transition-colors"
                  >
                    <span>İlçe Detayını İnceleyin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
