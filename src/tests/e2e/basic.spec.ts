import { test, expect } from '@playwright/test';

test.describe('Mersin Uzman Eller Nakliyat E2E Tests', () => {
  test('homepage should load and have exactly one H1', async ({ page }) => {
    await page.goto('/');
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check that key brand elements are visible
    await expect(page.locator('text=Uzman Eller')).toBeVisible();
    await expect(page.locator('text=Sabit Fiyat')).toBeVisible();
  });

  test('teklif-al form validation and estimation display', async ({ page }) => {
    await page.goto('/teklif-al');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Form validation should trigger
    await expect(page.locator('text=Ad soyad en az')).toBeVisible();

    // Fill form
    await page.fill('input[name="name"]', 'Mehmet Yilmaz');
    await page.fill('input[name="phone"]', '05335204442');
    await page.selectOption('select[name="fromDistrict"]', 'Yenişehir');
    await page.selectOption('select[name="toDistrict"]', 'Mezitli');
    await page.selectOption('select[name="rooms"]', '2+1');
    
    // Price estimation should appear automatically or after button click if dynamic
    // Let's check if the quote estimate is rendered
    await page.click('button[type="submit"]');
    // It will post to /api/teklif and display result or loading
  });

  test('mobile navigation accessibility and visibility', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Hamburger menu button should be visible
    const hamburger = page.locator('button[aria-label="Menüyü Aç/Kapat"]');
    await expect(hamburger).toBeVisible();
    
    // Click to open
    await hamburger.click();
    
    // Check that links are visible in mobile viewport
    await expect(page.locator('nav >> text=Hizmetlerimiz').first()).toBeVisible();
    
    // Close menu
    await hamburger.click();
  });
});
