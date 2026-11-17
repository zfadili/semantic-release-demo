const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./index");

test("greet supports a custom name", () => {
  assert.equal(greet({ name: "Alice" }), "Hello, Alice.");
});