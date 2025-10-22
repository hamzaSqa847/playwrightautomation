import { Page, expect } from '@playwright/test';

export class TestcasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickTestCases() {
        
        await this.page.getByRole('link', { name: ' Test Cases' }).click();
    }

    async verifyTestCasePageVisible() {

        await expect(this.page.locator('h2', { hasText: 'Test Cases' })).toBeVisible();

    }


}
