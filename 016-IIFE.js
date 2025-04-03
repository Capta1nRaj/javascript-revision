console.clear();

//! 📌 This note is about **IIFE - Immediately Invoked Function Expression**

//^ 🔹 What is an IIFE?
//* An IIFE is a function that runs immediately after it is defined.
//* It is commonly used to avoid polluting the global scope in JavaScript.

//^ 1️⃣ Basic IIFE Syntax
(function () {
    console.log("Hello World 1");
})(); // ✅ Function is invoked immediately after declaration

//^ 2️⃣ Arrow Function IIFE
(() => {
    console.log("Hello World 2");
})(); // ✅ Always end with a semicolon to avoid errors (explained below)

//^ ❓ Why Add a Semicolon at the End?
//* JavaScript relies on **Automatic Semicolon Insertion (ASI)**, but it's not always reliable.
//* If an IIFE is placed after another function or statement that does not end with a semicolon, JavaScript may not recognize it correctly.
//* To avoid unexpected behavior, always use a **semicolon (;)** before an IIFE if it's not the first statement in your script.

console.log("This is a normal statement") // ❌ No semicolon - potential issue
    (function () {
        console.log("This may cause an error if ASI fails");
    })(); // ✅ Adding a semicolon before prevents problems

//^ 3️⃣ IIFE with Parameters
(function (name) {
    console.log("Hello World 3", name);
})("John"); // ✅ Passing an argument to the IIFE

//^ 4️⃣ IIFE with Return Value
const result = (function (a, b) {
    return a + b;
})(1, 2);

console.log(result); // Output: 3

//^ 🔥 Key Takeaways:
/*
✅ **IIFE runs immediately** after its definition.
✅ **Avoids polluting the global scope** by limiting variables inside its function.
✅ **Requires semicolon before it** if placed after a statement to prevent syntax errors.
✅ Can **accept arguments and return values** just like regular functions.
✅ Can be written using **both function expressions and arrow functions**.
*/