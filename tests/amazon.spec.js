import {test , expect } from '@playwright/test';
test('amazon',async({page})=>{
    await page.goto("https://www.amazon.in");
    await page.locator('//a[@data-csa-c-content-id="nav_cs_sell_T3"]').click();
    await page.locator('//a[@data-ld-append="AZIN_Cross_ATF"]').click();
    await page.goto("https://www.google.com");
    let text =await page.getByText("Google offered in:  ");
    console.log(text);
    await page.getByRole('link', {name: 'About'}).click();
    await page.waitForTimeout(3000);


}
);