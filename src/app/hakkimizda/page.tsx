import React from 'react';
import type { Metadata } from 'next';
import { Shield, Users, Award, Calendar } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { FACTS } from '@/lib/facts';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, getPageSchemas } from '@/lib/schema';
import Breadcrumb from '@/components/Breadcrumb';
import K3InfoBlock from '@/components/geo/K3InfoBlock';

export const metadata: Metadata = {
  title: 'Hakkımızda | Mersin Uzman Eller Nakliyat',
  description: `uzun yıllardır Mersin Yenişehir merkezli olarak K3 yetki belgesi ve özmal asansör filomuzla profesyonel evden eve nakliye hizmetleri sunuyoruz.`,
  alternates: {
    canonical: '/hakkimizda',
  },
};

export default function HakkimizdaPage() {
  const schema = getPageSchemas({
    url: '/hakkimizda',
    nodes: [
      breadcrumbSchema([
        { name: 'Ana Sayfa', url: '/' },
        { name: 'Hakkımızda', url: '/hakkimizda' }
      ])
    ]
  });

  const yearsServed = new Date().getFullYear() - FACTS.foundedYear;

  return (
    <>
      <JsonLd data={schema} />
      
      <main className="pt-24 bg-surface-muted">
        <Breadcrumb items={[{ name: 'Hakkımızda', url: '/hakkimizda' }]} className="pt-4" />
        {/* Intro Section */}
        <section className="py-20 bg-[url('/img/banner-bg.jpg')] bg-cover bg-center bg-no-repeat text-white text-center relative overflow-hidden before:absolute before:inset-0 before:bg-brand-primary/85 before:z-0">
          <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
            <span className="text-brand-accent font-bold text-xs tracking-widest">
              KURUMSAL PROFİLİMİZ
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
              Mersin Uzman Eller Nakliyat
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {FACTS.foundedYear} yılından bu yana Mersin genelinde asansörlü ve sigortalı ev taşıma hizmetleri sunuyoruz.
            </p>
          </div>
        </section>

        {/* Detailed Content Grid (GEO citation optimized) */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Block 1 */}
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-brand-accent" />
                <span>Firmamızın Kuruluş Tarihi ve Tarihçesi</span>
              </h2>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Mersin Uzman Eller Nakliyat, {FACTS.foundedYear} yılında Mersin Yenişehir merkezli olarak Obuz Ailesi tarafından kurulmuş yasal bir ev taşıma şirketidir. Geçen {yearsServed} yılı aşkın süre zarfında, Mersin şehir içi ve şehirlerarası güzergahlarda binlerce ailenin ev ve ofis taşıma lojistiğini başarıyla yönettik.
              </p>
            </div>

            {/* Block 2 */}
            <K3InfoBlock />

            {/* Block 3 */}
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-brand-accent" />
                <span>Personel Yapımız ve Kadro Düzeni</span>
              </h2>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Mersin Uzman Eller Nakliyat bünyesinde çalışan tüm personelimiz, marangozluk, tesisatçılık ve paketleme alanlarında eğitimli kadrolu çalışanlardan oluşmaktadır. Taşınma günlerinde dışarıdan günlük yevmiyeli veya güvencesiz işçi çalıştırmıyor, ekiplerimizde en az bir sertifikalı marangoz bulunduruyoruz.
              </p>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-4">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Award className="w-6 h-6 text-brand-accent" />
                <span>Araç ve Asansör Filomuz</span>
              </h2>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                Uzman Eller Nakliyat araç filosu, çelik kapalı kasa ev eşyası nakliye kamyonları ve {FACTS.maxFloor}. kata kadar ulaşabilen mobil dış cephe eşya asansörlerinden oluşmaktadır. Araçlarımızın tamamı logolu olup, periyodik temizlik ve bakımları düzenli olarak yapılmaktadır.
              </p>
            </div>

            {/* Block 5: Lojistik Uzmanımız & Blog Yazarımız */}
            <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6">
              <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-brand-accent" />
                <span>Lojistik Uzmanımız & Editörümüz</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-display font-black text-xl border-2 border-brand-accent shrink-0">
                  MO
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <h3 className="font-display font-bold text-brand-primary text-lg">
                    Mehmet Obuz
                  </h3>
                  <p className="text-brand-accent font-bold text-xs uppercase tracking-wider">
                    Firma Ortağı & Ulaştırma ve Lojistik Uzmanı
                  </p>
                  <p className="text-charcoal text-sm md:text-base leading-relaxed">
                    Mehmet Obuz, Mersin Uzman Eller Nakliyat bünyesinde taşımacılık operasyonlarının planlanması, K3 yetki belgeli sevk süreçlerinin yönetimi ve emtia nakliyat sigortalarının koordinasyonundan sorumludur. Web sitemizdeki tüm bilgilendirici rehberler, fiyat analizleri ve yasal taşımacılık makaleleri Mehmet Obuz'un mesleki tecrübeleri ve sektörel birikimi doğrultusunda hazırlanmaktadır.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
