console.clear();

// ✅ Defining Getters and Setters Using Object.defineProperty()

// 🔹 Approach 1: Using Object Literal
const user = {
    email: "john@example.com",
    password: "123456",
};

// 🧠 We override the default behavior of `email` and `password`
// and attach custom getter and setter using Object.defineProperty

Object.defineProperty(user, "email", {
    get: function () {
        return this._email.toUpperCase(); // return capitalized email
    },
    set: function (value) {
        this._email = value; // store in a private-like _email variable
    }
});

Object.defineProperty(user, "password", {
    get: function () {
        return this._password.toUpperCase(); // return capitalized password
    },
    set: function (value) {
        this._password = value;
    }
});

// 🔸 Example Usage - Object Literal
console.log("🔹 Example 1 - Object Literal:");
user.email = "alice@example.com";
user.password = "secure123";

console.log("Email:", user.email);       // 👉 ALICE@EXAMPLE.COM
console.log("Password:", user.password); // 👉 SECURE123

// 🔄 Changing values
user.email = "alice.new@example.com";
user.password = "newSecure456";

console.log("\n📌 After Changing Values:");
console.log("Email:", user.email);       // 👉 ALICE.NEW@EXAMPLE.COM
console.log("Password:", user.password); // 👉 NEWSECURE456

// --------------------------------------------------------------

// 🔹 Approach 2: Using Constructor Function
function User(email, password) {
    this._email = email;
    this._password = password;

    // 📦 Define custom getter & setter for email
    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    // 🔒 Define custom getter & setter for password
    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

// 🔸 Example Usage - Constructor Function
console.log("\n🔹 Example 2 - Constructor Function:");
const user2 = new User("bob@example.com", "password123");

console.log("Initial values:");
console.log("Email:", user2.email);       // 👉 BOB@EXAMPLE.COM
console.log("Password:", user2.password); // 👉 PASSWORD123

// 🔄 Changing values
user2.email = "bob.new@example.com";
user2.password = "newPassword456";

console.log("\n📌 After Changing Values:");
console.log("Email:", user2.email);       // 👉 BOB.NEW@EXAMPLE.COM
console.log("Password:", user2.password); // 👉 NEWPASSWORD456