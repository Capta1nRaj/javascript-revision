//# JavaScript `typeof` Operator Results

//! The `typeof` operator is used to determine the type of a given value. Below is a reference table showing the expected output for different data types.

//^ Table: `typeof` Operator Results
/*
| Type of Value                                | Result       |
|---------------------------------------------|-------------|
| Undefined                                   | "undefined"  |
| Null                                        | "object" (Legacy behavior) |
| Boolean                                     | "boolean"    |
| Number                                      | "number"     |
| String                                      | "string"     |
| Object (native and does not implement [[Call]]) | "object"  |
| Object (native or host and implements [[Call]]) | "function" |
| Object (host and does not implement [[Call]]) | Implementation-defined but not "undefined", "boolean", "number", or "string" |
*/

//^ Explanation:
/*
- `typeof undefined` → `"undefined"` ✅
- `typeof null` → `"object"` (Legacy behavior in JavaScript, not actually an object but kept for historical reasons) ❗
- `typeof true / false` → `"boolean"`
- `typeof 42 / 3.14 / NaN` → `"number"`
- `typeof "Hello"` → `"string"`
- `typeof {}` (empty object) → `"object"`
- `typeof function() {}` → `"function"` (Even though functions are objects, `typeof` returns "function" for compatibility reasons.)
- `typeof []` (Array) → `"object"` (Arrays are objects in JavaScript)
- `typeof new Date()` → `"object"`
- `typeof Symbol("id")` → `"symbol"`
- `typeof BigInt(1234)` → `"bigint"`
- `typeof document` (Browser Object Model) → `"object"` (Implementation-defined)
*/

//^ Key Takeaways:
/*
1. `null` returns `"object"` instead of `"null"` due to a historical JavaScript bug.
2. Functions return `"function"`, but they are technically objects.
3. Arrays and Dates return `"object"`, as they are specialized objects.
4. Symbols and BigInts have their own types (`"symbol"` and `"bigint"`) in modern JavaScript.
5. Host objects (like browser APIs) can have implementation-defined results.
*/

//^ Best Practices:
/*
- Use `typeof` for primitive types like `"number"`, `"string"`, `"boolean"`, etc.
- To accurately check for `null`, use `value === null` instead of `typeof value === "object"`.
- Use `Array.isArray(value)` to check if a value is an array instead of `typeof value === "object"`.
*/