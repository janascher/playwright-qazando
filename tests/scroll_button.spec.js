import { test } from '@playwright/test';

test('Scroll', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');

    const button = await page.getByRole('button', { name: 'Send Mail' });
    await button.scrollIntoViewIfNeeded(); // Garante que um elemento esteja visível na área de visualização da página

    await page.getByRole('link', { name: ' Login' }).click();
});
