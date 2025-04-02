console.clear();

//! 📌 This note is about when to use and avoid arrow functions in JavaScript.

//^ ✅ When to Use Arrow Functions:
//* 1. For short, single-line functions.
const square = (x) => x * x;

//* 2. Inside array methods (map, filter, reduce).
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((num) => num * num);

//* 3. As callbacks (setTimeout, event listeners).
setTimeout(() => console.log("Hello"), 1000);

//* 4. When using `this` from the surrounding scope.
const user = {
    name: "Alice",
    greet: function () {
        setTimeout(() => console.log(`Hello, ${this.name}`), 1000);
    }
};
user.greet(); // ✅ Works correctly

//^ ❌ When NOT to Use Arrow Functions:
//* 1. Object methods (`this` will be undefined).
const user2 = {
    name: "John",
    greet: () => console.log(`Hello, ${this.name}`) // ❌ Wrong
};

//* 2. Constructor functions (arrow functions lack `this`).
const Person = (name) => { this.name = name; }; // ❌ Not a constructor

//* 3. When needing `arguments` (arrow functions don’t have it).
const showArgs = () => console.log(arguments); // ❌ ReferenceError

//* 4. Prototype methods in a class.
class User {
    constructor(name) { this.name = name; }
    greet = () => console.log(`Hello, ${this.name}`); // ❌ Not recommended
}

//🔥 Key Takeaways:
/*
| ✅ Use Arrow Functions When... | ❌ Avoid Arrow Functions When... |
|-------------------------------|--------------------------------|
| Writing short functions       | Defining object methods (`this` issues) |
| Using array methods           | Creating constructor functions (`new` won’t work) |
| Writing callbacks             | Needing `arguments` inside function |
| Avoiding binding `this`       | Defining class prototype methods |

Arrow functions are useful but not always the best choice! 🚀
*/