# Adding Screenshots in Playwright

## Option 1: Auto-Capture via Config

Add the following setting in the `use` section of your `playwright.config.ts`:

```ts
use: {
  screenshot: 'on', // Captures screenshot after each test
  // OR
  screenshot: 'only-on-failure', // Captures only when tests fail
}
```

## Option 2: Manual Screenshot Capture

### Basic Manual Screenshot

```ts  
  // Capture the screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  
  // Attach it to the report
  await test.info().attach("Full Page Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });

```
