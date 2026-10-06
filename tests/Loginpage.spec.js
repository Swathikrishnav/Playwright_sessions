const{test}=require('@playwright/test');
const LoginPage=require('../Pages/LoginPage');
test("Login page",async({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    const obj=new LoginPage(page);
    await obj.enteruname("swathi");
    await obj.enterpwd("secret_sauce");
    await obj.clicklogin();
    await obj.validateerror();

});
test("Valid login",async({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    const obj1=new LoginPage(page);
  await obj1.validlogin("standard_user","secret_sauce");

}

);

test("invalidlogin",async({page})=>
{

    await page.goto('https://www.saucedemo.com/');
    const obj2 =new LoginPage(page);
  await obj2.invalidlogin("uname","pwd");

});
test("locked login",async({page})=>
{
        await page.goto('https://www.saucedemo.com/');
        const obj3=new LoginPage(page);
        await obj3.lockeduser("locked_out_user","secret_sauce");
        

}

);