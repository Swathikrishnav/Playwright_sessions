import {test , expect} from '@playwright/test';


test('Verify to numbers are equal',async({page })=>{
    let a=10;
    let b=10;
    expect(a).toBe(b);

});


test('Verify a string contains krish',async({page})=>
{
    let name = "swathikrishna"
    expect(name).toContain("krish");

});

test("Verify boolean true", async({page})=> {
    let status= true;
    expect(status).toBeTruthy();
 
});
 
test("Verify boolean false", async({page})=> {
    let status= false;
    expect(status).toBeFalsy();
 
});

test("check a number is lessthan or equal",async({page})=>
{
    let a =200;
    let b = 300;
    expect(a).toBeLessThanOrEqual(b);

});
 

