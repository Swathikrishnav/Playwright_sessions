import { test, expect } from '@playwright/test';

test("File upload", async ({ page }) => {
    // Navigate to the file upload page
    await page.goto("https://practice.expandtesting.com/upload");

    // Upload the file
    await page.locator("#fileInput").setInputFiles("TestData/Sample.txt");

    // Submit the form
    await page.locator("#fileSubmit").click();

    // Optional assertion to verify upload
    // await expect(page.locator("#uploaded-files")).toContainText("Sample.txt");

    // Capture screenshot of the page
    await page.screenshot({
        path: 'screenshot1.png',
        fullPage: true
    });

    // Wait for 3 seconds before ending the test
    await page.waitForTimeout(3000);
});
