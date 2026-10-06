import {test ,expect} from '@playwright/test'
test ('anotherdropdown',async({page})=>
{
     await page.goto('https://animated-sundae-ffe529.netlify.app/');
         const dropdown = page.locator('#country');
     const items = await dropdown.locator('option').allTextContents();
    console.log(items);
    console.log("***************************************");
    
const item=await page.locator('option').allInnerTexts();
console.log(item);
console.log("########################");
const item1=await page.locator('option').nth(0).innerText();
console.log(item1);
const item3 = await dropdown.locator('option').nth(2).innerText();
    console.log(item3);
    console.log("***************************************")
 const numbers = await dropdown.locator('option').count();
    console.log(numbers);
 
 
    await page.waitForTimeout(2000);

}
);