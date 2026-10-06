import {test , expect} from '@playwright/test';
test('Validation for url',async({page})=>
{
    await page.goto('https://practice.expandtesting.com/inputs');
  const a =  await expect(page).toHaveURL('https://practice.expandtesting.com/inputs');
  console.log(a);
    await page.waitForTimeout(2000);
});
test.only("Verify title",async({page})=>
{
   await page.goto('https://practice.expandtesting.com/inputs');
   await expect(page).toHaveTitle('Web inputs page for Automation Testing Practice');
   await page.waitForTimeout(2000);

});
test ("Verify field",async({page})=>
{
    
    await page.goto('https://practice.expandtesting.com/inputs');
    await expect(page.locator('#input-text')).toBeVisible();
    await page.waitForTimeout(2000);

});
test ("Verify the input field is enable",async({page})=>
{
await page.goto('https://practice.expandtesting.com/inputs');
await expect(page.getByLabel('Input: Number')).toBeEnabled();
await page.waitForTimeout(3000);
});
test("Verify the value", async({page})=> {
 
    await page.goto('https://practice.expandtesting.com/inputs');
   await page.getByLabel('Input: Number').fill('100');
   await expect(page.getByLabel('Input: Number')).toHaveValue('100');
 
});