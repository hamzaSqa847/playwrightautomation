import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AddProductCard } from '../pages/AddProductCard';


test(' Verify Add products  in card', async ({ page }) => {
  const home = new HomePage(page);
  const AddProducts = new AddProductCard(page);


  await home.goto();
  await AddProducts.AddtwoProductsInCards();
  await AddProducts.VerifyProductsinCard();
});

