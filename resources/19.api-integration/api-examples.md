## API Integration

Playwright allows seamless API testing using its built-in `request` object. Below are examples for both basic REST's GET request

### Basic REST API – GET Request

Fetch a list of users from a public API:

**GET Example**
```ts
import { test, expect, request } from "@playwright/test";

test.describe("REST API Demo", () => {
    const baseURL = "https://reqres.in/api";

    test("Should get a list of students", async ({ request }) => {
        const listRes = await request.get(`${baseURL}/users?page=2`, {
            headers: {
                "x-api-key": "reqres-free-v1",
            },
        });
        expect(listRes.status()).toBe(200);

        // Get the data
        const listData = await listRes.json();
        console.log("User List (Page 2):", listData);
    });
});

```

**POST Example**

```ts
   test("Should create a user (POST)", async ({ request }) => {
        const payload = {
            name: "test-user",
            job: "leader",
            id: "123",
            createdAt: "2025-08-16T10:13:43.039Z",
        };

        // const payload = { name: "morpheus", job: "leader" };

        const res = await request.post(`${baseURL}/users`, {
            headers: {
                "x-api-key": "reqres-free-v1", // optional; keep for parity with your GET example
            },
            data: payload, // Playwright sends JSON automatically for objects
        });

        expect(res.status()).toBe(201);
        const resJSON = await res.json();
        console.log(`>> RESPONSE: ${JSON.stringify(resJSON)}`);
    });
```

---
