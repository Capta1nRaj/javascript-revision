console.clear();

//! 📌 This note is about **Loops & Iteration Methods in JavaScript**

// JavaScript provides multiple ways to iterate over data structures like **arrays, objects, maps, and sets**. 
// Choosing the right loop can **optimize performance** and **improve readability**.


//^ 🔹 1️⃣ For Loop (Traditional Loop)
/*
✅ Best for **index-based** iteration.
✅ Allows full control (e.g., skipping, breaking, modifying).
✅ Fastest loop for **large arrays**.
❌ Not ideal for objects (use `for-in`).
*/

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log("For loop:", numbers[i]);
}


//^ 🔹 2️⃣ For-Of Loop (Best for Arrays & Strings)
/*
✅ Best for **iterable objects** (arrays, strings, maps, sets).
✅ Simplifies value-based iteration.
❌ Not suitable for objects (use `for-in`).
❌ Can't modify array elements directly.
*/

const languages = ["JS", "Python", "Java"];

for (const lang of languages) {
    console.log("For-Of:", lang);
}

// ✅ For-Of with Strings
const name = "Alice";
for (const char of name) {
    console.log("Character:", char);
}

// ✅ For-Of with Maps
const userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 25);

for (const [key, value] of userMap) {
    console.log(`For-Of (Map): ${key} = ${value}`);
}


//^ 🔹 3️⃣ For-In Loop (Best for Objects)
/*
✅ Best for **objects** (loops through keys).
✅ Works on **enumerable properties**.
❌ Not suitable for arrays (use `for-of` instead).
❌ Object keys are unordered.
*/

const user = {
    name: "Alice",
    age: 30,
    country: "USA",
};

for (const key in user) {
    console.log(`For-In (Object): ${key} = ${user[key]}`);
}

// ❌ Bad Example: For-In on Arrays (Not Recommended)
const skills = ["HTML", "CSS", "JS"];
for (const index in skills) {
    console.log(`For-In (Array): ${index} = ${skills[index]}`);
}
// ⚠️ For-in is slower and treats indexes as object keys.


//^ 🔹 4️⃣ ForEach Loop (Best for Arrays)
/*
✅ Works only on **Arrays**.
✅ Directly accesses values, no need for indexes.
✅ Cannot be stopped using `break` or `continue`.
❌ Cannot return values (use `.map()` if needed).
*/

skills.forEach((skill) => {
    console.log("ForEach:", skill);
});

// ✅ ForEach with External Function
function printSkill(skill) {
    console.log("External Function:", skill);
}
skills.forEach(printSkill);

// ✅ ForEach with Index & Array
skills.forEach((skill, index, array) => {
    console.log(`ForEach: Index ${index} → ${skill} | Array:`, array);
});

// ✅ ForEach on Array of Objects
const frameworks = [
    { name: "React", type: "Frontend" },
    { name: "Node", type: "Backend" },
];

frameworks.forEach((fw) => {
    console.log(`ForEach (Objects): ${fw.name} - ${fw.type}`);
});


//^ 🔹 5️⃣ Maps (Looping through Key-Value Pairs)
/*
✅ `Map` maintains key order (Objects don't).
✅ Can use `for-of` or `.forEach()`.
*/

const countryMap = new Map();
countryMap.set("India", "New Delhi");
countryMap.set("USA", "Washington DC");

countryMap.forEach((capital, country) => {
    console.log(`ForEach (Map): ${country} → ${capital}`);
});


//^ 🔹 6️⃣ While & Do-While Loops
/*
✅ Best when the number of iterations is **unknown**.
✅ `while` checks condition before execution.
✅ `do-while` runs at least once.
*/

let count = 0;
while (count < 3) {
    console.log("While loop:", count);
    count++;
}

// ✅ Do-While: Runs at least once
let num = 5;
do {
    console.log("Do-While loop:", num);
    num--;
} while (num > 3);


//^ 🔹 7️⃣ Break & Continue in Loops
/*
✅ `break` → Stops the loop immediately.
✅ `continue` → Skips the current iteration.
*/

for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Stops when i = 3
    console.log("Break Example:", i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skips when i = 2
    console.log("Continue Example:", i);
}


//🔥 Key Takeaways:
/*
✅ `for` → Best for index-based iteration.
✅ `for-of` → Best for Arrays, Strings, Maps, and Sets.
✅ `for-in` → Best for **Objects**, but avoid on Arrays.
✅ `.forEach()` → Best for Arrays, cannot use `break/continue`.
✅ `Map` maintains order, objects don't.
✅ `while` → Use when iteration count is **unknown**.
✅ `do-while` → Ensures at least **one** execution.
✅ `break` & `continue` help **control loop flow**.
*/