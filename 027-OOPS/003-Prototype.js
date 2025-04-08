console.clear();

// 📌 JavaScript Prototype, Inheritance & Custom Prototypes

const myName = "Priyal      ";
console.log(myName.trueLength); // 👉 custom method added to String

// 🔹 Custom Prototypes

const myHeros = ["thor", "spiderman"];

const heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// 🔹 Add custom method to all objects
Object.prototype.priyal = function () {
    console.log("Priyal is present in all objects");
};

// 🔹 Add custom method to all arrays
Array.prototype.heyPriyal = function () {
    console.log("Priyal is present in all arrays");
};

heroPower.priyal();     // ✅ Works because heroPower is an object
// heroPower.heyPriyal(); ❌ Error: heyPriyal is not in Object prototype

myHeros.heyPriyal();    // ✅ Works: myHeros is an array
myHeros.priyal();       // ✅ Also works: array inherits from Object

// 🔸 Prototype Chain
// If a property/method is not found on the object,
// JS looks up the prototype chain: Array → Object → null


// 🔹 What is Inheritance?

const User = {
    name: "Priyal",
    email: "priyal@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    // 🔸 Old way of setting prototype
    __proto__: TeachingSupport
};

// 🔸 Setting prototype manually
Teacher.__proto__ = User;  // Teacher now inherits from User

// 🔸 Modern way (recommended)
Object.setPrototypeOf(TASupport, TeachingSupport);


// 🔹 Custom String Method
String.prototype.trueLength = function () {
    console.log(`Original: "${this}" → ${this.length}`);
    console.log(`Trimmed : "${this.trim()}" → ${this.trim().length}`);
};

myName.trueLength();  // ✅ Shows actual length vs trimmed length


/* 
🧠 Summary:

✅ Object.prototype → base of everything in JS.
✅ Array inherits from Object, so it gets Object methods + Array methods.
✅ You can add your own methods to native types (not recommended in prod).
✅ `__proto__` → Old way to link objects.
✅ `Object.setPrototypeOf()` → Preferred for setting inheritance.
✅ Prototypes = blueprint used for inheritance & property lookup.
✅ JS uses prototype chain to resolve properties.

🚫 Don’t overwrite prototypes like Array.prototype = {} in real apps — can break built-in methods.
*/