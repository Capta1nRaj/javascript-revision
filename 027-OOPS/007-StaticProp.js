console.clear();

// 📌 Static Properties/Methods in JavaScript Classes

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    // 🔹 static method: belongs to class, not object instance
    static createId() {
        return `123`;
    }
}

const hitesh = new User("hitesh");
hitesh.logMe(); // 👉 Username is hitesh

// ❌ console.log(hitesh.createId()); 
// ❗ Error: hitesh.createId is not a function
// Because static methods are not available on instances

// ✅ Correct usage:
console.log(User.createId()); // 👉 123

// 🔹 Static methods are called using the class name directly

// ➕ Extending the class
class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const tom = new Teacher("tom", "tom@edu.com");
tom.logMe(); // 👉 Username is tom

// ❌ tom.createId(); // Error
// ✅ User.createId(); // OK
// ✅ Teacher.createId(); // Also OK if inherited

// 🔍 Static methods can be inherited too
console.log(Teacher.createId()); // 👉 123

/* 
🧠 Summary:

✅ static method = belongs to class, not instance.
✅ Use static when the method doesn't depend on instance values (like utility functions).
✅ Cannot call static methods using object instances.
✅ Static methods *can* be inherited by subclasses.
*/