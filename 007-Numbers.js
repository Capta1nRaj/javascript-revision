//^ Number Methods in JavaScript

console.clear();

//* .toPrecision()
// Formats a number to the specified length, rounding if necessary.
const num = 123.456;
console.log(num.toPrecision(4)); // Output: "123.5" (Rounds to 4 significant digits)

//* .toLocaleString()
// Converts a number to a localized string representation based on the given locale.
console.log(num.toLocaleString());          // Default locale format
console.log(num.toLocaleString('en-IN'));   // Indian format (e.g., "1,23,456.456")
console.log(num.toLocaleString('en-US'));   // US format (e.g., "123,456.456")

//* .toString()
// Converts a number to a string.
console.log(num.toString()); // Output: "123.456"

//^ Math Methods

//* Math.abs()
// Returns the absolute (positive) value of a number.
console.log(Math.abs(-10)); // Output: 10

//* Math.ceil()
// Rounds a number **up** to the nearest integer.
console.log(Math.ceil(4.2)); // Output: 5

//* Math.floor()
// Rounds a number **down** to the nearest integer.
console.log(Math.floor(4.9)); // Output: 4

//* Math.round()
// Rounds a number to the nearest integer.
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

//* Math.max()
// Returns the largest value among given numbers.
console.log(Math.max(10, 5, 20, 8)); // Output: 20

//* Math.min()
// Returns the smallest value among given numbers.
console.log(Math.min(10, 5, 20, 8)); // Output: 5

//* Math.random()
// Generates a random decimal number between `0` (inclusive) and `1` (exclusive).
console.log(Math.random()); // Output: Random number like 0.8347321

//* Math.sqrt()
// Returns the square root of a number.
console.log(Math.sqrt(25)); // Output: 5

//* Math.pow()
// Returns the result of a number raised to a given power.
// Equivalent to `base ** exponent`.
console.log(Math.pow(2, 3)); // Output: 8 (2³)
console.log(2 ** 3);         // Output: 8 (Same as Math.pow)