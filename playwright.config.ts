import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log(`Hello from config 👋`);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const baseConfig =  defineConfig({
    testDir: "./tests",
    globalTimeout: 3 * 60 * 60 * 1000, // - 3 hours
    /* Run tests in files in parallel */
    fullyParallel: false, // Default setting 
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    expect: { timeout: 10_000 },
    globalSetup: require.resolve("./tests/helpers/global-setup.ts"),
    globalTeardown: require.resolve("./tests/helpers/global-teardown.ts"),
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        [
            "html",
            {
                open: "never",
            },
        ],
        [
            "allure-playwright",
            {
                detail: true,
                suiteTitle: true,
                environmentInfo: {
                    name: "TEST",
                    appName: "CURA",
                    Release: "Release 1.1",
                    node_version: process.version,
                },
            },
        ],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        ignoreHTTPSErrors: true,
        navigationTimeout: 30_000,
        screenshot: "on",
        // video: "retain-on-failure",
        // actionTimeout: 10_000
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
                // viewport: null,
                // launchOptions: {
                //     args: ["--start-maximized"],
                // },
            },
        },

        // {
        //     name: "firefox",
        //     use: { ...devices["Desktop Firefox"] },
        // },

        // {
        //     name: "webkit",
        //     use: { ...devices["Desktop Safari"], ignoreHTTPSErrors: true },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
        // {
        //     name: "Galaxy A55",
        //     use: {...devices["Galaxy A55"]}
        // }

    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
