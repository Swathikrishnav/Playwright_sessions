import {test, expect} from '@playwright/test';
import {users} from '../TestData/SauceLoginData';
 
// test("SauceDemo Login", async({page})=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator("#user-name").fill("Admin");
//     await page.locator("#password").fill("admin@123");
//     await page.locator("#login-button").click();
// });
 
//Data driven testing
 
users.forEach((user) =>{
 
    test(`SauceDemo-${user.username}/ ${user.password}`,  async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator("#user-name").fill(user.username);
        await page.locator("#password").fill("user.password");
        await page.locator("#login-button").click();
 
        await page.waitForTimeout(3000);
 
});
});