# ⏳ Playwright Timeouts Quick Reference

| Timeout Scope          | Default   | In Code                           | Config                       | CLI Flag           |
|------------------------|-----------|-----------------------------------|------------------------------|--------------------|
| **Action**             | none      | `{ timeout }` at action level     | `use: { actionTimeout }`     | —                  |
| **Expect**             | 5,000 ms  | `{ timeout }` on expect level     | `expect: { timeout }`        | —                  |
| **Test function**      | 30,000 ms | `test.setTimeout`, `test.slow`    | `timeout`                    | `--timeout`        |
| **beforeAll/afterAll** | 30,000 ms | `testInfo.setTimeout` inside hook | —                            | —                  |
| **Navigation**         | none      | `{ timeout }`                     | `use: { navigationTimeout }` | —                  |
| **Global run**         | none      | —                                 | `globalTimeout`              | `--global-timeout` |