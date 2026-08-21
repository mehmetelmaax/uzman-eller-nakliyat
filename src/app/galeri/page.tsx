import React from 'react';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { Camera } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hizmet Faaliyet Galerimiz | Uzman Eller Nakliyat',
  description: "Mersin Uzman Eller Nakliyat asansörlü taşıma araçları, paketleme işlemleri ve ekip çalışmalarına ait gerçek operasyon fotoğrafları galerisi.",
  alternates: {
    canonical: '/galeri',
  },
};

interface GalleryItem {
  src: string;
  title: string;
  desc: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/img/slayt-1.jpg',
    title: 'Şehirlerarası Nakliyat Tırımız',
    desc: 'Büyük boy çelik kasa ev eşyası taşıma kamyonumuz yükleme esnasında.',
    alt: "Mersin'den Türkiye geneline K3 belgeli araçlarla şehirlerarası evden eve nakliyat taşıması yapan büyük nakliye tırı",
  },
  {
    src: '/img/slayt-2.jpg',
    title: 'Dış Cephe Asansör Kurulumu',
    desc: 'Rezidans tipi binalarda balkondan eşya transferi yapan teleskopik asansörümüz.',
    alt: "Mersin Yenişehir'de yüksek katlı bir rezidansın dış cephesine kurulmuş teleskopik yük ve eşya taşıma asansörü",
  },
  {
    src: '/img/slayt-3.jpg',
    title: 'Asansörlü Nakliye Aracımız',
    desc: 'Mobil asansör kasalı taşıma kamyonetimiz dar sokakta operasyonda.',
    alt: "Asansörlü nakliyat taşıma hizmeti veren teleskopik asansör sistemli Mersin Uzman Eller Nakliyat taşıma aracı",
  },
  {
    src: '/img/arac-filosu.jpg',
    title: 'Kapalı Kasa Ev Eşyası Kamyonumuz',
    desc: 'Rüzgardan, yağmurdan korunaklı özel yapım mobilya kasalı aracımız.',
    alt: "Eşyaların yolda zarar görmemesi için içi MDF kaplı kapalı kasa evden eve taşımacılık nakliye kamyonu",
  },
  {
    src: '/img/paketleme-detay.jpg',
    title: 'Özenli Eşya Ambalajlama',
    desc: 'Kraft kağıt ve patpat naylonlarla korumaya alınmış mobilyalar.',
    alt: "Uzman Eller Nakliyat marangozlarınca balonlu patpat ambalaj malzemeleri ile paketlenerek korumaya alınmış gardırop ve mobilyalar",
  },
  {
    src: '/img/ekip.jpg',
    title: 'Profesyonel Nakliye Ekibimiz',
    desc: 'Uzman Eller logolu kurumsal kıyafetli kadrolu taşıma personellerimiz.',
    alt: "Mersin Uzman Eller Nakliyat kurumsal logolu iş elbiseleriyle uzman ve sigortalı profesyonel taşıma ekibimiz",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-1.jpeg',
    title: 'Eşya Yükleme ve İstifleme',
    desc: 'Kapalı kasa nakliyat tırımıza eşyaların hasar görmeyecek şekilde düzenli istiflenmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait eşya yükleme ve i̇stifleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-2.jpeg',
    title: 'Profesyonel Ambalajlama İşlemi',
    desc: 'Eşyaların taşınma esnasında çizilmesini önleyen kalın balonlu patpat naylon sarımı.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait profesyonel ambalajlama i̇şlemi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-3.jpeg',
    title: 'Asansörlü Nakliye Kurulumu',
    desc: 'Yüksek katlı binalarda güvenli taşıma sağlayan mobil asansör sistemimiz.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait asansörlü nakliye kurulumu gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-4.jpeg',
    title: 'Marangozlu De-montaj Hizmeti',
    desc: 'Mobilyalarınızın taşınma öncesinde uzman marangozumuzca sökülmesi ve numaralandırılması.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait marangozlu de-montaj hizmeti gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-5.jpeg',
    title: 'Hassas Eşya Paketleme',
    desc: 'Kırılacak cam ve mutfak eşyalarının Kraft kağıtlarla sarılıp kolilere yerleştirilmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait hassas eşya paketleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-6.jpeg',
    title: 'Şehirlerarası Nakliye Sevk',
    desc: 'Mersin Yenişehir merkezimizden diğer illere yola çıkmaya hazır kapalı kasa taşıma aracımız.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait şehirlerarası nakliye sevk gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-7.jpeg',
    title: 'Güvenli Taşımacılık Ekibi',
    desc: 'Mersin Uzman Eller Nakliyat güvencesiyle uzman kadromuz iş başında.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait güvenli taşımacılık ekibi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-8.jpeg',
    title: 'Evden Eve Eşya Transferi',
    desc: 'Eşyaların oda oda tasnif edilip yeni evinizde istenen yerlere yerleştirilmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait evden eve eşya transferi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-9.jpeg',
    title: 'Asansörlü Eşya İndirme',
    desc: 'Apartman içi merdivenleri kullanmadan balkondan doğrudan araca yükleme yapılması.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait asansörlü eşya i̇ndirme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-10.jpeg',
    title: 'Kaliteli Ambalaj Malzemeleri',
    desc: 'Koli, köşe koruyucu bentler ve özel ambalaj ipleriyle yapılan kurumsal paketleme.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait kaliteli ambalaj malzemeleri gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-11.jpeg',
    title: 'Eşya Yükleme ve İstifleme',
    desc: 'Kapalı kasa nakliyat tırımıza eşyaların hasar görmeyecek şekilde düzenli istiflenmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait eşya yükleme ve i̇stifleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-12.jpeg',
    title: 'Profesyonel Ambalajlama İşlemi',
    desc: 'Eşyaların taşınma esnasında çizilmesini önleyen kalın balonlu patpat naylon sarımı.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait profesyonel ambalajlama i̇şlemi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-13.jpeg',
    title: 'Asansörlü Nakliye Kurulumu',
    desc: 'Yüksek katlı binalarda güvenli taşıma sağlayan mobil asansör sistemimiz.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait asansörlü nakliye kurulumu gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-14.jpeg',
    title: 'Marangozlu De-montaj Hizmeti',
    desc: 'Mobilyalarınızın taşınma öncesinde uzman marangozumuzca sökülmesi ve numaralandırılması.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait marangozlu de-montaj hizmeti gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-15.jpeg',
    title: 'Hassas Eşya Paketleme',
    desc: 'Kırılacak cam ve mutfak eşyalarının Kraft kağıtlarla sarılıp kolilere yerleştirilmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait hassas eşya paketleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-16.jpeg',
    title: 'Şehirlerarası Nakliye Sevk',
    desc: 'Mersin Yenişehir merkezimizden diğer illere yola çıkmaya hazır kapalı kasa taşıma aracımız.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait şehirlerarası nakliye sevk gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-17.jpeg',
    title: 'Güvenli Taşımacılık Ekibi',
    desc: 'Mersin Uzman Eller Nakliyat güvencesiyle uzman kadromuz iş başında.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait güvenli taşımacılık ekibi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-18.jpeg',
    title: 'Evden Eve Eşya Transferi',
    desc: 'Eşyaların oda oda tasnif edilip yeni evinizde istenen yerlere yerleştirilmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait evden eve eşya transferi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-19.jpeg',
    title: 'Asansörlü Eşya İndirme',
    desc: 'Apartman içi merdivenleri kullanmadan balkondan doğrudan araca yükleme yapılması.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait asansörlü eşya i̇ndirme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-20.jpeg',
    title: 'Kaliteli Ambalaj Malzemeleri',
    desc: 'Koli, köşe koruyucu bentler ve özel ambalaj ipleriyle yapılan kurumsal paketleme.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait kaliteli ambalaj malzemeleri gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-21.jpeg',
    title: 'Eşya Yükleme ve İstifleme',
    desc: 'Kapalı kasa nakliyat tırımıza eşyaların hasar görmeyecek şekilde düzenli istiflenmesi.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait eşya yükleme ve i̇stifleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/mersin-nakliyat-faaliyet-22.jpeg',
    title: 'Profesyonel Ambalajlama İşlemi',
    desc: 'Eşyaların taşınma esnasında çizilmesini önleyen kalın balonlu patpat naylon sarımı.',
    alt: "Mersin Uzman Eller Nakliyat firmasına ait profesyonel ambalajlama i̇şlemi gerçek faaliyet fotoğrafı",
  }
];

export default function GalleryPage() {
  const schema = breadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Galeri', url: '/galeri' }
  ]);

  return (
    <>
      <JsonLd data={schema} />
      
      <main className="pt-24 bg-surface-muted min-h-screen">
        {/* Intro */}
        <section className="py-16 bg-[url('/img/banner-bg.jpg')] bg-cover bg-center bg-no-repeat text-white text-center relative overflow-hidden before:absolute before:inset-0 before:bg-brand-primary/85 before:z-0">
          <div className="relative z-10 space-y-4 max-w-4xl mx-auto px-4">
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1">
              <Camera className="w-4 h-4 text-brand-accent" />
              <span>Faaliyetlerimiz</span>
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
              Hizmet Galerisi
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Eşya paketleme, asansör kurulumu ve taşıma anlarına ait gerçek operasyon fotoğraflarımız.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </section>
      </main>
    </>
  );
}
