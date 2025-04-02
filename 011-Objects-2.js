console.clear();

//! 📌 This note is about **Singleton Objects** and `Object.assign()`

//^ Creating a Singleton Object
// When an object is created using `new Object()`, it is a **singleton object**.
// Singleton means only **one instance** of the object exists.

const user = new Object(); // Singleton object
user.name = "John";
user.email = "john@gmail.com";

//^ Deeply Nested Objects
// Objects can have **nested** objects inside them.

user.address = {
    city: "New York",
    state: "NY",
    country: "USA",
    street: {
        number: 123,
        name: "Main St",
    },
};

console.log(user);

//^ Merging Objects using `Object.assign()`
// `Object.assign(target, source1, source2, ...)` merges multiple objects into the **target** object.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Why use `{}` as the first argument?
// - `{}` ensures that `obj1` and `obj2` are **merged into a new object** instead of modifying `obj1`.
// - If we use `obj1` as the first argument, it will be **modified directly**.

const obj3 = Object.assign({}, obj1, obj2); // Creates a new merged object

console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//^ Object Methods
console.log(Object.keys(obj3)); // Output: ['1', '2', '3', '4'] → Returns all keys as an array
console.log(Object.values(obj3)); // Output: ['a', 'b', 'c', 'd'] → Returns all values as an array
console.log(Object.entries(obj3)); // Output: [['1', 'a'], ['2', 'b'], ['3', 'c'], ['4', 'd']] → Returns key-value pairs
console.log(obj3.hasOwnProperty("1")); // Output: true → Checks if the key exists in the object

//🔥 **Key Takeaways**
/*
✅ **Singleton Objects** are created using `new Object()`.
✅ Objects can have **deeply nested** properties.
✅ `Object.assign(target, source1, source2, ...)` merges objects.
✅ Using `{}` in `Object.assign()` ensures a **new object** is created.
✅ `Object.keys(obj)` → Returns an array of keys.
✅ `Object.values(obj)` → Returns an array of values.
✅ `Object.entries(obj)` → Returns an array of key-value pairs.
✅ `.hasOwnProperty("key")` → Checks if a property exists in an object.
*/