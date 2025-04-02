import { Page, expect } from '@playwright/test';

export class FindCarePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectDoctorsClinicians() {
        // Wait for the radio button to appear in the DOM
        await this.page.waitForSelector('role=radio[name="Doctors & clinicians"]');
        await this.page.getByRole('radio', { name: 'Doctors & clinicians' }).click();
    }

    async searchByLocation(location: string) {
        await this.page.fill('input[name="location"]', location);
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

    async verifyNavigation() {
        await expect(this.page).toHaveURL(/care-compare/);
    }
}
