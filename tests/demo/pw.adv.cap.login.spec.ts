import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
    test.beforeEach("Go to login page", async ({ page }) => {
        // 1. Launch URL and assert title and header
        await page.goto("https://katalon-demo-cura.herokuapp.com/", { timeout: 60_000 });// ✅ will run over the config option
        await expect(page).toHaveTitle("CURA Healthcare Service");
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

        // 2. Click on the Make Appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await expect(page.getByText("Please login to make")).toBeVisible();
    });

    test.only("Should login successfully", async ({ page }) => {
        /**
         * Capability: Auto-waiting
         * @scenarios
         * 1. Just locator element - Lazy
         *      -> No action, proves that element is LAZY
         * 2. Invalid locator on action method
         *      -> Error: locator.fill: Test timeout of 30000ms exceeded.
         * 3. Valid locator but invalid action
         *      -> Error: locator.check: Error: Not a checkbox or radio button
         * 4. Invalid locator on expect method
         *      -> Error: expect(locator).toContainText(expected) failed, Timeout: 5000ms
         */

        // Auto-waiting
        // let userNameEle = page.getByLabel("Username")
        // await userNameEle.check()

        // Timeout
        // test.slow()
        // test.setTimeout(120_000)

        // Successful login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click({timeout: 10_000});

        // Assert a text
        await expect(page.locator("h2")).toContainText("Make Appointment", { timeout: 10_000 });
    });

    test("Should prevent login with incorrect creds", async ({ page }) => {
        // Unsuccessful login
        await page.getByLabel("Username").fill("John Smith");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();

        // Assert a error message
        await expect(page.locator("#login")).toContainText("Login failed! Please ensure the username and password are valid.");
    });
});
