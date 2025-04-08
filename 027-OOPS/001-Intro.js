console.clear();

// 📌 JavaScript is a prototype-based, object-oriented language.

// 🔹 What is an Object?
// An object is a collection of properties (data) and methods (functions).
// 👉 Example: const obj = { name: "John", greet: function() { ... } };

// 🔹 Properties:
// Characteristics or values that define an object.
// 👉 Example: name, age, id

// 🔹 Methods:
// Functions associated with an object that define behavior.
// 👉 Example: greet(), login(), logout()

// 🔹 What is a Class?
// A class is a blueprint/template to create objects with similar properties and methods.

// 🔹 What is an Instance?
// An instance is a concrete object created from a class using `new`.

// ✅ 5 Ways to Work with OOP in JS:
// 1. Object Literals
// 2. Constructor Functions
// 3. Prototypes
// 4. ES6 Classes
// 5. Instances (`new`, `this`)


// 🔥 4 Pillars of OOP:

// 1️⃣ Inheritance:
// - A class can inherit properties and methods from another class.
// - Promotes code reusability.
// 👉 Example: class Student extends Person

// 2️⃣ Polymorphism:
// - Same function behaves differently based on context.
// - Achieved using method overriding in JS (no true overloading).
// 👉 Example: Parent and Child both have the same method name, but different logic

// 3️⃣ Encapsulation:
// - Binding data (properties) and methods together in a single unit (class).
// - Keeps data safe and organized.
// 👉 Use private fields (#name) or closures to implement it.

// 4️⃣ Abstraction:
// - Hides complex details and exposes only essentials.
// - Achieved via private fields/methods, or abstract base classes.
// 👉 Example: Only expose `startEngine()` to user, hide how the engine starts

// Example:
class Vehicle {
    #engineType = "petrol"; // private property

    start() {
        console.log("Engine started");
    }

    getEngineType() {
        return this.#engineType;
    }
}