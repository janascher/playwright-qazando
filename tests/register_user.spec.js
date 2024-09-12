import { test, expect } from '@playwright/test';

test.use({
    viewport: { width: 1600, height: 1200 },
});

test('Registro de usuário com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').press('CapsLock');
  await page.locator('#user').fill('T');
  await page.locator('#user').press('CapsLock');
  await page.locator('#user').fill('Teste');
  await page.locator('#user').press('Tab');
  await page.locator('#email').fill('teste@teste.com');
  await page.locator('#email').press('Tab');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByRole('heading', { name: 'Cadastro realizado!' }).click();
  await page.getByText('Bem-vindo Teste').click();
});