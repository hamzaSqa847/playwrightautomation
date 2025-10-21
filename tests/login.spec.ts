import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.goToLoginPage();
  await login.login('hamzaicp54@gmail.com', 'Applemango1!');
  await login.verifyLoginSuccess();
});

test('Login with incorrect email', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.goToLoginPage();
  await login.login('hamzaicp67@gmail.com', '123');
  await login.verifyInvalidLoginMessage();
});
