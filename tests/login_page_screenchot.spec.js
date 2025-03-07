// @ts-check
import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
});

test('Login com sucesso - Captura de tela @login', async ({ page }) => {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.getByRole('heading', { name: 'Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@teste.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page
        .locator('#password')
        .screenshot({ path: 'screenshots/login_com_sucesso/elemento_senha.png' }); // Captura um elemento específico
    await page.screenshot({ path: 'screenshots/login_com_sucesso/campos_preenchidos.png' }); // Captura a tela da página inicial
    await page.getByRole('button', { name: 'login' }).click();
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, teste@teste.com').click();
    await page.screenshot({ path: 'screenshots/login_com_sucesso/login_realizado.png' }); // Captura a tela da página inicial
});

test('Login com sucesso - Captura o campo senha @login', async ({ page }) => {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.getByRole('heading', { name: 'Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@teste.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page
        .locator('#password')
        .screenshot({ path: 'screenshots/login_com_sucesso/elemento_senha.png' }); // Captura um elemento específico
    await page.screenshot({ path: 'screenshots/login_com_sucesso/campos_preenchidos.png' }); // Captura a tela da página inicial
    await page.getByRole('button', { name: 'login' }).click();
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, teste@teste.com').click();
    await page.screenshot({ path: 'screenshots/login_com_sucesso/login_realizado.png' }); // Captura a tela da página inicial
});

test.afterEach(async ({ page }) => {
    // Seu código de finalização aqui
});
