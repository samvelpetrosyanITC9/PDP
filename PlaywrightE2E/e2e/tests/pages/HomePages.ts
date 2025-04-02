import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.medicare.gov/');
    }

    async goToFindCareProviders() {
        await this.page.getByRole('link', { name: 'Find Care Providers' }).click();
    }
}
