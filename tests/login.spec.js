// @ts-check
const { test, expect } = require('@playwright/test');

test('Login com sucesso', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Login' }).click();
    await page.getByRole('heading', { name: 'Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@teste.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, teste@teste.com').click();
});
