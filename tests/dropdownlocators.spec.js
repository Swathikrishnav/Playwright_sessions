import {test ,expect} from '@playwright/test';
test('dropdown', async({page})=>
{
    await page.goto('https://animated-sundae-ffe529.netlify.app/');
   const a= await page.locator('#country').selectOption({label:'USA'});
   console.log(a);
   const b=await page.getByTestId('country-select').selectOption({value:'uk'});
    console.log(b);
    let c=await page.getByTestId('country-select').selectOption({index:3});
    console.log(c);


 
       await page.waitForTimeout(2000);
});