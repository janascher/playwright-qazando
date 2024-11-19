import { expect, test } from '@playwright/test';

test.use({
    geolocation: { latitude: -31.3101307, longitude: -54.1330047 }, // Coordenadas fornecidas 
    permissions: ['geolocation'], // Permissão para usar a geolocalização
});

test('Testar geolocalização no Google Maps para Bagé, RS', async ({ page }) => {
    // Tempo limite ajustado para este teste específico
    test.setTimeout(60000);

    // Acessa o Google Maps com a URL específica para as coordenadas
    await page.goto('https://www.google.com/maps/place/Bag%C3%A9,+RS/@-31.3101307,-54.1330047');

    // Configura a geolocalização para as coordenadas fornecidas
    await page.context().setGeolocation({ latitude: -31.3101307, longitude: -54.1330047 });

    // Concede a permissão de geolocalização
    await page.context().grantPermissions(['geolocation']);

    // Espera o mapa ser carregado com base em um seletor visível
    await page.waitForSelector('h1.DUwDvf.lfPIob', { timeout: 60000 });

    // Verifica se a URL do Google Maps contém as coordenadas
    const url = page.url();
    console.log('URL do Google Maps:', url); // Log para ajudar na depuração
    await expect(url).toContain('Bag%C3%A9,+RS');
});
