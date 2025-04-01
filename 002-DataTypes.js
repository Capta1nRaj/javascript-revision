//# JavaScript Data Types

//! JavaScript has two main types of data:
//* 1. Primitive Data Types (immutable, stored by value)
//* 2. Non-Primitive (Reference) Data Types (mutable, stored by reference)

//^ 1. Primitive Data Types (Stored by Value)
//* These are immutable and stored directly in memory. They do not have methods (except wrapper objects like String, Number, etc.).

//* 1. String - A sequence of characters used to represent text.
const str = "Hello, World!";
console.log(str); // Output: Hello, World!

//* 2. Number - Represents integers and floating-point numbers.
const num = 42;
const floatNum = 3.14;
console.log(num, floatNum); // Output: 42 3.14

//* 3. BigInt - Used for integers larger than the Number limit.
const bigIntNum = 9007199254740991n;
console.log(bigIntNum); // Output: 9007199254740991n

//* 4. Boolean - Represents true or false values.
const isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true

//* 5. Undefined - A variable that has been declared but not assigned a value.
let notDefined;
console.log(notDefined); // Output: undefined

//* 6. Null - Represents an empty or unknown value.
let emptyValue = null;
console.log(emptyValue); // Output: null

//* 7. Symbol - Represents a unique identifier, mainly used in objects.
// Symbols are unique and immutable. They're primarily used as property keys to avoid name collisions.
const sym = Symbol("unique");
console.log(sym); // Output: Symbol(unique)

//^ 2. Non-Primitive (Reference) Data Types (Stored by Reference)
//* These are mutable and stored as references in memory. They are objects or object-like structures.

//* 1. Object - A collection of key-value pairs used to store structured data.
const person = { name: "John", age: 30 };
console.log(person); // Output: { name: "John", age: 30 }

//* 2. Arrays: A list-like structure to store multiple values in order.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//* 3. Dates: Provides methods to work with date and time.
const today = new Date();
console.log(today);

//* 4. Maps: Stores key-value pairs where keys can be of any type.
// A Map allows any data type as a key, unlike objects that only allow strings or symbols as keys.
// It maintains insertion order and provides better performance for frequent additions and deletions.
const map = new Map();
map.set("name", "Alice");
console.log(map); // Output: Map { 'name' => 'Alice' }

//* 5. Sets: A collection of unique values without duplicates.
// A Set automatically removes duplicate values and maintains the order of insertion.
// It is useful when you need to store unique elements.
const set = new Set([1, 2, 2, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }

//* 6. TypedArrays: Special arrays for handling binary data efficiently.
// TypedArrays provide a way to work with raw binary data in different formats (e.g., Int8Array, Uint8Array).
// They offer better performance for large data sets and are often used in scenarios like WebGL, audio processing, etc.
const intArray = new Int8Array([10, 20, 30]);
console.log(intArray); // Output: Int8Array [ 10, 20, 30 ]

//* 7. Promises: Handles asynchronous operations and returns a future value.
const promise = new Promise((resolve) => resolve("Promise resolved"));
promise.then(console.log); // Output: Promise resolved

//^ Summary Table
/*
| Data Type  | Type      | Example |
|------------|----------|---------|
| String     | Primitive | `"Hello"` |
| Number     | Primitive | `42, 3.14` |
| BigInt     | Primitive | `9007199254740991n` |
| Boolean    | Primitive | `true, false` |
| Undefined  | Primitive | `let x;` |
| Null       | Primitive | `let y = null;` |
| Symbol     | Primitive | `Symbol("id")` |
| Object     | Non-Primitive | `{name: "John"}` |
| Array      | Non-Primitive | `[1, 2, 3]` |
| Date       | Non-Primitive | `new Date()` |
| Map        | Non-Primitive | `new Map()` |
| Set        | Non-Primitive | `new Set()` |
| TypedArray | Non-Primitive | `new Int8Array()` |
| Promise    | Non-Primitive | `new Promise()` |
*/

//^ Best Practices
/*
- **Use `const`** for primitive values when they shouldn’t be reassigned.
- **Use `let`** for variables that may change over time.
- **Use `null` explicitly** when a variable should have no value.
- **Use `undefined` only when a variable is not assigned.**
- **Use strict equality (`===`)** to avoid implicit type conversion issues.
- **Use objects and arrays** when dealing with complex data structures.
*/