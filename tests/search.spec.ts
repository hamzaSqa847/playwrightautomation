import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductSearch} from '../pages/productSearch';


test('Verify product Search Item ', async ({ page }) => {
  const home = new HomePage(page);
  const Product = new ProductSearch(page);

  await home.goto()
  await Product.gotoProductPage();
  await Product.VerifyProductpageVisible();
  await Product.SearchProduct();
  await Product.SearchItemisVisible() 
});