import { test, expect, request} from "@playwright/test"
import { log } from "../helpers/logger.js"

test.describe("REST API Demo", () => {
    const baseURL = "https://reqres.in/api"

    test("Should get list of users", async ({ request }) => {
    
        // Make a GET call
        await log("info", `Making a GET call using ${baseURL}`)
        const res = await request.get(`${baseURL}/users?page=2`, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })

        // Assert the status code
        expect(res.status()).toBe(200)
        await log("info", `The GET call is succesfull with ${res.status()}`)

        // Get list of users
        const userData = await res.json()
        log("info", `List of users: ${JSON.stringify(userData)}`)

    });
});


/**
 * var request = require('request');
var options = {
  'method': 'GET',✅
  'url': 'https://reqres.in/api/users?page=2', ✅
  'headers': {
    'x-api-key': 'reqres-free-v1'✅
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
 */