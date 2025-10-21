import { Page, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async signup(name: string, email: string) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async fillAccountInfo(password: string) {
    await this.page.getByRole('radio', { name: 'Mr.' }).check();
    await this.page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await this.page.locator('#days').selectOption('15');
    await this.page.locator('#months').selectOption('11');
    await this.page.locator('#years').selectOption('2005');
    await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await this.page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  }

  async fillAddressInfo() {
    await this.page.getByRole('textbox', { name: 'First name *' }).fill('Muhammad');
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill('Hamza');
    await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill('Digitaltolk');
    await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('street 4');
    await this.page.getByRole('textbox', { name: 'Address 2' }).fill('islamabad');
    await this.page.getByLabel('Country *').selectOption('Australia');
    await this.page.getByRole('textbox', { name: 'State *' }).fill('Islamabad');
    await this.page.locator('#zipcode').fill('23543');
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill('868686868686');
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
    await expect(this.page.getByText('Account Created!')).toBeVisible();
  }
}
