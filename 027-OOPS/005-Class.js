console.clear();

// 📌 JavaScript Classes vs Function Constructors

// 🔹 Using Class (ES6+)
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return this.username.toUpperCase();
    }
}

const user1 = new User("priyal", "priyal@google.com", "12345");
console.log(user1.encryptPassword());   // 👉 12345abc
console.log(user1.changeUsername());   // 👉 PRIYAL

// 🔹 Using Function Constructor (Older Way)
function UserFn(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding methods using prototype (to avoid recreating them per object)
UserFn.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

UserFn.prototype.changeUsername = function () {
    return this.username.toUpperCase();
};

const user2 = new UserFn("dev", "dev@google.com", "67890");
console.log(user2.encryptPassword());   // 👉 67890abc
console.log(user2.changeUsername());   // 👉 DEV

/* 
🧠 Key Differences:

✅ class (ES6):
- Cleaner syntax.
- Behind the scenes, still works like a function constructor.
- Methods are added to prototype automatically.

✅ function constructor:
- Manual method addition using prototype.
- More control, but verbose.

✅ In both, `new` keyword:
- Creates a new object
- Binds `this` to that object
- Returns the new object

*/