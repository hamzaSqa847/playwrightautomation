import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('Logout user', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.goToLoginPage();
  await login.login('hamzaicp54@gmail.com', 'Applemango1!');
  await login.verifyLoginSuccess();
  await login.logout();
});


 