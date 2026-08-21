import { describe, it, expect } from 'vitest';
import { organizationSchema, websiteSchema, faqSchema } from '@/lib/schema';

describe('JSON-LD Schema Tests', () => {
  it('should match snapshot for organizationSchema', () => {
    const org = organizationSchema();
    expect(org['@type']).toBe('MovingCompany');
    expect(org.name).toBe('Mersin Uzman Eller Nakliyat');
    expect(org.address['@type']).toBe('PostalAddress');
    expect(org.geo['@type']).toBe('GeoCoordinates');
  });

  it('should match snapshot for websiteSchema', () => {
    const ws = websiteSchema();
    expect(ws['@type']).toBe('WebSite');
    expect(ws.url).toBe('https://mersinuzmaneller.com');
  });

  it('should match snapshot for faqSchema', () => {
    const faqs = [
      { question: 'Test Soru?', answer: 'Test Cevap.' }
    ];
    const faq = faqSchema(faqs);
    expect(faq['@type']).toBe('FAQPage');
    expect(faq.mainEntity).toHaveLength(1);
    expect(faq.mainEntity[0]?.name).toBe('Test Soru?');
    expect(faq.mainEntity[0]?.acceptedAnswer?.text).toBe('Test Cevap.');
  });
});
