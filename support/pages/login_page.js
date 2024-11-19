const { expect } = require('@playwright/test');

// Exportando a classe LoginPage para ser usada em outros arquivos
exports.LoginPage = class LoginPage {
    /**
     * O construtor recebe uma instância de "page" que é passada nos testes
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page; // Armazena a instância da página Playwright
        this.loginButton = page.getByRole('button', { name: 'login' }); // Localizador da mensagem de erro
        this.emailErrorMessage = page.getByText('E-mail inválido.'); // Localiza a mensagem de erro exata para e-mail inválido
    }

    // Método para navegar para a URL do site
    async goto() {
        await this.page.goto('https://automationpratice.com.br/');
    }

    // Método para clicar no botão de login
    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Método para verificar a mensagem de erro de e-mail
    async checkEmailErrorMessage() {
        await expect(this.emailErrorMessage).toBeVisible(); // Verifica se a mensagem de erro está visível
    }
};
