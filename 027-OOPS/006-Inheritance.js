console.clear();

// 📌 Inheritance in JavaScript (ES6 Classes)

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        // 🔹 Call parent (User) constructor
        super(username); // ✅ super is used instead of User.call(this, ...)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "12345");

chai.logMe();       // 👉 Username is chai
chai.addCourse();   // 👉 A new course was added by chai

// 🔍 instanceof checks
console.log(chai instanceof Teacher); // 👉 true
console.log(chai instanceof User);    // 👉 true
console.log(Teacher instanceof User); // 👉 false (Teacher is not an *instance*, it's a class)
console.log(User instanceof Teacher); // 👉 false

/*
🧠 Key Concepts:

✅ `class Teacher extends User`
   - Teacher inherits properties & methods from User

✅ `super()` in constructor
   - Calls the parent (User) constructor
   - Must be called before using `this` in child class

✅ `instanceof`
   - Checks if an object belongs to a class or its parent classes

*/