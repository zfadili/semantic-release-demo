const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./index");

test("returns hello world", () => {
  assert.equal(greet(), "Hello, World!");
});