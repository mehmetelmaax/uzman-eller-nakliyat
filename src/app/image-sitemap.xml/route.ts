import { SITE, DISTRICTS } from '@/lib/site-config';
import { servicesDatabase } from '@/lib/services-data';
import { routesDatabase } from '@/lib/routes-data';

export async function GET() {
  const baseUrl = SITE.url;

  // Compile list of URLs
  const urls = [
    { loc: baseUrl, title: 'Mersin Uzman Eller Nakliyat Ev Taşıma' },
    { loc: `${baseUrl}/hakkimizda`, title: 'Uzman Eller Nakliyat Kurumsal' },
    ...Object.values(servicesDatabase).map(s => ({
      loc: `${baseUrl}/hizmetler/${s.slug}`,
      title: `${s.name} Hizmeti`
    })),
    ...DISTRICTS.filter(d => d.indexable).map(d => ({
      loc: `${baseUrl}/bolgeler/${d.slug}`,
      title: `${d.name} Evden Eve Nakliyat`
    })),
    ...Object.values(routesDatabase).map(r => ({
      loc: `${baseUrl}/rotalar/${r.slug}`,
      title: `Mersin ${r.city} Arası Ev Taşıma`
    }))
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  urls.forEach(item => {
    xml += `
  <url>
    <loc>${item.loc}</loc>
    <image:image>
      <image:loc>${baseUrl}/img/logo.png</image:loc>
      <image:title>${item.title}</image:title>
    </image:image>
  </url>`;
  });

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
