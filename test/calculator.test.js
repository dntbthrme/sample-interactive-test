const { calculateTotal } = require("../src/calculator");

test("calculates the total correctly", () => {
  expect(calculateTotal(100, 3)).toBe(300);
});

test("calculates another total correctly", () => {
  expect(calculateTotal(50, 4)).toBe(200);
});
