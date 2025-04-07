// 📌 JavaScript: Asynchronous Programming (Complete Notes)

// 🔹 Synchronous vs Asynchronous

// 👉 Synchronous (Blocking)
// JavaScript executes code line by line.
// It waits for a task to finish before continuing.
function syncExample() {
    console.log("1");
    console.log("2");
    console.log("3");
}
syncExample();
// Output: 1 → 2 → 3

// 👉 Asynchronous (Non-Blocking)
// JS does NOT wait. It sends some tasks away (to Web APIs), continues, and handles them later.
console.log("Start");
setTimeout(() => {
    console.log("Async Task");
}, 1000);
console.log("End");
// Output: Start → End → Async Task

// 🔹 What is Async Code?
// Async code runs in the background and doesn't block the main thread.
// Examples of async operations:
// - API calls (fetch, axios)
// - setTimeout / setInterval
// - File reading
// - Event listeners
// - Database access

// 🔹 The Event Loop (Core of JS Async Behavior)
//
// JavaScript has 1 main thread (Single-threaded):
// 🧠 Execution Stack (Call Stack)
// 🧠 Web APIs (in browser - handle things like setTimeout, fetch)
// 🧠 Callback Queue (tasks waiting to be pushed into the stack)
// 🧠 Event Loop (checks stack and queue)
//
// 📈 Flow:
// 1. Sync code runs → Call Stack
// 2. Async code sent to Web APIs
// 3. After completion, callback goes to Callback Queue
// 4. Event Loop pushes callback to stack when empty

// 🔹 Example: setTimeout
console.log("Start");
setTimeout(() => {
    console.log("After 1 sec");
}, 1000);
console.log("End");
// Output: Start → End → After 1 sec

// 🔹 Promises (ES6)
// A Promise represents a value that will be available in the future.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 2000);
});

promise.then(data => console.log(data)).catch(err => console.log(err));

// Output: Data loaded (after 2 seconds)

// 🔹 async / await (ES8)
// Syntactic sugar over Promises. Easier to read & write async code.
// await pauses the function until the Promise resolves (only works inside async functions)

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Data received");
        }, 1500);
    });
}

async function fetchData() {
    console.log("Fetching...");
    const result = await getData(); // waits here
    console.log(result);
}

fetchData();
// Output:
// Fetching...
// ✅ Data received (after 1.5 sec)

// 🔹 Blocking vs Non-Blocking Summary:

// ✅ Blocking:
// - Waits for one task to finish
// - Slower if task is long (e.g., file read, network request)
// - Happens with sync code

// ✅ Non-Blocking:
// - Doesn't wait
// - Uses callbacks, Promises, or async/await
// - Better for performance

// 🔹 Real World Example:

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John" });
        }, 1000);
    });
}

async function showUser() {
    console.log("Loading user...");
    const user = await fetchUser(); // pauses until data is fetched
    console.log(user); // { id: 1, name: "John" }
}
showUser();

// 🔹 Bonus: What if you don’t use `await`?
// This is a common mistake 👇

const data = fetchUser(); // ❌ Returns a Promise, not actual data
console.log(data); // Output: Promise { <pending> }

// ✅ Fix:
async function getRealData() {
    const data = await fetchUser(); // now resolves properly
    console.log(data);
}
getRealData();  