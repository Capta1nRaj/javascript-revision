console.clear();

// 📌 JavaScript: Getter & Setter using Object Literal (with Class backing)
// 🚨 Rare Syntax: Using Object.create() with classes

// 🔹 Class with Getters and Setters
class User {
    _email = "john@example.com";
    _password = "John@123";

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

// ⚠️ Rare & Confusing Part
// `Object.create(User)` does NOT create an instance of the class.
// It creates an object with **User.prototype** as its prototype.
// So class fields (`_email`, `_password`) will NOT exist unless we define them on the object manually.

const tea = Object.create(User); // ❌ This does not run the constructor
tea.email = "tea@example.com";
tea.password = "123456";

const tea2 = Object.create(User); // ❌ Same issue here
tea2.email = "tea2@example.com";
tea2.password = "123456";

// 🔸 Output (will be undefined or errors unless you manually attach _email/_password)
console.log(tea.email);      // ⚠️ undefined or TEA@EXAMPLE.COM (if setter defined _email)
console.log(tea.password);   // ⚠️ undefined or 123456

console.log(tea2.email);     // ⚠️ same issue
console.log(tea2.password);

// ✅ ✅ Proper Way — Create instance using `new User()`
const properUser = new User();
properUser.email = "alice@example.com";
properUser.password = "secure@123";
console.log("\n✅ Proper User Instance:");
console.log(properUser.email);     // ALICE@EXAMPLE.COM
console.log(properUser.password);  // SECURE@123