const { test, expect } = require('@playwright/test');

test('access api A', async ({ page }) => {
    await page.goto('http://host.docker.internal:81/api-a');
});

test('access api B', async ({ page }) => {
    await page.goto('http://host.docker.internal:81/api-b');
});
