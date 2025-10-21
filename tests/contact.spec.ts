import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test('Submit contact form', async ({ page }) => {
  const home = new HomePage(page);
  const contact = new ContactPage(page);

  await home.goto();
  await home.goToContactPage();
  await contact.fillContactForm('Hamza', 'hamzaicp54@gmail.com', 'Test', 'I need test');
  await contact.attachFile('s-l500.jpg');
  await contact.submit();
});
