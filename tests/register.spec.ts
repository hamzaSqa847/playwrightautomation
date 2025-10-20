import { test, expect } from '@playwright/test';

test('Test Case Registration ', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect (page.getByRole('heading',{name:'Full-Fledged practice website for Automation Engineers'})).toBeVisible()
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', {name: 'New User Signup!'})).toBeVisible();
   await page.getByRole('textbox', { name: 'Name' }).fill('Muhammad Hamza');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('hamzaicp54@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect (page.getByRole('heading', {name: 'Enter Account Information'})).toBeVisible();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Applemango1!');
  await page.locator('#days').selectOption('15');
  await page.locator('#months').selectOption('11');
  await page.locator('#years').selectOption('2005');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Muhammad ');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Hamza');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Digitaltolk');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('street 4');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('islamabad');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByRole('textbox', { name: 'State *' }).fill('Islamabad');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Islamabad');
  await page.locator('#zipcode').fill('23543');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('868686868686');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect (page.getByText('Account Created!')).toBeVisible();
  
});




