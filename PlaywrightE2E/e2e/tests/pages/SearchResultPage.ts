import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifySearchResults() {
        await expect(this.page.locator('.search-results')).toBeVisible();
    }
}
