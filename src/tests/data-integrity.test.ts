import { describe, it, expect } from 'vitest';
import { DISTRICTS, SERVICES } from '@/lib/site-config';
import { blogDatabase } from '@/lib/blog-data';
import { servicesDatabase } from '@/lib/services-data';
import { routesDatabase } from '@/lib/routes-data';

describe('Data Integrity and SEO Rule Tests', () => {
  it('should ensure all districts in DISTRICTS are indexable and have indexable: true', () => {
    DISTRICTS.forEach(d => {
      expect(d.indexable).toBe(true);
    });
  });

  it('should ensure every neighbor district in neighbors lists exists in DISTRICTS', () => {
    const districtSlugs = new Set(DISTRICTS.map(d => d.slug.replace('-evden-eve-nakliyat', '')));
    DISTRICTS.forEach(d => {
      d.neighbors.forEach(n => {
        expect(districtSlugs.has(n)).toBe(true);
      });
    });
  });

  it('should ensure every blog post date is valid and author matches expected team', () => {
    Object.values(blogDatabase).forEach(post => {
      expect(post.author).toBe('Uzman Eller Nakliyat Editör Ekibi');
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('should ensure blogDatabase keys match post ids', () => {
    Object.keys(blogDatabase).forEach(key => {
      expect(blogDatabase[key]?.id).toBe(key);
    });
  });

  it('should ensure no text contains the Adana domain or Adana company name references', () => {
    const textToCheck = [
      JSON.stringify(DISTRICTS),
      JSON.stringify(SERVICES),
      JSON.stringify(blogDatabase),
      JSON.stringify(servicesDatabase),
      JSON.stringify(routesDatabase)
    ];

    textToCheck.forEach(text => {
      expect(text.toLowerCase()).not.toContain('adanaevdeneveasansorlunakliyat.com.tr');
      expect(text.toLowerCase()).not.toContain('tedik');
    });
  });

  it('should verify title and description limits for SEO best practices', () => {
    // Check servicesDatabase titles & descriptions
    Object.values(servicesDatabase).forEach(s => {
      if (s.title) {
        expect(s.title.length).toBeLessThanOrEqual(70);
      }
      if (s.description) {
        expect(s.description.length).toBeLessThanOrEqual(160);
      }
    });

    // Check routesDatabase titles & descriptions
    Object.values(routesDatabase).forEach(r => {
      const title = `Mersin ${r.city} Evden Eve Nakliyat | Uzman Eller Nakliyat`;
      const description = `Mersin'den ${r.city}'e sigortalı, marangozlu ve K3 belgeli şehirlerarası evden eve nakliyat. Sabit fiyat garantisiyle güvenle taşının.`;
      expect(title.length).toBeLessThanOrEqual(70);
      expect(description.length).toBeLessThanOrEqual(160);
    });
  });
});
