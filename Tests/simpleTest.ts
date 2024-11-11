import { test } from '@playwright/test';
import LoginPage from '../designPatern/simplePom';

test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('myUser', 'myPassword');
});
