// Declare a constant variable (cannot be reassigned)
const name = "John";

// Declare a variable using let (can be reassigned)
let age = 20;

// Declare a variable using var (can be reassigned)
var city = "New York";

// Difference between var and let
// var is function-scoped, while let is block-scoped
function test() {
    var a = 10; // Function scope
    let b = 20; // Block scope

    console.log(a); // 10
    console.log(b); // 20

    {
        var x = 50; // Function scope (accessible outside this block)
        let y = 100; // Block scope (not accessible outside this block)

        console.log(x); // 50
        console.log(y); // 100
    }

    try {
        console.log(x); // 50 (var is function-scoped, so it's accessible here)
        console.log(y); // ReferenceError (let is block-scoped, so it's not accessible)
    } catch (error) {
        console.log("Can't print the value of y."); // ReferenceError: y is not defined
    }
}

test();

// Declare a variable without initializing it
let w;
console.log(w); // undefined

// Declare a variable without var, let, or const (not recommended, becomes global)
noName = "John";
console.log(noName); // John