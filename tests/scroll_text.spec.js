import { test } from '@playwright/test';

test('Scroll', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');

    const text = await page.waitForSelector('text=NEWSLETTER');
    await text.scrollIntoViewIfNeeded(); // Garante que um elemento esteja visível na área de visualização da página

    await page.getByRole('link', { name: ' Login' }).click();
});
