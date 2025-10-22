import { Page, expect } from '@playwright/test';

export class ProductSearch {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async  gotoProductPage() {
        await this.page.getByRole('link', { name: ' Products' }).click();

    }

    async VerifyProductpageVisible() {

        await expect(this.page.getByRole('heading', { name: 'All Products' })).toBeVisible()
    }

    async SearchProduct(){
  await this.page.getByRole('textbox', { name: 'Search Product' }).click();
  await  this.page.getByRole('textbox', { name: 'Search Product' }).fill('Blue Top');
  }

  async SearchItemisVisible(){


 await expect(this.page.locator('p', { hasText: 'Blue Top' }).nth(1)).toBeVisible();


  }
}
