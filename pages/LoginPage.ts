import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.getByRole('button', { name: 'login' }).click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('a', { hasText: 'Logged in as Muhammad Hamza' })).toBeVisible();
  }

  async verifyInvalidLoginMessage() {
    await expect(this.page.locator('p', { hasText: 'Your email or password is incorrect!' })).toBeVisible();
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
}
