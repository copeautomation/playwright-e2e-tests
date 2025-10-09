## Different Environment Data Handling

1. Create a config fixture which can be used across different environment

```ts
// tests/helpers/config-fixtures.ts
import { test as base } from "@playwright/test";

export type EnvConfig = {
    envName: string;
    appURL: string;
    dbConfig: {};
};

export const test = base.extend<EnvConfig>({
    // Define options and provide default values.
    // We can later override them in the config.
    envName: ["provide-a-val", { option: true }],
    appURL: ["provide-a-val", { option: true }],
    dbConfig: [{}, { option: true }],
});

```

2. Create a new config file

```ts
// config/test.playwright.config.ts

import { baseConfig } from "../playwright.config.ts";
import { defineConfig, devices } from "@playwright/test";
import type { EnvConfig } from "../tests/helpers/config-fixtures.ts";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<EnvConfig>({
    ...baseConfig,
    testDir: "../tests", // Fix path from config folder
    use: {
        ...baseConfig.use, // Required
        envName: "test",
        appURL: "https://katalon-demo-cura.herokuapp.com/",
        dbConfig: {
            dbname: "",
            host: "test",
            port: "1234",
        },
    },
});
```

3. Use the variable in a test 

```ts
// tests/functional/make-apptmnt.spec.ts
    test.beforeEach("Launch Homepage", async ({ page }, testInfo) => {
        // Access the custom env specific value as below
        const envConfig = testInfo.project.use as any; // Note: project and use are just objects ✅ // @ts-ignore
        console.log(`>>> Final Config: ${JSON.stringify(testInfo.config)}`);
        console.log(`>>> Custom Env Config: ${JSON.stringify(envConfig.envName)}`);

        // Launch Home page
        await page.goto(envConfig.appURL);
        // Rest of the steps
    });

```

4. Done! 🎉