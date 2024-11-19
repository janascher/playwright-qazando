// @ts-check
// import { test } from '@playwright/test';
const { test , expect } = require('@playwright/test');
import { LoginPage } from '../support/pages/login_page';

// Executa este bloco antes de cada teste
test.beforeEach(async ({ page }) => {
    // Cria uma nova instância de LoginPage
    const loginPage = new LoginPage(page);

    // Acessa a página inicial
    await loginPage.goto();

    // Clica no link para abrir a página de Login
    await page.getByRole('link', { name: 'Login' }).click();

    // Garante que o cabeçalho "Login" está visível na página
    await page.getByRole('heading', { name: 'Login' }).click();
});

test('Login com sucesso', async ({ page }) => {
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@teste.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page
        .locator('#password')
        .screenshot({ path: 'screenshots//login_page/login_com_sucesso/elemento_senha.png' }); // Captura um elemento específico
    await page.screenshot({
        path: 'screenshots//login_page/login_com_sucesso/campos_preenchidos.png',
    }); // Captura a tela da página inicial
    await page.getByRole('button', { name: 'login' }).click();
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, teste@teste.com').click();
    await page.screenshot({ path: 'screenshots/login_page/login_com_sucesso/resultado.png' }); // Captura a tela da página inicial
});

// Teste para validar campo de e-mail vazio
test('Validar campo e-mail vazio @email', async ({ page }) => {
    // Cria uma nova instância de LoginPage
    const loginPage = new LoginPage(page);

    // Clica no botão de login sem preencher o campo de e-mail
    await loginPage.clickLoginButton();

    // Verifica se a mensagem de erro de e-mail inválido está visível
    await loginPage.checkEmailErrorMessage();

    // Tira uma captura de tela após a verificação
    await page.screenshot({ path: 'screenshots/login_page/email_vazio/resultado.png' });
});
