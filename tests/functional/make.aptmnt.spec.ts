import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {
    test.beforeEach("Login with valid creds", async ({ page }, testInfo) => {
        // 1. Launch URL and assert title and header

        // Get the URL from config file
        const envConfig = testInfo.project.use as any;

        await page.goto(envConfig.appURL);
        await expect(page).toHaveTitle("CURA Healthcare Service");
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

        // 2. Click on the Make Appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await expect(page.getByText("Please login to make")).toBeVisible();

        // Successful login
        await page.getByLabel("Username").fill(process.env.TEST_USER_NAME);
        await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
        await page.getByRole("button", { name: "Login" }).click();

        // Assert a text
        await expect(page.locator("h2")).toContainText("Make Appointment");
    });


    test("Should make an appointment with non-default values", async ({ page }, testInfo) => {
        
        // console.log(`>> Current config \n: ${JSON.stringify(testInfo.config)}`);
        
        // Dropdown
        await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

        // Checkbox
        await page.getByText("Apply for hospital readmission").click();

        // Radio button
        await page.getByText("Medicaid").click();

        // Date input box
        await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
        await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill("05/10/2027");
        await page.getByRole("textbox", { name: "Visit Date (Required)" }).press("Enter");

        // Multi-line comments input box
        await page.getByRole("textbox", { name: "Comment" }).click();
        await page.getByRole("textbox", { name: "Comment" }).fill("This is a multi-line comments\ncaptured by Playwright codegen!");

        // Button
        await page.getByRole("button", { name: "Book Appointment" }).click();

        // Assertion
        await expect(page.locator("h2")).toContainText("Appointment Confirmation");
        await expect(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
    });

    // More tests go here ...
});
