//! 📌 JavaScript DOM Selection & Manipulation - Quick Notes

//^ 🔹 Basic DOM Access & Info
console.dir(document); // 👉 Logs the complete DOM tree (like devtools)

//^ 🔹 Get Element by ID
document.getElementById("title"); // 👉 Select element with given ID
document.getElementById("title").id; // 👉 Get the ID of element
document.getElementById("title").className; // 👉 Get the class name(s)
document.getElementById("title").innerText; // 👉 Only visible text
document.getElementById("title").textContent; // 👉 All text, even hidden
document.getElementById("title").innerHTML; // 👉 Returns HTML inside

//^ 🔹 Attribute Methods
document.getElementById("title").getAttribute("id"); // 👉 Get any attribute
document.getElementById("title").setAttribute("id", "newId"); // 👉 Set attribute
document.getElementById("title").removeAttribute("id"); // 👉 Remove attribute

//^ 🔹 Style Manipulation
const el = document.getElementById("title"); // 👉 Save element reference
el.style.color = "red"; // 👉 Text color
el.style.backgroundColor = "blue"; // 👉 Background color
el.style.border = "1px solid red"; // 👉 Full border
el.style.borderRadius = "10px"; // 👉 Rounded corners
el.style.padding = "10px"; // 👉 Padding
el.style.margin = "10px"; // 👉 Margin
el.style.width = "100px"; // 👉 Set width
el.style.height = "100px"; // 👉 Set height
el.style.display = "block"; // 👉 Display as block
el.style.visibility = "visible"; // 👉 Make visible
el.style.opacity = "0.5"; // 👉 Make half transparent
el.style.filter = "blur(5px)"; // 👉 Apply blur effect

//^ 🔹 Get Elements by Class
document.getElementsByClassName("title"); // 👉 Returns HTMLCollection
document.getElementsByClassName("title")[0].style.color = "blue"; // 👉 Access first and style

//^ 🔹 Query Selector (Flexible)
document.querySelector(".title"); // 👉 First match of class
document.querySelector("#title"); // 👉 First match of ID
document.querySelector("h1"); // 👉 First <h1> tag
document.querySelector("input[type='password']"); // 👉 Specific attribute selector
document.querySelector(".title").style.color = "green"; // 👉 Style directly

//^ 🔹 Query Selector All
const allTitles = document.querySelectorAll(".title"); // 👉 NodeList of all matches
allTitles[0].style.backgroundColor = "yellow"; // 👉 Style first element

//^ 🔹 Convert HTMLCollection to Array
const titleElements = document.getElementsByClassName("title"); // 👉 HTMLCollection
const titleArray = Array.from(titleElements); // 👉 Convert to array
titleArray.forEach((el) => {
    el.style.color = "white"; // 👉 Loop and style text color
    el.style.backgroundColor = "black"; // 👉 Loop and style background
});

//^ 🔹 Accessing Children
const parent = document.querySelector(".parent");
parent.children; // 👉 Returns all direct child elements (HTMLCollection)
parent.children[0]; // 👉 First child element
parent.children[1].innerText = "Updated Text"; // 👉 Modify second child
parent.firstElementChild; // 👉 First child element
parent.lastElementChild; // 👉 Last child element