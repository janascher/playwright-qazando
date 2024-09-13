import { expect, test } from '@playwright/test';

test.use({
    geolocation: { longitude: 142.702789, latitude: -20.917574 }, // Coordenadas de Queensland
    permissions: ['geolocation'], // Permissão para usar a geolocalização
});

test('Testar geolocalização no Google Maps para Queensland', async ({ page }) => {
    // Acessa o Google Maps
    await page.goto('https://www.google.com/maps');

    // Clica no botão "Minha localização"
    await page.getByLabel('Mostrar seu local').click();

    // Espera um tempo para que o mapa centralize em Queensland
    await page.waitForTimeout(3000);

    // Verifica se o mapa carregou e centralizou em Queensland
    const url = page.url();
    console.log('URL do Google Maps:', url);

    // Verifica se o URL contém as coordenadas de Queensland
    await expect(url).toContain('@-20.917574,142.702789');
});
