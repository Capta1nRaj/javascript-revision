console.clear();

//! 📌 This note is about **JavaScript Conditionals & Loops**

//^ 🔹 1️⃣ If-Else Statement

const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//^ 🔹 2️⃣ Nested If-Else

const marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//^ 🔹 3️⃣ Implicit Scope (One-line if)

const num = 5;
if (num > 0) console.log("Positive");

//^ 🔹 4️⃣ Switch Case

const day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}

//^ 🔹 5️⃣ Falsy vs Truthy Values

/*
Falsy:
- false, 0, -0, 0n, "", null, undefined, NaN, document.all

Truthy:
- true, {}, [], "0", "false", function(){}
*/

//^ 🔹 6️⃣ Nullish Coalescing Operator (??)

let data;
console.log(data ?? 10);       // 10
console.log(null ?? 10);       // 10
console.log(undefined ?? 10);  // 10
console.log(NaN ?? 10);        // NaN

//^ 🔹 7️⃣ Optional Chaining (?.)

const user = { name: "Alice", address: { city: "New York" } };
console.log(user.address?.city);      // "New York"
console.log(user.contact?.phone);     // undefined

//^ 🔹 8️⃣ Ternary Operator (Short If-Else)

const value = 10;
const result = value > 0 ? "Positive" : "Negative";
console.log(result);

//^ 🔹 9️⃣ Multiple Ternary Conditions

const temperature = 30;
const weather = temperature > 25 ? "Hot" : temperature > 15 ? "Warm" : "Cold";
console.log(weather);

//^ 🔹 🔟 === vs ==

console.log(5 == "5");  // true (loose)
console.log(5 === "5"); // false (strict)

//^ 🔹 1️⃣1️⃣ && (AND) and || (OR)

const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) console.log("Welcome, admin");
else console.log("Access denied");

const name = "";
console.log(name || "Guest"); // Guest

//^ 🔹 1️⃣2️⃣ 🔁 Loops: For, While, Do-While

// ✅ For Loop - Used when you know how many times to loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

// ✅ When to use `for` loop?
/*
- When the number of iterations is known.
- Best for iterating over arrays or collections.
- Example: Looping through an array.
*/

// ✅ Break in Loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log("Break at 5:", i);
}

// ✅ Continue in Loop
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Skipping 3:", i);
}

// ✅ While Loop - Used when you don’t know how many times to loop
let i = 1;
while (i <= 3) {
    console.log("While loop:", i);
    i++;
}

// ✅ When to use `while` loop?
/*
- When the number of iterations is **unknown**.
- Best for situations where looping continues until a condition is false.
- Example: Running a process until a user enters valid input.
*/

// ✅ Do-While Loop (Runs at least once)
let j = 1;
do {
    console.log("Do-While loop:", j);
    j++;
} while (j <= 3);

// ✅ When to use `do-while` loop?
/*
- When you need to **guarantee** at least one execution.
- Best when user input is required before checking a condition.
- Example: Asking for input until the user enters a valid number.
*/

//🔥 Key Takeaways:
/*
✅ Use if-else for basic condition checks.
✅ Switch is great for multiple fixed conditions.
✅ Use ?? for null/undefined fallback values.
✅ Optional chaining avoids runtime errors.
✅ Ternary is a short version of if-else.
✅ === is strict (value + type), == is loose.
✅ && and || simplify complex conditions.
✅ Use for/while loops for repetition.
✅ `for` → Best when you know the loop count.
✅ `while` → Best when condition is uncertain.
✅ `do-while` → Ensures at least **one execution**.
✅ Use break to stop loops, continue to skip current iteration.
*/