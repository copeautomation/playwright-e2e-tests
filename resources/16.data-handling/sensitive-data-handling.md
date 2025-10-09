## Handling Sensitive Data
Use `.env` files to manage environment-specific variables for flexible and secure test execution.

---

__Steps to Load Environment Data from `.env` Files__:
1. Install `dotenv`

```sh
npm i -D dotenv
```
- `dotenv:` Loads variables from .env files

2. Import Modules in `playwright.config.ts`

```ts
import dotenv from 'dotenv';
dotenv.config();
```

3. You can update the variable in `.env` file

```sh
# Runner
RUNNER=local

# TEST - CURA WEB APP
TEST_USER_NAME=John Doe
TEST_PASSWORD=ThisIsNotAPassword
```

4. You can access these variable as the node.js env variable across the project files
5. Update the username and password in a test file and run

Note: If you see type error when using `process.env.{varName}`, you can overcome this by having a `non-null assertion (!)` check but be sure that the variable exists. Alternatively you can use `//@ts-ignore`

🎯 You’re now ready to run Playwright tests in different environments with ease!

---