import { test , expect } from "@playwright/test";
test('xpathlocators', async({page})=>{
await page.goto('https://animated-sundae-ffe529.netlify.app/');
//await page.getByLabel("Username").fill("Swathieeeee");   -------------using locator 
await page.locator('//input[@name="uname"]').fill("swethaaaaa");//----------using xpath
//await page.locator('.inputField1').fill("jesyyy");//using css selector class
//await page.locator("#userid").fill("athulll");//using css selector id 

await page.locator('//input[@class="inputField2"]').fill("testpwd");
let msg= await page.locator('//div[@class="card"]/label').textContent();
console.log(msg);
await page.locator('//div[@class="card"]/textarea').fill("hapieeeee");
await page.locator('//input[@type="checkbox" and @id="java"]').check();
await page.waitForTimeout(3000);

}
);