import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class CustList extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page);
    }
    /** Elements */
    get firstNameInputBox() {
        return this.page.getByRole("textbox", { name: "First name" });
    }
    get lastNameInputBox() {
        return this.page.getByRole("textbox", { name: "Last name" });
    }
    get searchBtn() {
        return this.page.getByRole("button", { name: "Search" });
    }
    get noDataAvailableCell() {
        return this.page.locator("[id=search-customers]");
    }

    /** Page Actions */
    async goToCustomerListPage(custListPage: string) {
        this.navigateTo(custListPage);
    }

    async searchAndConfirmUser(firstname: string, lastname: string) {
        await log("info", `Searching the user with firstname: ${firstname} and lastname: ${lastname}...`)
        // Search actions
        await this.typeInto(this.firstNameInputBox, firstname);
        await this.typeInto(this.lastNameInputBox, lastname);
        await this.click(this.searchBtn);

        // Check whether the customer present
        await this.page.waitForTimeout(1_500); // 1.5s delay
        let customerNotFound = await this.noDataAvailableCell.isVisible();
        return customerNotFound;
    }
}

/**
 *   https://admin-demo.nopcommerce.com/Admin/Customer/List
 *   await page.getByRole('textbox', { name: 'First name' }).fill('Alex');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Thomas');
  await page.getByRole('button', { name: 'Search' }).click();
  
  await page.locator("[id=search-customers]").click();
 */
