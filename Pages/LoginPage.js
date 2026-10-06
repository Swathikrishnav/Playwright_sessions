const { expect } = require("@playwright/test");

class LoginPage
{
    constructor(page)
    {
        this.page=page;
       // this.uname=page.locator('#username');
        this.uname = page.locator('#user-name');
        this.pwd=page.locator('#password');
        this.button=page.locator('#login-button');
      //this.errormsg=page.locator('//h3[text()="Epic sadface: Username and password do not match any user in this service"]');
        this.errorMsg = page.locator('[data-test="error"]');
       //his.lockedmg=page.locator("/div[@class='error-message-container error']/h3");
        this.lockedMsg = page.locator('//div[@class="error-message-container error"]/h3');

            
    }
    async enteruname(uname)
    {
        await this.uname.fill(uname);

    }
    async enterpwd(pwd)
    {
        await this.pwd.fill(pwd);
    }
    async clicklogin()
    {
        await this.button.click();
    }
    async validateerror()
    {
     await expect(this.errorMsg).toHaveText( "Epic sadface: Username and password do not match any user in this service" );

    }
    async validlogin(uname, pwd) {
        await this.uname.fill(uname);
        await this.pwd.fill(pwd);
        await Promise.all([
            this.page.waitForURL('**/inventory.html'), // wait for redirect
            this.button.click()
        ]);
        //without promis all we can do this 
    }
    async invalidlogin(uname,pwd)
    {
        await this.uname.fill(uname);
        await this.pwd.fill(pwd);
        this.button.click();
        await expect(this.errorMsg).toHaveText( "Epic sadface: Username and password do not match any user in this service" );



    }
    async lockeduser(uname,pwd)
    {
        await this.uname.fill(uname);
        await this.pwd.fill(pwd);
        this.button.click();
      //await expect(this.lockedmg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        await expect(this.lockedMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    }
}
module.exports = LoginPage;