console.clear();

// 📌 JavaScript: Getter & Setter

// 🔹 What are Getters & Setters?
// - Getter: Used to access a property (like a function, but behaves like a variable).
// - Setter: Used to set/modify a property’s value with custom logic.

// 🔹 Why use them?
// ✅ Add validation or modify data when getting/setting values
// ✅ Hide internal implementation
// ✅ Provide controlled access to object properties

// 🔹 Example: Using get & set in a class
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;     // Triggers setter
        this.password = password; // Triggers setter
    }

    // Getter for email
    get email() {
        return this._email.toUpperCase(); // Returns email in UPPERCASE
    }

    // Setter for email
    set email(value) {
        this._email = value; // Stores email internally as _email
    }

    // Getter for password
    get password() {
        return this._password.toUpperCase(); // Example logic (not secure in real apps!)
    }

    // Setter for password
    set password(value) {
        this._password = value; // Stores password internally as _password
    }
}

const user = new User("John", "john@example.com", "john@123");

console.log(user.email); // 👉 "JOHN@EXAMPLE.COM"
// Internally: email → _email, password → _password