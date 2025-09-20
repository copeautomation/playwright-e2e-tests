import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async ({ page }) => {
    // 1. Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // 2. Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // 3. Assert header text
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
