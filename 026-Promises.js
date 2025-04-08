// 📌 JavaScript: Promises & Async/Await (Step-by-Step Examples)

console.clear();

// 🔹 Promise 1: Basic Promise + then()
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is complete');
        resolve(); // ✅ Calling resolve after task completes
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise consumed'); // 👉 Runs after resolve
});

// 🔹 Promise 2: Shortcut chaining directly on creation
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve(); // ✅ Resolve immediately
    }, 1000);
}).then(() => {
    console.log('Promise 2 consumed'); // 👉 Chained directly
});

// 🔹 Promise 3: Resolving with data (object)
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'Hitesh',
            email: 'hitesh@google.com',
        }); // ✅ Resolve with a JS object
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user); // 👉 { username: 'Hitesh', email: 'hitesh@google.com' }
});

// 🔹 Promise 4: Handling error + Chaining .then()
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // Change to true to test reject()
        if (!error) {
            resolve({ username: 'Hitesh', password: '12345' });
        } else {
            reject('Error: Something went wrong'); // ❌ Rejected
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user); // 👉 Full object
        return user.username; // Pass username to next then()
    })
    .then((username) => {
        console.log(username); // 👉 Logs just the username
    })
    .catch((error) => {
        console.log(error); // 👉 Catches any errors from above
    });

// 🔹 Async/Await with try-catch (fetch API)
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // ✅ Wait for HTTP response
        const data = await response.json(); // ✅ Parse JSON response
        console.log(data); // 👉 Logs user list
    } catch (error) {
        console.log(error); // 👉 Catches network/API error
    }
}
getAllUsers();

// 🔹 Equivalent with Promises (fetch API)
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) // 👉 Parse response
    .then((data) => console.log(data))   // 👉 Log user list
    .catch((error) => console.log(error)); // 👉 Handle error

// 🧠 Summary:

// ✅ Promises are used to handle async operations (e.g., API calls, timers).
// ✅ .then() handles resolved values
// ✅ .catch() handles errors
// ✅ Async/Await is syntactic sugar over Promises, makes code cleaner
// ✅ Always wrap async/await in try/catch to handle errors

// ❓ Interview Question:
// If you make an HTTP request using fetch (or a Promise) and get a 404 error,
// will the Promise resolve or reject?

// ✅ Answer:
// The Promise will still **resolve** – because the browser was able to make the request
// and got a response (even though it's an error like 404 or 500).
// It will NOT go to `.catch()` unless there's a **network error** (like no internet or DNS failure).

// 🧠 Important:
// - `fetch()` only rejects on **network failure**, not on HTTP error status codes.
// - You have to manually check `response.ok` or `response.status` to handle 404/500.


// 🔍 Example:
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`); // Handle 404/500 manually
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("Caught error:", error));
