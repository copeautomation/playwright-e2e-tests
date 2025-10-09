# Global Setup and Teardown setup

## Global Set up
Following examples demonstrates deleting allure results for every local run

```ts
import { FullConfig } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default async function globalSetup(config: FullConfig) {
    /* Executed before all the workers start. Good place to keep one-off tasks before all workers start */
    console.log("--- STARTING GLOBAL SETUP ---");
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        const resultsDir = path.resolve(process.cwd(), "allure-results");
        if (fs.existsSync(resultsDir)) {
            fs.rmSync(resultsDir, { recursive: true, force: true });
            console.log(">> Deleted allure-results folder for clean local run.");
        }
    }

    // Add any other global setup logic here:
    // - Database initialization
    // - Test data preparation
    // - Environment configuration
    // - External service setup
    // - Start test servers


    console.log("--- GLOBAL SETUP COMPLETE ---");
}

```

## Global teardown
Following examples demonstrates spining up allure reporter at the end of every local test run

```ts
import { FullConfig } from "@playwright/test";
import { exec } from "child_process";

export default async function globalTeardown(config: FullConfig) {
    /* Executed after all workers complete. Good place for cleanup tasks */
    console.log("--- STARTING TEARDOWN PROCESS ---");

    /**
     * This can be used to:
     * - Release the database connection
     * - Reset application state. e.g. Delete a created record/transaction so you can re-use
     * - Temp folder/files clean up
     * - Generate and open reports
     */

    // Generate Allure report for local runs
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log(" >> Local run detected - starting Allure server...");
        exec("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }

    console.log("--- TEARDOWN PROCESS COMPLETE ---");
}

```
