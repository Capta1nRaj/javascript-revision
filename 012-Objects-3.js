console.clear();

//! 📌 This note is about **Destructuring in JavaScript**
// Destructuring allows you to extract values from objects and arrays into variables easily.

//^ 1️⃣ Object Destructuring

const user = {
    userFullName: "John Doe",
    userEmail: "john@gmail.com",
    userAddress: {
        userCity: "New York",
        userState: "NY",
        userCountry: "USA",
    },
    userAge: 25,
    userIsAdmin: true,
};

// Extracting properties from an object
const { userFullName, userEmail, userAddress, userAge, userIsAdmin } = user;

console.log(userFullName, userEmail, userAddress, userAge, userIsAdmin);

//^ 2️⃣ Renaming Variables while Destructuring
// If the object keys have long names, we can rename them while destructuring.

const {
    userFullName: name,
    userEmail: email,
    userAddress: address,
    userAge: age,
    userIsAdmin: isAdmin
} = user;

console.log(name, email, address, age, isAdmin);

//^ 3️⃣ Nested Destructuring
// We can also destructure **nested objects**.

const {
    userAddress: { userCity: city, userState: state, userCountry: country }
} = user;

console.log(city, state, country); // Output: "New York", "NY", "USA"

//^ 4️⃣ Default Values in Destructuring
// If a property **does not exist**, we can set a **default value**.

const { userPhone = "Not Available" } = user;
console.log(userPhone); // Output: "Not Available"

//^ 5️⃣ Array Destructuring
// This is **less common** but can be useful for extracting values from arrays.

const numbers = [10, 20, 30, 40];

// Extracting values from an array
const [first, second, third, fourth] = numbers;
console.log(first, second, third, fourth); // Output: 10, 20, 30, 40

//^ 6️⃣ Skipping Elements in Array Destructuring
// We can skip elements using commas.

const [, , thirdNum] = numbers;
console.log(thirdNum); // Output: 30

//^ 7️⃣ Swapping Variables using Array Destructuring
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // Output: 10, 5

//🔥 **Key Takeaways**
/*
✅ **Object Destructuring** allows extracting multiple properties at once.
✅ **Renaming Properties** is useful when dealing with long property names.
✅ **Nested Destructuring** extracts properties from nested objects.
✅ **Default Values** prevent errors when a property is missing.
✅ **Array Destructuring** is rare but useful for simple data extraction.
✅ **Skipping Elements** helps when you need specific values only.
✅ **Swapping Variables** is a cool trick using destructuring.
*/