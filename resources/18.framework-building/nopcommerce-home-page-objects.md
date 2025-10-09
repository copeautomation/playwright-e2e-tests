## Create Home Page Object
Sample code for home and customer list page

**home page**
```ts
import BasePage from "./basepage.js";
import { expect, type Page } from "@playwright/test";
import { log } from "../helpers/logger.js";

class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /* Elements */
    get usernameInputBox() {
        return this.page.getByRole("textbox", { name: "Email:" });
    }
    get passwordInputBox() {
        return this.page.getByRole("textbox", { name: "Password:" });
    }
    get loginBtn() {
        return this.page.getByRole("button", { name: "Log in" });
    }

    /* Page Actions */
    async loginTonopCommerceWeb(url: string, username: string, password: string) {
        try {
            await log("info", `Login to :${url} with ${username}`);
            await this.navigateTo(url);
            await this.typeInto(this.usernameInputBox, username);
            await this.typeInto(this.passwordInputBox, password);
            await this.click(this.loginBtn);
            await expect(this.page).toHaveTitle("Dashboard / nopCommerce administration");
            await log("info", "Home page is launched successfully...");
        } catch (err) {
            (err as Error).message = `Failed login to nopcommerce web: ${url}, with username: ${username}`;
            throw err;
        }
    }
}

export default HomePage;

// Use this in your tests like:
// const homePage = new HomePage(page);

/**
 * Notes:
 * 1. This is where we spent MOST of the hours getting the locators and adding methods on a page for covearg
 * 2. Use 'codegen' generated selectors to construct page objects
 */

```
---