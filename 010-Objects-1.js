console.clear();

//! 📌 This note is about **Object Literals**

//^ Singleton Object
// When an object is created using `Object.create()`, it is a **singleton object**.
// Singleton means only **one instance** of the object exists.

const singletonObj = Object.create({});
console.log(singletonObj); // Output: {}

//^ Object Literals
// Creating an object using curly braces `{}` is called an **object literal**.

const user = {
    name: "John",
    email: "john@gmail.com",
    isAdmin: false,
    "user-address": "123 Main St", // Property name with space requires quotes
};

//^ Accessing Object Properties
console.log(user.name); // Output: John
console.log(user["name"]); // Output: John
console.log(user["user-address"]); // Output: 123 Main St

//* ⚠️ If a key has special characters or spaces, use bracket notation `[]`.

//^ Using Symbols in Objects
// Symbols create **unique** and **hidden** properties in objects.

const symbol = Symbol("key1");

const user2 = {
    name: "John",
    email: "john@gmail.com",
    isAdmin: false,
    "user-address": "123 Main St",
    [symbol]: "key2", // Symbol key must be inside brackets []
};

console.log(user2); // Output: The symbol property will not be visible in console.log
console.log(typeof user2[symbol]); // Output: string

//* ⚠️ Symbols do not appear in `Object.keys()`, `Object.values()`, or `JSON.stringify()`.

//^ Freezing an Object
// `Object.freeze(obj)` prevents **modifications** to the object.

Object.freeze(user2);
user2.name = "Jane"; // This change will be ignored
console.log(user2.name); // Output: John

//* ❌ `Object.freeze()` does not allow adding, deleting, or modifying properties.

//^ Adding Methods to Objects
// Objects can have **methods** (functions inside objects).

user.greeting = function () {
    console.log("Hello, world!");
};

console.log(user.greeting()); // Output: Hello, world!

//^ Using `this` Inside Object Methods
// `this` refers to the current object.

user.greeting2 = function () {
    console.log(`Hello, world! ${this.name}`);
};

console.log(user.greeting2()); // Output: Hello, world! John

//🔥 **Key Takeaways**
/*
✅ This note is about **Object Literals** `{}`.
✅ `Object.create()` creates a **singleton object**.
✅ **Object literals** `{}` are the most common way to create objects.
✅ Use **dot notation** or **bracket notation** to access object properties.
✅ **Symbols** create **unique** and **hidden** properties in objects.
✅ `Object.freeze(obj)` makes an object **immutable**.
✅ Objects can have **methods**, and `this` refers to the **current object**.
*/