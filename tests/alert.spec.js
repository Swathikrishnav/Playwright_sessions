import {test,expect} from '@playwright/test'
 test('alert',async({page})=>
 {
    await page.goto('https://animated-sundae-ffe529.netlify.app/');
    //    await page.locator('#alertBtn').click();
    const a =await page.getByTestId('alert-button').click();
    page.on('dialog', async dialog => {
       // await dialog.dismiss(); //cancel, no, dismiss, close
     //  console.log("******************************")
       console.log(dialog.type());
        console.log(dialog.message());
        console.log("******************************")
        await page.waitForTimeout(3000);
       await dialog.accept(); //proceed, continue, yes, accept, ok, next
    });
 
    await page.waitForTimeout(3000);
//https://www.leafground.com/input.xhtml---------------------alert kure und noknm
});