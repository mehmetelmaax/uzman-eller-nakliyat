import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Mersin Uzman Eller Nakliyat Accessibility (A11y) Tests', () => {
  test('homepage should not have any WCAG AA violations', async ({ page }) => {
    await page.goto('/');
    
    // Inject and execute accessibility audit
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
      
    // Assert no violations are present
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
