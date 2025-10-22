import { Page, expect } from '@playwright/test';

export class ProductPage {
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

    async ProductDetailsVisible() {
        await this.page.locator('.nav.nav-pills.nav-justified > li > a').first().click();
        await expect(this.page.getByText('Brand:')).toBeVisible()
        await expect(this.page.getByText('Condition:')).toBeVisible()
        await expect(this.page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
    }
}