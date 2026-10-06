import {test , expect} from '@Playwright/test'
test("Handling Dynamic Tables", async({page})=> {
   
 
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    const headers = page.locator('//table//thead//tr//th');
    const rows = page.locator('//table//tbody//tr')
 
    console.log("*****************************************")
    console.log("Total number of columns (Headers): " + await headers.count());
    console.log("Total number of rows : " + await rows.count());
    console.log("*****************************************")
    console.log(await headers.allTextContents());
    console.log(await rows.allTextContents());
 
    console.log("*****************************************");
 
    for(let i=0; i<5; i++){
        console.log("Header" + (i+1) + " : " + await headers.nth(i).innerText());
    }
 
    console.log("*****************************************");
    for(let i=0; i<4; i++){
        console.log("Row" + (i+1) + " : " + await rows.nth(i).innerText());
    }
    console.log("*****************************************");
    console.log(await headers.nth(3).innerText());
 
 
    //await page.waitForTimeout(3000);
});
 
 
//Forward traversing
 
//table[@class='table table-striped']//thead//tr//th
//table//thead//tr//th