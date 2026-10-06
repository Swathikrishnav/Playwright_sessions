test("SauceDemo Login", async({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveScreenshot();
    await page.locator("#user-name").fill("Admin");
    await expect(page.locator("#user-name")).toHaveScreenshot();
    await page.locator("#password").fill("admin@123");
    await expect(page.locator("#password")).toHaveScreenshot();
    await page.locator("#login-button").click();
    await expect(page.locator("#login-button")).toHaveScreenshot();
});