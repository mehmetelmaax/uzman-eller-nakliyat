import { describe, it, expect } from 'vitest';
import { generateSlug } from '@/lib/slug';
import { QuoteFormSchema } from '@/lib/validation';

describe('Slug & Validation Tests', () => {
  describe('Turkish Character Slugifier', () => {
    it('should convert Turkish characters to safe lowercase English equivalents', () => {
      expect(generateSlug('Yenişehir Evden Eve')).toBe('yenisehir-evden-eve');
      expect(generateSlug('Çamlıyayla Tarsus')).toBe('camliyayla-tarsus');
      expect(generateSlug('Üçge-Ömerli-Sarıgöl')).toBe('ucge-omerli-sarigol');
    });

    it('should strip special characters and clean duplicate hyphens', () => {
      expect(generateSlug('Mersin!!! Evden... Eve???')).toBe('mersin-evden-eve');
      expect(generateSlug('--akdeniz--nakliyat--')).toBe('akdeniz-nakliyat');
    });
  });

  describe('Zod Validation Schema (QuoteFormSchema)', () => {
    it('should pass on valid quote requests', () => {
      const valid = {
        name: 'Ahmet Yilmaz',
        phone: '05335204442',
        fromDistrict: 'Yenişehir',
        toDistrict: 'Mezitli',
        rooms: '2+1',
        elevator: 'evet',
        website: ''
      };

      const parse = QuoteFormSchema.safeParse(valid);
      expect(parse.success).toBe(true);
    });

    it('should fail when name has non-letter characters', () => {
      const invalid = {
        name: 'Ahmet123',
        phone: '05335204442',
        fromDistrict: 'Yenişehir',
        toDistrict: 'Mezitli',
        rooms: '2+1',
        elevator: 'evet',
        website: ''
      };

      const parse = QuoteFormSchema.safeParse(invalid);
      expect(parse.success).toBe(false);
    });

    it('should fail when honeypot field is filled', () => {
      const invalid = {
        name: 'Ahmet Yilmaz',
        phone: '05335204442',
        fromDistrict: 'Yenişehir',
        toDistrict: 'Mezitli',
        rooms: '2+1',
        elevator: 'evet',
        website: 'http://spam.com'
      };

      const parse = QuoteFormSchema.safeParse(invalid);
      expect(parse.success).toBe(false);
    });
  });
});
