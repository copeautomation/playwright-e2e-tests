import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger.js";
import HomePage from "../page-objects/nopcommerce.home.page.js";

test("Login to Nopcommerce Web App", async ({ page }, testInfo) => {
    // Env Config
    const envConfig = testInfo.project.use as any;

    // Create an page object
    const homePage = new HomePage(page);

    // Login
    await homePage.loginToNopeCommerceApp(
        envConfig.nopCommerceWeb, 
        process.env.NOP_COMMERCE_TEST_USERNAME, 
        process.env.NOP_COMMERCE_TEST_PASSWORD
    );
});
