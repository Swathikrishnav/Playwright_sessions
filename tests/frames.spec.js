
test("Frames", async({page})=> {
 
     await page.goto('https://practice.expandtesting.com/iframe');
 
     const subscriptionSection = page.frameLocator('#email-subscribe');
 
    // (//iframe)[5]
    //iframe[id='email-subscribe']
    //iframe#email-subscribe
    //#email-subscribe
 
     await subscriptionSection.locator('#email').fill('xyz@gmail.com');
     await subscriptionSection.locator('#btn-subscribe').click();
     await page.waitForTimeout(2000);
 
 
});