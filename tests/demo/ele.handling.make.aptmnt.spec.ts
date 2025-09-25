import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {
    test.beforeEach("Login with valid creds", async ({ page }) => {
        // 1. Launch URL and assert title and header
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await expect(page).toHaveTitle("CURA Healthcare Service");
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

        /**
         * ELEMENT: Button, Link
         *
         * @actions
         * 1. ✅ Click
         * 2. ✅ Press
         * 3. ✅ Double click
         * 4. ✅ Right click
         * 5. ✅ Hover if link
         * 6. ✅ [Optional] timeout if slow
         */

        // 2. Click on the Make Appointment
        // await page.getByRole("link", { name: "Make Appointment" }).click();
        // await page.getByRole("link", { name: "Make Appointment" }).press("Enter")
        // await page.getByRole("link", { name: "Make Appointment" }).dblclick();
        // await page.getByRole("link", { name: "Make Appointment" }).click({ button: "right" });
        // await page.getByRole("link", { name: "Make Appointment" }).hover()
        await page.getByRole("link", { name: "Make Appointment" }).click({ timeout: 10_000 });

        await expect(page.getByText("Please login to make")).toBeVisible();

        /**
         * ELEMENT:Text Box
         *
         * @actions
         * 1. ✅ Clear/click before filling
         * 2. ✅ Fill
         * 3. ✅ pressSequentially (Slow typing)
         */

        // Successful login
        // await page.getByLabel("Username").fill("John Doe");

        // Clears and enter

        // await page.getByLabel("Username").clear()
        // await page.getByLabel("Username").fill("John Doe");

        // pressSequentially
        await page.getByLabel("Username").pressSequentially("John Doe", { delay: 300 });

        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();

        // Assert a text
        await expect(page.locator("h2")).toContainText("Make Appointment");
    });

    test("Should make an appointment with non-default values", async ({ page }) => {
        /**
         * ELEMENT: Dropdown
         *
         * @actions
         * 1. ✅ Assert default option
         * 2. ✅ Select by:
         *  - label
         *  - Index
         * 3. ✅ Assert the count
         * 4. ✅ Get all dropdown values
         *
         * @notes
         * - Selenium - Select class and 3 selectBy* methods
         * - WebdriverIO - 3 selectBy* methods
         */

        // 📍Dropdown

        // Assert default option
        await expect(page.getByLabel("Facility")).toHaveValue("Tokyo CURA Healthcare Center");
        await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

        // Select by Label or index
        await page.getByLabel("Facility").selectOption({ label: "Seoul CURA Healthcare Center" });
        await page.getByLabel("Facility").selectOption({ index: 0 });

        // Assert the count
        let drpdwnOptionsEle = page.getByLabel("Facility").locator("option");
        await expect(drpdwnOptionsEle).toHaveCount(3);

        // Get all dropdown values
        let listOfDrpdwnElems = await page.getByLabel("Facility").all();

        // for ... of loop
        let listOfOptions = [];

        for (let ele of listOfDrpdwnElems) {
            let eleTxt = await ele.textContent();
            if (eleTxt) {
                listOfOptions.push(eleTxt);
            }
        }

        console.log(`>> List of Options: ${listOfOptions}`);

        /**
         * ELEMENT: Checkbox/Radio button
         *
         * @actions
         * 1. ✅Assert the default option - to be checked/unchecked
         * 2. ✅ Check/uncheck
         *
         * @notes
         * - Radio button - Allows to select only one option
         * - Checkbox - Allows for multi-entry
         */

        // Checkbox
        // await page.getByText("Apply for hospital readmission").click();
        await page.getByText("Apply for hospital readmission").check();
        await page.getByText("Apply for hospital readmission").uncheck();

        // Radio button
        // Assert the default option - to be checked/unchecked
        await expect(page.getByText("Medicare")).toBeChecked();

        await page.getByText("Medicaid").check();
        await expect(page.getByText("Medicare")).not.toBeChecked();

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
