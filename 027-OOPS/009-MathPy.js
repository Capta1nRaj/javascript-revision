// 📌 JavaScript: Object.defineProperty() & Property Descriptors

console.clear();

const chai = {
    name: "Chai",
    price: 250,
    isAvailable: true,
};

// 🔸 Get all descriptors of a property (before changes)
console.log(Object.getOwnPropertyDescriptors(chai, "name"));

/*
🔹 Property Descriptors:
- writable: can be modified (default: true)
- enumerable: shows up in loops like for...in / Object.entries (default: true)
- configurable: can be deleted or changed later (default: true)
*/

// 🔹 Change `name` property to:
// - not writable
// - not enumerable
// - not configurable
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: false
});

// 🔸 Check descriptors after changes
console.log(Object.getOwnPropertyDescriptors(chai, "name"));

/*
📌 Result:
- Now, `name` can't be changed, deleted, or listed in loops
- But you can still read its value directly (chai.name)
*/

// 🔹 Try to loop over all properties
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`); // 👉 only "price" and "isAvailable" will be shown
    }
}