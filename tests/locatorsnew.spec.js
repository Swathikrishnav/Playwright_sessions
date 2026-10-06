import {test , expect} from '@playwright/test'
test ('locatornew',async({page})=>
{
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    console.log("*****************");
        let header = await page.title();
    console.log(header);
 
    let urlstring = await page.url();
    console.log(urlstring);
 
    console.log('********************************************');
    await page.waitForTimeout(3000);
    let text = await page.locator('h1').textContent();
    console.log(text);
    
    await page.getByRole('textbox').fill('Automation');
        await page.getByPlaceholder('What needs to be done?').fill('Python');
        await page.getByRole('textbox').press('Enter');
        await page.getByRole('checkbox',{name : 'Toggle Todo'}).check();
         await page.waitForTimeout(3000);
         await page.goto('https://sauce-demo.myshopify.com/');
        await page.getByAltText('Grey jacket').click();
        await page.waitForTimeout(2000);
                                                                                               


                                                  





    
  

});