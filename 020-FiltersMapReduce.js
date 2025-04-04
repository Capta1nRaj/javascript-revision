console.clear();

//! 📌 This note is about **Filter, Map, and Reduce in JavaScript**

// These are **higher-order functions** used to **transform** or **filter** arrays in a clean and readable way.
// All three methods **do not mutate** the original array.


//^ 🔹 1️⃣ Filter: Returns a new array with elements that pass a condition (returns true)
/*
✅ Creates a **subset** of the original array.
✅ Does **not modify** original array.
✅ Returns a new array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ Filter even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// ✅ Filter odd numbers with block syntax
const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log("Odd Numbers:", oddNumbers);

// ✅ Same using forEach (less clean)
const oddNumbers2 = [];
numbers.forEach((number) => {
    if (number % 2 !== 0) {
        oddNumbers2.push(number);
    }
});
console.log("Odd Numbers with forEach:", oddNumbers2);


//^ 🔹 2️⃣ Filter on Array of Objects

const booksList = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937, edition: 2023, genre: "Fantasy" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", published: 1954, edition: 1999, genre: "Fantasy" },
    { title: "The Shining", author: "Stephen King", published: 1977, edition: 2004, genre: "Horror" },
    { title: "The Shining", author: "Stephen King", published: 1977, edition: 2008, genre: "Horror" },
    { title: "The Shining", author: "Stephen King", published: 1977, edition: 2010, genre: "Horror" },
    { title: "The Shining", author: "Stephen King", published: 1977, edition: 2015, genre: "Horror" },
];

// ✅ Filter Fiction Books
let fictionBooks = booksList.filter((book) => book.genre === "Fiction");

// ✅ Filter Horror books with edition > 2000
fictionBooks = booksList.filter((book) => {
    return book.genre === "Horror" && book.edition > 2000;
});
console.log("Filtered Horror Books after 2000:", fictionBooks);


//^ 🔹 3️⃣ Map: Creates a new array with the result of calling a function on every element
/*
✅ Transforms each element.
✅ Returns a new array.
✅ Original array remains unchanged.
*/

const addNumsUsingMap = numbers.map((number) => number + 1);
console.log("Map (+1):", addNumsUsingMap);


//^ 🔹 4️⃣ Chaining Map & Filter
/*
✅ Can chain multiple `.map()` and `.filter()` for complex transformations.
*/

const addNumsUsingMapMapFilter = numbers
    .map((number) => number + 1)     // [2,3,...,11]
    .map((number) => number * 2)     // [4,6,...,22]
    .filter((number) => number % 2 === 0);  // All even (still)
console.log("Map → Map → Filter:", addNumsUsingMapMapFilter);


//^ 🔹 5️⃣ Reduce: Reduces the array to a single value (sum, total, average, etc.)
/*
✅ Uses accumulator + current value.
✅ Requires initial value.
✅ Returns a single value.
*/

const addNumsUsingReduceFunction = numbers.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
console.log("Sum (Reduce - function):", addNumsUsingReduceFunction);

// ✅ Using Arrow Function
const addNumsUsingReduce = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum (Reduce - arrow):", addNumsUsingReduce);


//^ 🔹 6️⃣ Reduce on Array of Objects

const shoppingCart = [
    { name: "JS Course", price: 4999 },
    { name: "Python Course", price: 5999 },
    { name: "Java Course", price: 6999 },
    { name: "C++ Course", price: 7999 },
    { name: "C# Course", price: 8999 },
    { name: "C# Course", price: 8999 },
];

const totalPrice = shoppingCart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0);
console.log("Total Cart Price:", totalPrice);


//🔥 Key Takeaways:
/*
✅ `filter()` → Return items that pass a condition (true).
✅ `map()` → Return a new array by transforming each item.
✅ `reduce()` → Return a single value by accumulating results.
✅ All 3 methods are **non-mutating**.
✅ Combine these for **clean and functional code**.
*/