import {test , expect} from '@playwright/test';
test('My Test1',async({page}) => {

await page.goto("https://www.google.com");// page action
await page.waitForTimeout(6000);
await page.goto('https://facebook.com');
await page.waitForTimeout(6000);
let title=await page.title()
console.log(title);
let urlstring = await page.url();
    console.log(urlstring)


await page.goBack();//page action
await page.reload();//page action

//await page.waitForTimeout(6000);
//await page.goForward();//page action
await page.goForward({ waitUntil: 'domcontentloaded', timeout: 60000 });


//await page.waitForTimeout(6000);
//await page.waitForTimeout(6000);




    });