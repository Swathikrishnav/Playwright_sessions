import {test , expect} from '@playwright/test'
test('locatorsnew2', async({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    let title=await page.title();
    console.log(title);
    let url= await page.url();
    console.log(url);
    console.log("*********************");
   await page.getByText('Swag Labs').click();
 //  await page.getByPlaceholder('Username').fill("Swathi");
 //  await page.getByPlaceholder('Username').fill("Swethaaaaa");
     // await page.getByTestId('username').fill("nanduuuuuuuuu"); ------- error becasuse there is no datatestid attribute
    await page.locator('#user-name').fill("standard_user");
   // await page.locator('.input_error form_input').fill("sweeety");----- 2 classes on same element so notable to select
   await page.getByPlaceholder('Password').fill("secret_sauce");
         //  await page.getByRole('textbox').press('Enter');
await page.locator('#login-button').click();
await page.getByAltText('Sauce Labs Bolt T-Shirt').click();



    await page.waitForTimeout(3000);


}
);