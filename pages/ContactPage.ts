import { Page } from '@playwright/test';
import path from 'path';

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillContactForm(name: string, email: string, subject: string, message: string) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
    await this.page.getByRole('textbox', { name: 'Subject' }).fill(subject);
    await this.page.getByRole('textbox', { name: 'Your Message Here' }).fill(message);
  }

  async attachFile(filename: string) {
    const filePath = path.join(__dirname, `../${filename}`);
    await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles(filePath);
  }

  async submit() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}
