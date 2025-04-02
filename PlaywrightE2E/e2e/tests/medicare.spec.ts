import { test } from '@playwright/test';
import { HomePage } from './pages/HomePages';
import { FindCarePage } from './pages/FindCarePage';
import { SearchResultsPage } from './pages/SearchResultPage';

test('Search for Doctors on Medicare.gov using POM', async ({ page }) => {
    const homePage = new HomePage(page);
    const findCarePage = new FindCarePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.navigate();
    await homePage.goToFindCareProviders();
    await findCarePage.verifyNavigation();
    await findCarePage.selectDoctorsClinicians();
    await findCarePage.searchByLocation('New York, NY');
    await searchResultsPage.verifySearchResults();
});
