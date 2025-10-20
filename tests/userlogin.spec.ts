import { test, expect } from '@playwright/test';

test('loging with correct email ', async ({ page }) => {

  //   Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

  // click on signup
  await page.getByRole('link', {name:'Signup / Login'}).click()
  await page.fill('input[type="email"]', 'hamzaicp54@gmail.com');
  await page.fill('input[type="password"]','Applemango1!');
  await page.getByRole('button', {name:'login'}).click();

  
  // Verify that home page  is visible successfully
  await expect(page.getByRole('link',{name:'Home'})).toBeVisible();
  //Verify that  heading is visible successfully
await expect(page.locator('a', { hasText: 'Logged in as Muhammad Hamza' })).toBeVisible();


});
