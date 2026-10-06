
import {test, expect} from '@playwright/test';
 
 
test("Test 1", async({page})=> {
    console.log("Test case1");
});
test("Test 2", async({page})=> {
    console.log("Test case 2 ");
});
test("Test 3", async({page})=> {
    console.log("Test case3");
});
test("Test 4 ", async({page})=> {
    console.log("Test case 4");
});
test("Test 5", async({page})=> {
    console.log("Test case 5");
});
test("Test 6", async({page})=> {
    console.log("Test case 6");
});
 
test.afterEach(async() => {
    console.log("After Each");
    console.log("----------------------------------------")
});
 
test.afterAll(async() => {
    console.log("After All");
    console.log("##########################")
});
 
 
test.beforeAll(async() => {
    console.log("Before All");
});
 
test.beforeEach(async() => {
    console.log("Before Each");
});
//we have test.skip,test.describe,test.only