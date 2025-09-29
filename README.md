# Instructions and Notes

## In this session...

### pseudo-code
1. [✅] Create `global-setup.ts` file
2. [✅] As per the rule, export a single function that takes a config object
3. [✅] Delete allure reporter
  - [✅] Get the `allure-report` path
  - [✅] Use `path` module to get the path
  - [✅] Use `fs` native module's sync method `existsSync, rmSync` to delete files
4. [✅] Link it to `config` file
5. [✅] Run a simple test to confirm if allure results is deleted
6. [✅] Add a `RUNNER` in `.env`
7. [✅] Install `dotenv` package and load it in config file
8. [✅] Add a logic to to delete only for `local` runs
9. [✅] Done 🎉