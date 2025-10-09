The following examples demonstrate how to:

- ✅ Add annotations to a group of tests
- ✅ Conditionally skip tests (e.g., based on environment or browser)
- ✅ Use custom tags like `@smoke` for categorization and filtering

💡 Pro Tip: You can use `--grep` command in CLI to run only tests with the @smoke tag:

```sh
npx playwright test --grep '@smoke' --headed
```

In windows, remember to escape the quotes, like

```sh
"demo": "npx playwright test --grep=\"@smoke\" --headed",
```