import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger.js";
import HomePage from "../page-objects/nopcommerce.home.page.js";
import CustList from "../page-objects/nopcommerce.custlist.page.js";

test.describe("E2E Customer Search", () => {
    test("E2E_TC001: Search the external customers in customer portal", async ({ page }, testInfo) => {
        // Env Config
        const envConfig = testInfo.project.use as any;

        // Login
        const homePage = new HomePage(page);
        await homePage.loginToNopeCommerceApp(
            envConfig.nopCommerceWeb,
            process.env.NOP_COMMERCE_TEST_USERNAME,
            process.env.NOP_COMMERCE_TEST_PASSWORD
        );

        // Customer search
        const USER_DATA = {
            firstname: "Alex",
            lastname: "Thomas",
        };
        const customerListPage = new CustList(page);
        await customerListPage.goToCustomerListPage(`${envConfig.nopCommerceWeb}/Admin/Customer/List`);
        let customerNotFound = await customerListPage.searchAndConfirmUser(USER_DATA.firstname, USER_DATA.lastname);

        if (customerNotFound) {
            await log("warn", `The giver user: ${USER_DATA.firstname} ${USER_DATA.lastname} could not found in the portal`);
        } else {
            await log("info", `The giver user: ${USER_DATA.firstname} ${USER_DATA.lastname} found in the portal`);
        }
    });
});
