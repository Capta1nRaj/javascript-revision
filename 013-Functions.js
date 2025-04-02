console.clear();

//! 📌 This note is about **Functions in JavaScript**  
// Functions are reusable blocks of code that perform specific tasks.

//^ 1️⃣ Function Declaration & Execution  

function printNameInSinglelineFoEachCharacter(name = "John") {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}

// This is a **function reference** (not a function call)
printNameInSinglelineFoEachCharacter;

// This is a **function call**
printNameInSinglelineFoEachCharacter();

//^ 2️⃣ Function Parameters vs. Arguments  

// Here, `a` and `b` are **parameters** (placeholders for values)
function add(a, b) {
    return a + b;
}

// Here, `1` and `2` are **arguments** (actual values passed to the function)
console.log(add(1, 2)); // Output: 3

//^ 3️⃣ Function Expression (Storing a function in a variable)  

const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(4, 5)); // Output: 20

//^ 4️⃣ Arrow Function (Shorter syntax for functions)  

const subtract = (x, y) => x - y;
console.log(subtract(10, 5)); // Output: 5

//^ 5️⃣ Rest Operator (`...`) - Collects multiple arguments into an array  

function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//^ 6️⃣ Spread Operator (`...`) - Expands an array into separate values  

const arr = [10, 20, 30];
console.log(Math.max(...arr)); // Output: 30

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // Combines both arrays
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//^ 7️⃣ Passing Objects as Function Parameters  

const user = {
    name: "John",
    age: 20,
    email: "john@gmail.com",
};

// Function accepting an object as a parameter
// Note: We need to check the type safety of the object in the function
function printUser(userObj) {
    console.log(`Name: ${userObj.name}, Age: ${userObj.age}, Email: ${userObj.email}`);
}

// There are two ways to pass the object to the function

// 1. Passing the object directly
printUser(user);

// 2. Passing the object as a parameter
printUser({ name: "Jane", age: 21, email: "jane@gmail.com" });

//🔥 **Key Takeaways**  
/*
✅ **Function Declaration** uses the `function` keyword.  
✅ **Function References** (without parentheses) can be used for event handlers, callbacks, etc.  
✅ **Calling a Function** executes its code (parentheses are required).  
✅ **Parameters vs. Arguments** → Parameters are placeholders, arguments are actual values.  
✅ **Function Expressions** store functions in variables.  
✅ **Arrow Functions** provide a shorter syntax for functions.  
✅ **Rest Operator (`...`)** collects multiple arguments into a single array.  
✅ **Spread Operator (`...`)** expands an array into individual values.  
*/