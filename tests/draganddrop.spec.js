import {test , expect} from '@playwright/test'
test("dragndrop",async({page})=>
{

    await page.goto('https://practice.expandtesting.com/drag-and-drop');
 
     const source = page.locator('#column-a');
 
     const target = page.locator('#column-b');
     await source.dragTo(target);
      await expect(page.locator('#column-a header')).toHaveText("B");
     await expect(page.locator('#column-b header')).toHaveText("A");
 
     //  #column-a header
     //div[@id='column-a']//header
     console.log("Verified A and B");
 
 
    //await page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.').click({button: 'right'});
   
    await target.dblclick();
    await page.waitForTimeout(3000);
 
    await page.mouse.up();
    await page.mouse.up();
    await page.mouse.up();
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.down();
    await page.mouse.down();
    await page.mouse.down();

});