const scenario = async (page) => {
    await page.goto('http://host.docker.internal:81/api-a', { waitUntil: 'networkidle' });
    await page.addMilestone('Accès à l\'API A');
    await page.waitForTimeout(1000); // Attendre 1 seconde entre les accès
    await page.goto('http://host.docker.internal:81/api-b', { waitUntil: 'networkidle' });
    await page.addMilestone('Accès à l\'API B');
    await page.waitForNetworkIdle(); // S'assurer que toutes les requêtes sont terminées
};

module.exports = scenario;
