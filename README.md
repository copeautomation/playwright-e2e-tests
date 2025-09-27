# Instructions and Notes

## In this session...

**Allure Advanced Setup**
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
        appName: "CURA",
        Release: 'Release 1.1',
        node_version: process.version
      },
    },
  ],
],
```
---

