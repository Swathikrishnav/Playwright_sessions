const {test} = require('@playwright/test');
const InputPage = require('../pages/InputPage');
 
 
test("Input page negative testing", async({page}) =>{
 
    await page.goto("https://practice.expandtesting.com/inputs");
    const obj = new InputPage(page);  // new class obj intializing  = constructor
    await obj.enterNumber("-9");
    await obj.enterText("#$#$##%%%^%^%^%");
    await obj.enterPassword("$%$%$dhf12344");
    await obj.clickDisplayBtn();
 
});
 
test("Input page positive testing", async({page}) =>{
 
    await page.goto("https://practice.expandtesting.com/inputs");
    const obj = new InputPage(page);  // new class obj intializing  = constructor
    await obj.enterNumber("10");
    await obj.enterText("Testing");
    await obj.enterPassword("Admin@123");
    await obj.clickDisplayBtn();
 
});
 
test("Input page Empty testing", async({page}) =>{
 
    await page.goto("https://practice.expandtesting.com/inputs");
    const obj = new InputPage(page);  // new class obj intializing  = constructor
    await obj.enterNumber("");
    await obj.enterText("");
    await obj.enterPassword("");
    await obj.clickDisplayBtn();
 
});
 

 