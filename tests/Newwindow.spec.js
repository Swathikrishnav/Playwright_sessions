import {test , expect} from '@playwright/test';
test("Multiple Windows Handling", async({page})=> {
    await page.goto('https://practice.expandtesting.com/windows');
 
    let header = await page.title();
    console.log("Parent Page Title : ", header);
 
    let urlstring = await page.url();
    console.log("Parent Page URL : ", urlstring);
 
    //a[text()='Click Here']
   
 
    const[child] = await Promise.all([
 
        page.waitForEvent("popup"),
        page.getByRole("link", {name:'Click Here'}).click()
    ]);
 
    await child.waitForLoadState();
 
    header = await child.title();
    console.log("Child Page Title : ", header);
 
    urlstring = await child.url();
    console.log("Child Page URL : ", urlstring);
 
});