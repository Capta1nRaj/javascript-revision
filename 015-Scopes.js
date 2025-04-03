console.clear();

//! 📌 This note is about **Scope & Functions in JavaScript**  
// Scope defines where variables are accessible and how they behave in different parts of the code.

//^ 1️⃣ Global Scope  
// Variables declared outside any function or block are in the global scope.  

const x = 10;
let y = 20;
var z = 30;

console.table([x, y, z]);

//^ 2️⃣ Block Scope  
// `let` and `const` are block-scoped, meaning they are only accessible inside their block `{}`.
// `var` is **not block-scoped**, which can cause issues.  

{
    const x = 40;
    let y = 50;
    var z = 60; // This affects the global `z`

    // Reassigning `z` (without `var` keyword) modifies the global `z`
    z = 70;

    console.table([x, y, z]); // x=40, y=50, z=70 (local)
}

console.table([x, y, z]); // x=10, y=20, z=70 (global `z` was modified)

//^ 3️⃣ Nested Scope  
// Inner functions can access variables from outer functions, but not vice versa.

function one() {
    const name = "John";

    function two() {
        const age = 20;
        console.log(name, age); // ✅ Can access `name` from `one()`
    }

    // console.log(name, age); // ❌ Error: `age` is not accessible in `one()`

    two();
}

one();

//^ 4️⃣ Function Creation Methods  

// 1️⃣ **Function Declaration**  
// ✅ Can be used before the function definition (Hoisted)
function add(a, b) {
    return a + b;
}

// 2️⃣ **Function Expression**  
// ❌ Cannot be used before its definition (Not Hoisted)
const subtract = function (a, b) {
    return a - b;
};

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

//🔥 **Key Takeaways**  
/*
✅ **Global Scope:** Variables declared outside any function are accessible everywhere.  
✅ **Block Scope:** `let` and `const` are block-scoped; `var` is not.  
✅ **Nested Scope:** Inner functions can access outer function variables.  
✅ **Hoisting:** Function declarations are hoisted, but function expressions are not.  
*/