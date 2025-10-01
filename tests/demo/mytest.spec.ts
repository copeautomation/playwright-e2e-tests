import { test, expect, devices } from "@playwright/test";


test("Should load homepage with correct title", async ({ page }) => {
    // 1. Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // 2. Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // 3. Assert header text
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("Should do something", { tag: "@smoke" }, async ({ page }, testInfo) => {
    // steps..
    await page.locator("//h1").click();
});

test("Should demo locators", async ({ page }) => {
    // ✅ `page.getBy*()` and `page.locator()` methods returns the `locator` object
    // ✅ The above methods not to be `awaited`
    // ✅ The type of locator is an `object`
    // ✅ Locators are LAZY until an action is fired on them

    // 1. Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // 2. Click on the Make Appointment
    let makeAppmtBtn = page.getByRole("link", { name: "Invalid Locator" })
    // console.log(`>> The type of locator: ${typeof makeAppmtBtn}, The value of the locator is: ${JSON.stringify(makeAppmtBtn)}`);
    await makeAppmtBtn.click(); 
    // await expect(page.getByText("Please login to make")).toBeVisible();

    // await page.getByRole('heading', { name: 'We Care About Your Health' }).click()
});


test("Should demo config file", async ({ page }, testInfo) => {
    console.log(`>> Config at run-time: ${JSON.stringify(testInfo.config)}`);
});

test("Should demo fixtures", async ({ request }, testInfo) => {
    // console.log(`>> The test runs on ${browserName}`);
});

test("Should demo devices", async ({ page }, testInfo) => {
    console.log(`>> The list of devies: ${Object.keys(devices)}`);
});

test("Should demo parallel run 1", {tag : '@demo'}, async ({ page }, testInfo) => {
    await page.goto("https://www.google.com");
});

test("Should demo parallel run 2", {tag : '@demo'}, async ({ page }, testInfo) => {
    await page.goto("https://www.google.com");
});