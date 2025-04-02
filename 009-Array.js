//^ JavaScript Arrays: Shallow Copies & Deep Copies

//! Important: slice vs splice

//* .slice()
// Used to create a **shallow copy** of an array or extract a portion of an array.
// It does **not** modify the original array.

const arr1 = [1, 2, 3, 4, 5];
const slicedArr = arr1.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr1); // Original array remains unchanged: [1, 2, 3, 4, 5]

//* .splice()
// Used to remove, replace, or insert elements in an array.
// It **modifies** the original array.

const arr2 = [10, 20, 30, 40, 50];
const splicedArr = arr2.splice(1, 2, 25, 35);
console.log(splicedArr); // Output: [20, 30] (removed elements)
console.log(arr2); // Modified array: [10, 25, 35, 40, 50]

//! 🔥 **Key Differences**
/*
| Method   | Modifies Original Array | Returns  |
|----------|------------------------|----------|
| slice()  | ❌ No                  | ✅ New Array |
| splice() | ✅ Yes                 | ✅ Removed Items |
*/

//^ .flat()
// Flattens nested arrays to a given depth.

const nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(nestedArr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
console.log(nestedArr.flat(Infinity)); // Fully flattens the array

//^ .isArray()
// Checks if a value is an array.

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray({ key: "value" })); // false

//^ .from()
// Creates an array from an iterable or an array-like object.

console.log(Array.from("Hello")); // Output: ['H', 'e', 'l', 'l', 'o']
console.log(Array.from([1, 2, 3], (x) => x * 2)); // Output: [2, 4, 6]

//* ⚠️ Using `Array.from()` with non-iterable objects
console.log(Array.from({ length: 3 }, (_, i) => i + 1)); // Output: [1, 2, 3]

//! ❌ This does NOT work: Array.from({ name: "Hitesh" })
// Because objects are not iterable.

//^ .concat()
// Merges two or more arrays.

const arr3 = [1, 2];
const arr4 = [3, 4];
const mergedArr = arr3.concat(arr4);
console.log(mergedArr); // Output: [1, 2, 3, 4]

//^ .join()
// Converts an array into a string, with a specified separator.

const words = ["Hello", "World"];
console.log(words.join(" ")); // Output: "Hello World"
console.log(words.join("-")); // Output: "Hello-World"

//^ .split() 
// Splits a string into an array based on a separator.

const text = "JavaScript is fun";
console.log(text.split(" ")); // Output: ["JavaScript", "is", "fun"]

//^ Array.of()
// Creates an array from the given arguments.

console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]
console.log(Array.of(5)); // Output: [5]
console.log(Array.of("a", "b", "c")); // Output: ["a", "b", "c"]

//🔥 **Key Takeaways**
/*
✅ `.slice()` creates a **shallow copy** without modifying the original array.
✅ `.splice()` **modifies** the original array by removing, replacing, or inserting elements.
✅ `.flat()` is used to **flatten nested arrays**.
✅ `.isArray()` checks if a value is an array.
✅ `.from()` converts **iterables and array-like objects** into arrays.
✅ `.concat()` merges arrays **without modifying** the original ones.
✅ `.join()` converts an array into a **string**, while `.split()` converts a string into an **array**.
✅ `Array.of()` creates an array from individual arguments, unlike `Array()` which behaves differently for a single number.
*/