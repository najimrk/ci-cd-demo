const addition = require("./index");

test("addition simple", () => {
  expect(addition(2, 3)).toBe(5);
});
