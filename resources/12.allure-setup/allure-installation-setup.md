# Allure Reporter Setup for Playwright

## Installation & Basic Setup

### Step 1: Check and Install Allure Command Line Tool 

```sh
allure --version
```

If you encounter an error like `zsh: command not found: allure`, install the global command line tool:

```sh
npm install -g allure-commandline
```


### Step 1: Install Allure Playwright Package

Install the allure reporter as a development dependency:

```sh
npm install -D allure-playwright
```

---

### Step 2: Configure Reporter in Playwright Config

Update the `reporter` section in your `playwright.config.ts` file:

```ts
reporter: [
  ['html'],                    // Default Playwright HTML reporter
  ['allure-playwright'],       // Allure reporter
],
```

---
Run a test and you will see a folder `allure-results` in the project root

### Step 3: Generate and View Reports

After running your tests, generate the Allure report:

```sh
allure serve
```



## Advanced Configuration

### Enhanced Reporter Setup

For more detailed reporting, you can configure additional options:

```ts
reporter: [
  [
    'html',
    {
      open: 'never', // Don't auto-open HTML report
    },
  ],
  [
    'allure-playwright',
    {
      detail: true,
      suiteTitle: true,
      environmentInfo: {
        name: 'TEST',
        Release: 'Release 1.1',
        node_version: process.version
      },
    },
  ],
],
```

---

### Reference 
- [Allure Advance Config] (https://allurereport.org/docs/playwright/)

--- 

