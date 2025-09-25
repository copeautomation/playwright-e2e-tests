import { test, expect } from "@playwright/test";

/**
 * Scenario:
 * 1. ✅ Login as standard user
 * 2. ✅ Get a list of products with its price
 * 3. ✅ Assert that all products have non-zero dollar value
 *
 * @locators
 * 1. .inventory_item -> all products
 * 2. .inventory_item_name -> products
 * 3. .inventory_item_price -> prices
 */

test.describe("Inventory feature", () => {
    test.beforeEach("Login with valid creds", async ({ page }) => {
        // Launch the URL
        await page.goto("https://www.saucedemo.com/");

        // Login
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();

        // Assertion
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await expect(page).toHaveURL(/.*\/inventory/);
    });

    test("Should confirm all prices are non-zero values", async ({ page }) => {
        // Get a list of products
        let productsElms = page.locator(".inventory_item");
        await expect(productsElms).toHaveCount(6);

        // Get product name and prices
        let totalProducts = await productsElms.count();

        let priceArr = [];
        for (let i = 0; i < totalProducts; i++) {
            let eleNode = productsElms.nth(i);

            // Product name
            let productName = await eleNode.locator(".inventory_item_name").innerText();

            // Price
            let price = await eleNode.locator(".inventory_item_price").innerText();

            // Print the results
            console.log(`Product: ${productName}, price: ${price}`);

            priceArr.push(price);
        }

        console.log(`Original Price Array: ${priceArr}`);

        /**
         * [$29.99,$9.99,$15.99,$49.99,$7.99,$15.99]
         * 1. Replace all $ with ""
         * 2. Compare the price which should be > 0
         *
         * [29.99,9.99,15.99,49.99,7.99,15.99]
         */
        let priceArrNum = priceArr.map((item) => parseFloat(item.replace("$", "")));
        console.log(`>> Modified arr: ${priceArrNum}`);

        let priceArrWithInvalidVals = priceArrNum.filter((item) => item <= 0);

        if (priceArrWithInvalidVals.length > 0) {
            console.log(`ERROR: Zero price values found, ${priceArrWithInvalidVals}`);
        } else {
            console.log(`INFO: All prices are non-zero vlaues`);
        }

        expect(priceArrWithInvalidVals).toHaveLength(0);
    });
});
