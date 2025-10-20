import { test, expect } from '@playwright/test';
test('loging with incorrect email  ', async ({ page }) => {

  //   Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

  // click on signup
  await page.getByRole('link', {name:'Signup / Login'}).click()
  await page.fill('input[type="email"]', 'hamzaicp67@gmail.com');
  await page.fill('input[type="password"]','123');
  await page.getByRole('button', {name:'login'}).click();

  
  // Verify that home page  is visible successfully
await expect(page.getByRole('link',{name:'Home'})).toBeVisible();
 // Verify invalid message  
await expect(page.locator('p',{hasText:"Your email or password is incorrect!"})).toBeVisible();
});