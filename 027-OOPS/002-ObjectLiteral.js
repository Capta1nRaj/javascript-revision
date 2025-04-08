console.clear();

// 📌 Object-Oriented JavaScript: Object Literal, Constructor Function & Class

// 🔹 Object Literal
const user = {
    userName: "John Cena",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        return `User name is: ${this.userName}`;
    }
};

console.log(user.userName);              // 👉 "John Cena"
console.log(user.getUserDetails());     // 👉 "User name is: John Cena"

// 🔹 `this` Keyword
// - Refers to the current object context.
// - In object literal, `this` refers to the object (`user`) itself.


// 🔹 Constructor Function
function userData1(userName, loginCount, signedIn) {
    // Properties attached to the object
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    // Method attached to the object
    this.getUserDetails = function () {
        return `User name is: ${this.userName}`;
    };

    // 🧠 Why use `this`?
    // - Without `this`, you'd be creating local variables (not part of the object).
    // - `this` allows the object to "own" the values (like attaching keys in a dictionary).
    // - `this` is dynamic — its value depends on how the function is called.
}

const userOne = new userData1("Function Constructor", 8, true);
console.log(userOne.getUserDetails());  // 👉 "User name is: Function Constructor"


// 🔹 Class Constructor (ES6+)
class UserData2 {
    constructor(userName, loginCount, signedIn) {
        this.userName = userName;
        this.loginCount = loginCount;
        this.signedIn = signedIn;
    }

    getUserDetails() {
        return `User name is: ${this.userName}`;
    }
}

const userTwo = new UserData2("Class Constructor", 8, true);
console.log(userTwo.getUserDetails());  // 👉 "User name is: Class Constructor"

//! Here's what happens behind the scenes when the new keyword is used:

// 🔹 `new` Keyword - What Actually Happens?
/*
When you use `new userData1()` or `new UserData2()`:
1️⃣ A brand new empty object is created internally.
2️⃣ `this` inside the constructor now refers to that empty object.
3️⃣ The constructor assigns values/methods to `this` → attaches to the object.
4️⃣ If no `return` is specified, `this` (the new object) is returned by default.
5️⃣ The newly created object gets linked to the constructor’s `.prototype`.
*/

console.log(userOne);                    // 👉 Full object
console.log(userOne.constructor);       // 👉 [Function: userData1]
console.log(userOne.constructor.name);  // 👉 "userData1"


// 🔹 Differences at a Glance:

/*
🧾 Object Literal
- Easiest way to create a single object.
- No template or reusability.
- Methods and properties are defined manually.

🔧 Constructor Function
- Reusable object blueprint (pre-class syntax).
- Uses `this` + `new` to build objects.
- No inheritance unless you use prototype manually.

🏗️ Class (ES6)
- Cleaner syntax for constructor functions.
- Supports inheritance via `extends` and `super`.
- Methods are added to prototype by default (memory-efficient).
*/


// 🔹 Extra Tip: `this` Inside Arrow Function
/*
Arrow functions DO NOT have their own `this`.
They inherit `this` from the surrounding (lexical) scope.

So avoid using arrow functions for object methods when using `this`.
Use regular function syntax for methods where `this` refers to the object.
*/