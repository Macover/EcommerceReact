// @ts-check
import { test, expect } from '@playwright/test';

const URL_PAGE = 'http://localhost:5173/';

test('has button', async ({ page }) => {
  await page.goto(URL_PAGE);

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Ecommerce/);

  // const checkbox = page.getByRole('checkbox');
  const button = await page.getByRole('button');

  // expect(checkbox).toBeChecked();
  expect(button).toBeVisible();

});
