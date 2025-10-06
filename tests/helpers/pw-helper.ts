import { test, type Page, type Locator } from "@playwright/test";

/**
 * Take a screenshot of full page
 * @param page
 * @param screenshotName - Name for the screenshot attachment
 */
/**Ful page Screenshot */
async function takeFullPageScreenshot(page: Page, screenshotName: string) {
    const screenshot = await page.screenshot({ fullPage: true });
    // Attach it to the report
    await test.info().attach(screenshotName, {
        body: screenshot,
        contentType: "image/png",
    });
}

/**Element Screenshot */
async function takeElementScreenshot(element: Locator, screenshotName: string) {
    // Take screenshot of the element
    const screenshot = await element.screenshot();

    // Attach it to the report
    await test.info().attach(screenshotName, {
        body: screenshot,
        contentType: "image/png",
    });
}

// More helper functions go here...

export default { takeFullPageScreenshot, takeElementScreenshot };
