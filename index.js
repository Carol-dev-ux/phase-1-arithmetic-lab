

// Implement the multiply function
function multiply(num1, num2) {
  return num1 * num2;
}

// Implement the random function
function random() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
}

// Implement the mod function
function mod(num3, num4) {
  return num3 % num4;
}

// Implement the max function
function max(...numbers) {
  return Math.max(...numbers);
}

module.exports = { multiply, random, mod, max };
