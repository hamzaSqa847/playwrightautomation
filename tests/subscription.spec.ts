import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SubscriptionPage } from '../pages/SubscriptionPage';



test('Verify Subscription in home page', async ({ page }) => {
  const home = new HomePage(page);

  const subs = new SubscriptionPage(page);
  
  
  await home.goto();
  await subs.ScrollDownToFooter();
  await subs.VerifySubscriptionText()
  await subs.FillEmail()

});
