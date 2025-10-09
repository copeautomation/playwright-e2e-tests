## Set up a base page

1. Create `basepage.ts` under `./tests/page-objects'` folder
2. A sample content of the file: 

```ts
import { expect, type Locator, type Page } from "@playwright/test";
import { log } from "../helpers/logger.js";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* All reusable actions */
    async navigateTo(path: string) {
        await log("info", `Navigating to the path: ${path}`);
        await this.page.goto(path);
    }

    /** Click action */
    async click(ele: Locator) {
        try {
            await expect(ele).toBeVisible({ timeout: 10_000 }); // Custom timeout: Default - 5 seconds
            await ele.click();
        } catch (error) {
            await log("error", `Failed to click element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }

    /** Type action */
    async typeInto(ele: Locator, text: string) {
        try {
            await expect(ele).toBeVisible({ timeout: 10_000 });
            await ele.fill(text);
        } catch (error) {
            await log("error", `Failed to type into element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }
}

```
---