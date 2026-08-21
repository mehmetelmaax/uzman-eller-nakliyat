import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site-config';
import { routesMetadataDatabase } from '@/content/routes';
import { Truck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Şehirlerarası Nakliyat Rotalarımız | Uzman Eller Nakliyat',
  description: "Mersin'den İstanbul, Ankara, İzmir, Adana, Antalya ve Gaziantep dahil Türkiye geneline haftalık düzenli şehirlerarası ev taşıma rotalarımız.",
  alternates: {
    canonical: '/rotalar',
  },
};

export default function RotalarHubPage() {
  const routes = Object.values(routesMetadataDatabase);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Şehirlerarası Nakliyat Rotaları | Uzman Eller Nakliyat',
    description: "Mersin'den Türkiye geneline düzenlediğimiz şehirlerarası eşya taşıma rotaları.",
    url: `${SITE.url}/rotalar`,
    hasPart: routes.map(r => ({
      '@type': 'Service',
      name: `${r.city} Evden Eve Nakliyat`,
      url: `${SITE.url}/rotalar/${r.slug}`
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      
      <main className="pt-24 bg-surface-muted min-h-screen">
        <Breadcrumb items={[{ name: 'Rotalarımız', url: '/rotalar' }]} className="pt-4" />
        
        {/* Intro */}
        <section className="py-20 bg-brand-primary text-white text-center space-y-4">
          <span className="text-brand-accent font-bold text-xs tracking-widest font-sans">
            TÜRKİYE GENELİ HİZMET
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Şehirlerarası Taşımacılık Rotalarımız
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Mersin çıkışlı olarak tüm şehirlerimize düzenli seferler ile sunduğumuz ekonomik ve güvenli evden eve nakliye hatları.
          </p>
        </section>

        {/* List Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {routes.map((r) => (
              <div key={r.slug} className="bg-white p-8 rounded-2xl border border-border-light shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="bg-surface-muted p-4 rounded-xl border border-border-light w-fit text-brand-accent">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h2 className="font-display font-bold text-brand-primary text-xl">
                    Mersin - {r.city} Nakliyat
                  </h2>
                  <p className="text-charcoal text-sm leading-relaxed line-clamp-3">
                    {r.notes} Güzergâh: {r.viaRoute}. Toplam mesafe yaklaşık {r.distanceKm} km'dir.
                  </p>
                </div>
                <div className="pt-6 border-t border-border-light/60 mt-6">
                  <Link 
                    href={`/rotalar/${r.slug}`} 
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:text-brand-primary transition-colors"
                  >
                    <span>Rota Detaylarını Görün</span>
                    <ArrowRight className="w-4 h-4" />
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
