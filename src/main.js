// Simple function that adds two numbers
function add(a, b) {
  return a + b;
}

// Simple function that subtracts one number from another
function subtract(a, b) {
  return a - b;
}

// Export functions for use in other files and tests
module.exports = {
  add,
  subtract
};

// If file is run directly
if (require.main === module) {
  console.log('Hello from the example project!');
  console.log(`2 + 3 = ${add(2, 3)}`);
}

// Add this after the existing functions
function multiply(a, b) {
  return a * b;
}

// Update the exports to include the new function
module.exports = {
  add,
  subtract,
  multiply
};
