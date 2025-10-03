import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config.ts";
import { EnvConfig } from "../tests/helpers/config-fixtures.ts";
import path from "path";

console.log(`---LOADING DEV ENV SETTINGS---`);
export default defineConfig<EnvConfig>({
    ...baseConfig, // Loads all existing config values...
    testDir: path.resolve(process.cwd(), "./tests"),
    use: {
        ...baseConfig.use, // Loading the existing use object
        envName: "dev",
        appURL: "https://www.google.com",
        dbConfig: {
            server: "",
            dbname: "",
            connnectionStr: "",
        },
    },
});
