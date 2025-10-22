import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';


test('Verify product detail Page', async ({ page }) => {
  const home = new HomePage(page);
  const ProductDetails = new ProductPage(page);

  await home.goto()
  await ProductDetails.gotoProductPage();
  await ProductDetails.VerifyProductpageVisible();
  await ProductDetails.ProductDetailsVisible();
 
});