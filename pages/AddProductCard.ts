import { Page, expect } from '@playwright/test';

export class AddProductCard {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async AddtwoProductsInCards() {


  await this.page.getByRole('link', { name: ' Products' }).click();
 await this.page.locator('.productinfo a[data-product-id="1"]').click();
await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
await this.page.locator('.productinfo a[data-product-id="2"]').click();
await this.page.getByRole('link', { name: 'View Cart' }).click();
}



    async VerifyProductsinCard() {
        
         await expect(this.page.getByRole('cell', { name: 'Men Tshirt Men > Tshirts' })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: 'Rs.' }).nth(2)).toBeVisible();
        await expect(this.page.getByRole('cell', { name: 'Rs.' }).nth(3)).toBeVisible();
        await expect(this.page.getByRole('cell', { name: 'Blue Top Women > Tops' })).toBeVisible();
        await expect( this.page.getByRole('cell', { name: 'Rs.' }).first()).toBeVisible();
        await expect(this.page.getByRole('cell', { name: 'Rs.' }).nth(1)).toBeVisible();
    }
}





