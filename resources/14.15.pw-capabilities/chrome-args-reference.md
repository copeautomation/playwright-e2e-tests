# Chrome Arguments

## Configuration Options

### Global Configuration (affects all projects)
```ts
// playwright.config.ts
export default defineConfig({
  use: {
    launchOptions: {
      args: ["--disable-web-security"]
    }
  }
});
```

### Project-Specific Configuration
```ts
// playwright.config.ts
projects: [
  {
    name: "chromium-headless",
    use: {
      ...devices["Desktop Chrome"],
      launchOptions: {
        args: ["--no-sandbox", "--disable-dev-shm-usage"]
      }
    }
  }
]
```

---

## Common Combinations

### For Stable CI Testing
```ts
args: [
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--disable-gpu",
  "--disable-extensions",
  "--disable-background-networking",
  "--no-first-run",
  "--disable-default-apps"
]
```

### For Cross-Origin Testing
```ts
args: [
  "--disable-web-security",
  "--disable-features=VizDisplayCompositor",
  "--allow-running-insecure-content",
  "--disable-background-networking"
]
```

### For Mobile
```ts
args: [
    "--use-mobile-user-agent",
    "--touch-events=enabled",
    "--enable-viewport-meta"
  ]
```


---

## References

- [Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

---
