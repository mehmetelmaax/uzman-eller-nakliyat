import { MetadataRoute } from 'next';
import { SITE, DISTRICTS } from '@/lib/site-config';
import { blogMetadataDatabase } from '@/content/blog';
import { servicesDatabase } from '@/lib/services-data';
import { routesMetadataDatabase } from '@/content/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  // 1. Ana Sayfa (1.0, weekly)
  const mainPage = {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // 2. Fiyat Teklifi Al (0.9, monthly)
  const teklifPage = {
    url: `${baseUrl}/teklif-al`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  };

  // 3. Hub Pages (0.8, monthly)
  const hubPages = ['/hizmetler', '/bolgeler', '/rotalar'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. Hizmetler (9 adet, 0.9, monthly)
  const servicePages = Object.keys(servicesDatabase).map((slug) => ({
    url: `${baseUrl}/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 5. Bölgeler - Merkez (4 adet, 0.9, monthly)
  const merkezRegionPages = DISTRICTS.filter(d => d.tier === 'merkez' && d.indexable).map((district) => ({
    url: `${baseUrl}/bolgeler/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 6. Bölgeler - İlçe (9 adet, 0.7, monthly)
  const ilceRegionPages = DISTRICTS.filter(d => d.tier === 'ilce' && d.indexable).map((district) => ({
    url: `${baseUrl}/bolgeler/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 7. İletişim (0.8, monthly)
  const iletisimPage = {
    url: `${baseUrl}/iletisim`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  };

  // 8. Blog List (0.7, weekly)
  const blogPage = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  };

  // 9. Blog Yazıları (0.6, monthly)
  const blogPostPages = Object.values(blogMetadataDatabase).map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 10. Hakkımızda (0.6, yearly)
  const hakkimizdaPage = {
    url: `${baseUrl}/hakkimizda`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  };

  // 11. Galeri (0.5, monthly)
  const galeriPage = {
    url: `${baseUrl}/galeri`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  };

  // 12. Yasal Sayfalar (2 adet, 0.3, yearly)
  const yasalPages = ['gizlilik', 'kvkk'].map((slug) => ({
    url: `${baseUrl}/yasal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // 13. Yeni Rehber ve Yardımcı Sayfalar (0.8, monthly)
  const additionalPages = [
    {
      url: `${baseUrl}/mersin-nakliyat-fiyatlari`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mersin-nakliyat-firmalari`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tasinma-kontrol-listesi`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ];

  // 14. Şehirlerarası Rotalar (0.8, monthly)
  const routePages = Object.keys(routesMetadataDatabase).map((slug) => ({
    url: `${baseUrl}/rotalar/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    mainPage,
    teklifPage,
    ...hubPages,
    ...servicePages,
    ...merkezRegionPages,
    iletisimPage,
    ...ilceRegionPages,
    blogPage,
    ...blogPostPages,
    hakkimizdaPage,
    galeriPage,
    ...yasalPages,
    ...additionalPages,
    ...routePages,
  ];
}
