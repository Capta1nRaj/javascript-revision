//# Comparison of `null` and `undefined` in JavaScript

//^ 1. `null` Comparisons
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
- `null > 0` → false because `null` is converted to `0`, but it does not satisfy the "greater than" condition.
- `null == 0` → false because `null` is only loosely equal to `undefined`, not to `0`.
- `null >= 0` → true because `null` is converted to `0`, and `0 >= 0` is true.

! Key Point: Relational comparisons (`>`, `<`, `>=`, `<=`) convert `null` to a number (`0`), but equality checks (`==`) do not.
*/

//^ 2. `undefined` Comparisons
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

/*
- `undefined == 0` → false because `undefined` is only loosely equal to `null`, not to any number.
- `undefined > 0` → false because `undefined` cannot be converted into a valid number for comparison.
- `undefined < 0` → false for the same reason as above.

! Key Point: Any comparison (`>`, `<`, `>=`, `<=`) involving `undefined` results in `false`, except `undefined == null`, which is `true`.
*/

//^ 3. Strict Equality (`===`) Checks
console.log(null === 0);       // false
console.log(undefined === 0);  // false
console.log(null === undefined); // false

/*
- `null === 0` → false because `null` is not the same type as `0`.
- `undefined === 0` → false because `undefined` is not a number.
- `null === undefined` → false because they are different types, even though `null == undefined` is true.
*/

//^ 4. Summary Table
/*
| Expression         | Result |
|-------------------|--------|
| `null > 0`       | false  |
| `null == 0`      | false  |
| `null >= 0`      | true   |
| `undefined == 0` | false  |
| `undefined > 0`  | false  |
| `undefined < 0`  | false  |
| `null === 0`     | false  |
| `undefined === 0`| false  |
| `null === undefined` | false |
*/

//^ 5. Best Practices
/*
- **Avoid loose equality (`==`)** when comparing `null` or `undefined` as it may cause unexpected results.
- **Use strict equality (`===`)** to ensure type safety and avoid implicit type conversion.
- **Explicitly handle `null` and `undefined` cases** in your logic to prevent unintended behavior.
- **Use `??` (nullish coalescing operator)** if you want to handle both `null` and `undefined` in a safe way.
*/

//^ 6. Using the Nullish Coalescing Operator (`??`)
const value = null ?? "default";
console.log(value); // Output: "default"

/*
- The `??` operator returns the right-hand value only if the left-hand value is `null` or `undefined`.
- Unlike `||`, it does not treat `0` or `""` (empty string) as falsy.
*/