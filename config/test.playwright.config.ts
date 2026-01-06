import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config.ts";
import { EnvConfig } from "../tests/helpers/config-fixtures.ts";
import path from "path";

console.log(`---LOADING TEST ENV SETTINGS---`);

export default defineConfig<EnvConfig>({
  ...baseConfig, // Loads all existing config values...
  testDir: path.resolve(process.cwd(), "./tests"),
  use: {
    ...baseConfig.use, // Loading the existing use object
    envName: "test",
    appURL: "https://katalon-demo-cura.herokuapp.com/",
    nopCommerceWeb: "https://admin-demo.nopcommerce.com",
    apiURL: "https://reqres.in/api",
    dbConfig: {
      server: "",
      dbname: "",
      connnectionStr: "",
    },
  },
});
