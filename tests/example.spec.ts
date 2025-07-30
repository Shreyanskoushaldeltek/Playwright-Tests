import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test.describe('Example Tests', () => {
  test('should load homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.navigateTo('https://www.saucedemo.com');
    await expect(page).toHaveTitle("Swag Labs");
  });

  test('should navigate and check URL', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    
    await expect(page).toHaveURL('https://www.saucedemo.com');
  });
});