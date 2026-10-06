import {test , expect} from '@playwright/test'
test("mouse actions",async({page})=>{
    await page.goto('https://practice.expandtesting.com/inputs');
    page.locator('#input-number').click();
    await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("ArrowUp");
    await page.waitForTimeout(3000);
        await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Escape");
    await page.keyboard.press("Control+A");
    
 

});