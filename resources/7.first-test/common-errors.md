# Common Errors and Resolutions


## 1. Spec/test file not having `.spec or .test` init

**Error:**
- No tests found

**Resolution:**
- Correct the spec file name


## 2. Navigation Timeout Error

**Error:**
```log
Error: page.goto: Test ended.
Call log:
  - navigating to "https://katalon-demo-cura.herokuapp.com/", waiting until "load"
```

**Resolution:**

1. **Increase Navigation Timeout:**

```ts
use: {
    navigationTimeout: 30_000,  // Set timeout to 30 seconds
},
```

2. **Check Async/Await Usage:**
   - Ensure you haven't forgotten the `await` keyword before navigation commands
   - Common places to check:
     - `page.goto()`
     - Navigation actions in page objects

---

