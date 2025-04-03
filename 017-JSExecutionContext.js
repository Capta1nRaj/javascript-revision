console.clear();

//! 📌 This note is about **JavaScript Execution Context**

//^ 🔹 What is Execution Context?
//* Execution Context is the environment where JavaScript code is executed.
//* It determines variable scope, function execution, and memory allocation.

//^ 🚀 1️⃣ Types of Execution Contexts in JavaScript
/*
1️⃣ **Global Execution Context (GEC)**:
   - Created when JavaScript starts execution.
   - Contains global variables and functions.
   - `this` in the global context refers to `window` (in browsers) or `global` (in Node.js).

2️⃣ **Function Execution Context (FEC)**:
   - Created whenever a function is called.
   - Each function gets its own execution context.
   - Multiple function contexts can exist at the same time.

3️⃣ **Eval Execution Context**:
   - Created when the `eval()` function is used (rarely used and not recommended due to security issues).
*/

//^ 🌍 2️⃣ Global Execution Context (GEC)
console.log(this); // ✅ In the global scope, `this` refers to the global object (Window in browsers)

//^ 🏗 3️⃣ Execution Context Phases
//* When JavaScript executes, each execution context follows these two phases:

/*
🔹 **1. Memory Creation Phase (Hoisting)**
   - JS scans the code and stores variable & function declarations in memory.
   - Variables declared with `var` are initialized as `undefined`, while `let` and `const` remain uninitialized.
   - Functions are fully stored in memory.

🔹 **2. Execution Phase**
   - The code runs line by line.
   - Variables get assigned actual values.
   - Functions execute when called.
*/

//^ 📞 4️⃣ Call Stack (Execution Stack)
/*
✅ JavaScript uses a **Call Stack** (LIFO - Last In, First Out) to manage execution contexts.
✅ The Call Stack keeps track of currently running functions.
✅ When a function is called, it is **pushed** onto the stack.
✅ When a function returns, it is **popped** off the stack.
*/

//^ 📝 Example 1: Execution Context and Call Stack Flow

function first() {
   console.log("First function");
   second(); // Calls second function
}

function second() {
   console.log("Second function");
   third(); // Calls third function
}

function third() {
   console.log("Third function");
}

first(); // ✅ Execution starts here

/*
📝 **Call Stack Flow:**
1. `first()` is called → Added to the call stack.
2. `first()` calls `second()` → Added to the call stack.
3. `second()` calls `third()` → Added to the call stack.
4. `third()` executes → Removed from the call stack.
5. `second()` completes → Removed from the call stack.
6. `first()` completes → Removed from the call stack.
7. Call stack is empty again.
*/

//^ 📝 Example 2: Nested Function Calls with Execution Context

function outer() {
   console.log("Outer function starts");

   function inner() {
      console.log("Inner function starts");

      function deepest() {
         console.log("Deepest function executed");
      }

      deepest(); // Calls deepest function
      console.log("Inner function ends");
   }

   inner(); // Calls inner function
   console.log("Outer function ends");
}

outer(); // ✅ Execution starts here

/*
📝 **Call Stack Flow for Example 2:**
1. `outer()` is called → Added to the call stack.
2. `outer()` calls `inner()` → Added to the call stack.
3. `inner()` calls `deepest()` → Added to the call stack.
4. `deepest()` executes → Removed from the call stack.
5. `inner()` completes → Removed from the call stack.
6. `outer()` completes → Removed from the call stack.
7. Call stack is empty again.
*/

//^ 🔥 Key Takeaways:
/*
✅ **Execution Context** is an environment where JS code runs.
✅ **Global Execution Context (GEC)** is created first.
✅ **Function Execution Context (FEC)** is created for each function call.
✅ **Memory Phase & Execution Phase** ensure variable hoisting and execution.
✅ **Call Stack** manages function execution order (LIFO - Last In, First Out).
✅ **Nested function calls** create multiple execution contexts in the stack.
✅ **Each function gets its own execution context** until it returns a value or completes execution.
*/