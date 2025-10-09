## Create Customer Search Page Object
Sample code for home and customer list page

**Customer search page**

```ts
import BasePage from "./basepage.js";
import { expect, type Page } from "@playwright/test";
import { log } from "../helpers/logger.js";

class CustList extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get firstNameInputBox() {
        return this.page.getByRole("textbox", { name: "First name" });
    }
    get lastNameInputBox() {
        return this.page.getByRole("textbox", { name: "Last name" });
    }
    get searchBtn() {
        return this.page.getByRole("button", { name: " Search" });
    }
    get noResultsMesage() {
        return this.page.getByRole("cell", { name: "No data available in table" });
    }

    /* Page Actions */
    async searchNameAndConfirm(firstname: string, lastname: string): Promise<boolean> {
        await log("info", `Searching user: ${firstname} ${lastname}...`);
        let nameNotExist = false;
        try {
            await this.typeInto(this.firstNameInputBox, firstname);
            await this.typeInto(this.lastNameInputBox, lastname);
            await this.click(this.searchBtn);
            let isNotDisplayed = await this.noResultsMesage.isVisible();
            if (isNotDisplayed) nameNotExist = true;
            await log("error", `User: ${firstname} ${lastname} does not exist in the customer list, writing to error file...`);
        } catch (err) {
            (err as Error).message = `Failed searching given firstname: ${firstname} and lastname: ${lastname} on customers page, ${
                (err as Error).message
            }`;
            throw err;
        }
        return nameNotExist;
    }
}

export default CustList;

```
---