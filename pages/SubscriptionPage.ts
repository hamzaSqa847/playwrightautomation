import { Page, expect } from '@playwright/test';

export class SubscriptionPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async ScrollDownToFooter() {
  await this.page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
}

async VerifySubscriptionText(){

await expect(this.page.getByRole('heading', { name: 'Subscription' })).toBeVisible()

  
  


}

async FillEmail(){

await this.page.getByRole('textbox', { name: 'Your email address' }).click();
await this.page.getByRole('textbox', { name: 'Your email address' }).fill('hamzaicp54@gmail.com');
await this.page.getByRole('button', { name: '' }).click();

}

  
}