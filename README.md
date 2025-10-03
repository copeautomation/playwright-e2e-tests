# Instructions and Notes

## In this session...

**Handling Environment Specific Data**

__Steps_To_Follow__:

**Create a config fixture**:
1. ✅ Create a new fixture `config-fixtures.ts` under `/helpers`
2. ✅Follow the docs and
   1. Define `EnvConfig` type and target fields
   2. [📌Rule]: `Define an option and provide a default value.`

🎯 The existing `test` function will extend the custom variables


**Create a new config**:
1. ✅ Create a new config file `test.playwright.config.ts` under `/config` folder
2. ✅ [Rule]: There should be one function that has to `export default defineConfig`
3. ✅ Change the root config export to
   1. ``export default defineConfig({})` -> `export const baseConfig = defineConfig({})``
4. ✅ Import `root` config `import { baseConfig } from "../playwright.config.ts";`
5. ✅ Extend the root config setting with `spread operator`

🎯 The new `config` will extend the old config settings
---

### Session 2: Run Test With New Env Config

1. ✅ Import the `EnvConfig` from helper folder
2. ✅ Extend the new config to extend the `EnvConfig` type
3. ✅ Add the custom env variables under `use` object to the config
   1. e.g. `https://katalon-demo-cura.herokuapp.com/`
4. ✅ Run the command below and confirm the number of tests
   1. `npx playwright test --config=config/test.playwright.config.ts --list`
5. ✅ You would see `Error: No tests found` - why? 
   1. Update `testDir`
6. ✅ Use the variable in `spec` file
7. ✅ Add a new key in `scripts` section with `--config` option
8. ✅ Try with new `env` config file and run and prove it works
9. ✅ Done!🎉
---



