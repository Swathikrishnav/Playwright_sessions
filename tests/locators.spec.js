import {test , expect} from '@Playwright/test'
test('My Test1',async({page}) => {
    await page.goto("https://animated-sundae-ffe529.netlify.app/");
    await page.waitForTimeout(3000);

   // await page.getByLabel("Username").fill("Swathi"); success
   //await page.getByTestId('username-input').fill("Swathi"); success
   //name mum area labellum edkanenkl xpath venam
  // await page.locator('#userid').fill("Swathi");-------by normal id 
   // await page.getByLabel("Password").fill("Swathi");
   //await page.locator('.inputField1').fill("Swathi"); class
        await page.waitForTimeout(6000);
//get by role amd radio nala nokanam



});