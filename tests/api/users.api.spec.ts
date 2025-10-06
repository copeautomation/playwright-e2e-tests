import { test, expect, request } from "@playwright/test";
import { log } from "../helpers/logger.js";

test.describe("REST API Demo", () => {
    const baseURL = "https://reqres.in/api";
    // GET Method
    test("Should get list of users", async ({ request }) => {
        // Make a GET call
        await log("info", `Making a GET call using ${baseURL}`);
        const res = await request.get(`${baseURL}/users?page=2`, {
            headers: {
                "x-api-key": "reqres-free-v1",
            },
        });

        // Assert the status code
        expect(res.status()).toBe(200);
        await log("info", `The GET call is succesfull with ${res.status()}`);

        // Get list of users
        const userData = await res.json();
        log("info", `List of users: ${JSON.stringify(userData)}`);
    });

    // POST Method
    test("Should create a user", async ({ request }) => {
        // Make a GET call
        await log("info", `Making a POST call using ${baseURL}`);

        const payload = {
            name: "Alex",
            job: "Thomas",
            id: "125",
            createdAt: "2025-10-06T01:35:49.877Z",
        };

        const res = await request.post(`${baseURL}/users`, {
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            data: payload,
        });

        // Assert the status code
        expect(res.status()).toBe(201);
        await log("info", `The POST call is succesfull with ${res.status()}`);

        // Get list of users
        const restData = await res.json();
        log("info", `Response data from post call: ${JSON.stringify(restData)}`);
    });
});

/**
 * POST Call
 * var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://reqres.in/api/users',
  'headers': {
    'x-api-key': 'reqres-free-v1',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "Alex",
    "job": "Thomas",
    "id": "124",
    "createdAt": "2025-10-06T01:35:49.877Z"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
 */

/**
 * GET Call
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
