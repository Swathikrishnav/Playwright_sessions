import {test , expect} from '@playwright/test'
test("Assignment to check url and title",async({page})=>
{
    await page.goto("https://demoqa.com/");
    //Task1:browser commands
    const a =await page.title();
    console.log(a);
    const url= await page.url();
    console.log(url);
    await expect(page).toHaveTitle('demosite');
    /*const title = await page.title();
const isDemoSite = title.includes("DEMOQA");
console.log("Is demo site?", isDemoSite);*/
await expect(page).toHaveURL('https://demoqa.com/');
  await page.waitForTimeout(2000);
});
test("Assignment to check textbox",async({page})=>{
    
//Task2:Textbox
//await page.goto("https://demoqa.com/text-box"); one way directly hitting url 
    await page.goto("https://demoqa.com/");

  await page.locator("//div[@id='root']").click();//using xpath
  await page.getByText('Elements').click(); //uusing locator
  await page.locator("//span[@class='text' and text()='Text Box']").click();
 // await page.locator("//input[@class=' mr-sm-2 form-control']").fill('Swathikrishna'); //using xpath
  await page.locator('#userName').click(); //using css
  await page.locator('#userName').fill('Swathikrishna');
  await page.getByPlaceholder('name@example.com').fill('swathi@gmail.com');
 await page.locator('#currentAddress').fill('Veluthera house');
 await page.locator('#permanentAddress').fill('Veluthera house'); //using id
 //await page.locator('.btn btn-primary').click();// using class=========this is actuall class here we have spave so we use btn.
  // await page.locator('.btn.btn-primary').click(); or 
  await page.getByRole('button',{name:'submit'}).click();
  await page.waitForTimeout(2000);

});
test.only("assignment to test checkbox",async({page})=>{
  //task 3:check box 
  await page.goto("https://demoqa.com/");
  await page.locator("//div[@id='root']").click();//using xpath
  await page.getByText('Elements').click(); //using locator
  await page.locator("//span[text()='Check Box']").click();
  await page.locator("//span[@class='rc-tree-switcher rc-tree-switcher_close']").click();
  await page.getByRole('checkbox', { name: 'Home' }).click();
   // await expect(page.getByRole('checkbox', { name: 'Home' })).toBeChecked();
   // await expect(page.locator(".text-success")).toHaveText("You have selected : Home"); ---------- error 
  await expect(page.locator("//div[@class='display-result mt-4']")).toHaveText("You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral");
  await expect(page.locator("//div[@class='display-result mt-4']")).toContainText("homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral");

    await page.waitForTimeout(3000);


});
test("Verify radio button",async({page})=>{
  await page.goto("https://demoqa.com/");
  await page.locator("//div[@id='root']").click();//using xpath
  await page.getByText('Elements').click();


});


