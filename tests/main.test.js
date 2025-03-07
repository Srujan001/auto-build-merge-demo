// Update the import line at the top
const { add, subtract, multiply } = require('../src/main');

// Add this test to the existing describe block
test('multiply function correctly multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, 1)).toBe(-1);
  expect(multiply(0, 5)).toBe(0);
});
