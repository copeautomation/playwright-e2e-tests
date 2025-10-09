### Running a Test via `package.json` Scripts

1. Add a new script entry named `demo` inside the `scripts` section of your `package.json` file:
```json
"scripts": {
  "demo": "npx playwright test tests/demo/first-test.spec.ts --headed"
}
```
2. Execute the test by running the following command in your terminal:
```sh
npm run demo
```
[💡] This approach helps you avoid typing long commands repeatedly.

🎯 The first BIG step forward ...

---
