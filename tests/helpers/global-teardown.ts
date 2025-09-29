import { FullConfig } from "@playwright/test";
import { exec } from "child_process";

export default async function globalTeardown(config: FullConfig) {
    /* Executed after all workers complete. Good place for cleanup tasks */
     console.log(`[INFO]: Starting the global teardown process ...`);

    // Generate Allure report for local runs
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log(" >> Local run detected - starting Allure server...");
        exec("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }

    console.log(`[INFO]: Completed the global teardown process ...`);
}
