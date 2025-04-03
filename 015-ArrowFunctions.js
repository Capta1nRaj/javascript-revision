console.clear();

//! 📌 This note is about **When to Use and Avoid Arrow Functions in JavaScript**

//^ ✅ When to Use Arrow Functions:
//* 1. For short, single-line functions.
const square = (x) => x * x;

//* 2. Inside array methods (map, filter, reduce).
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((num) => num * num);

//* 3. As callbacks (setTimeout, event listeners).
setTimeout(() => console.log("Hello"), 1000);

//* 4. When using `this` from the surrounding scope (lexical `this`).
const user = {
    name: "Alice",
    greet: function () {
        setTimeout(() => console.log(`Hello, ${this.name}`), 1000); // ✅ Works correctly
    }
};
user.greet();

//^ ❌ When NOT to Use Arrow Functions:
//* 1. Object methods (`this` will be undefined).
const user2 = {
    name: "John",
    greet: () => console.log(`Hello, ${this.name}`) // ❌ Wrong - `this` refers to global scope (window in browsers, undefined in strict mode)
};
user2.greet(); // Output: Hello, undefined

//* 2. Constructor functions (arrow functions lack `this`).
const Person = (name) => { this.name = name; }; // ❌ Not a constructor

//* 3. When needing `arguments` (arrow functions don’t have it).
function showArgs() {
    console.log(arguments); // ✅ Works in regular function
}
showArgs(1, 2, 3);

const showArgsArrow = () => console.log(arguments); // ❌ ReferenceError
// showArgsArrow(1, 2, 3);

//* 4. Prototype methods in a class.
class User {
    constructor(name) { this.name = name; }
    greet = () => console.log(`Hello, ${this.name}`); // ❌ Not recommended for prototype methods
}

const user3 = new User("Bob");
user3.greet(); // Works, but not optimal for memory usage

//^ 🔍 Arrow Function Behavior with `this` in Different Environments

// 1️⃣ In Node.js, `this` inside an arrow function refers to an empty object (`{}`).
// 2️⃣ In the browser, `this` inside an arrow function refers to the global `window` object.

const data = () => {
    console.log(this); // {} in Node.js, `window` in browsers
    return "Hello World";
};
data();

function data2() {
    console.log(this); // `window` in browsers, `{}` in Node.js strict mode
    return "Hello World";
}
data2();

//^ 🎯 Implicit Return in Arrow Functions
const sum = (a, b) => a + b; // ✅ Short and clean

//🔥 **Key Takeaways:**
/*
| ✅ Use Arrow Functions When... | ❌ Avoid Arrow Functions When... |
|-------------------------------|--------------------------------|
| Writing short functions       | Defining object methods (`this` issues) |
| Using array methods           | Creating constructor functions (`new` won’t work) |
| Writing callbacks             | Needing `arguments` inside function |
| Avoiding binding `this`       | Defining class prototype methods |

🔹 **Arrow functions inherit `this` from the surrounding scope (lexical `this`).**  
🔹 **They don’t have their own `this`, `arguments`, `super`, or `new.target`.**  
🔹 **They are great for short functions but not always the best choice! 🚀**
*/