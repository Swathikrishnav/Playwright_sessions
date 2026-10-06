class InputPage {
 
    constructor(page){
 
        this.page = page;
        this.inputNumberbox = page.locator('#input-number');
        this.inputTextBox = page.locator('#input-text');
        this.inputPwdBox = page.locator('#input-password');
        this.displayBtn = page.getByRole('button', { name: 'Display Inputs' }); 
    }
 
    async enterNumber(number){
        await this.inputNumberbox.fill(number);
    }
    async enterText(text){
        await this.inputTextBox.fill(text);
    }
    async enterPassword(key){
        await this.inputPwdBox.fill(key);
    }
    async clickDisplayBtn(){
        await this.displayBtn.click();
    }
 
}
module.exports = InputPage;