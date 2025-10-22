import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestcasePage } from '../pages/TestcasePage';

test('Login with valid credentials', async ({ page }) => {
  const home = new HomePage(page);
  const Testcase = new TestcasePage(page);


//Steps ....  
await home.goto()
await home.verifyHomePageVisible()
await Testcase.clickTestCases();
await Testcase.verifyTestCasePageVisible();

});

