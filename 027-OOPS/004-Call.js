console.clear();

// 📌 Understanding `call()` and `this` in constructor pattern

function setUserName(username) {
   this.username = username;
   console.log("called");
}

function createUser(username, email, password) {
   // 🔸 Use `call()` to invoke setUserName in the context of `this` (createUser)
   setUserName.call(this, username);

   // 🔸 Attach additional properties
   this.email = email;
   this.password = password;
}

const user = new createUser("Priyal", "priyal@gmail.com", "12345");
console.log(user);

/*
🧠 What’s Happening:

✅ `new createUser(...)`:
   - Creates a new empty object
   - Sets `this` to that object
   - Calls `createUser()` with that `this`

✅ Inside `createUser()`:
   - `setUserName.call(this, username)` calls `setUserName`
     and forces its `this` to point to the current object (created by `new`)

✅ So, both `username`, `email`, and `password` are assigned
   to the same object, and it’s returned automatically.

📌 Output:
called
createUser {
  username: 'Priyal',
  email: 'priyal@gmail.com',
  password: '12345'
}

🧩 `.call(this, ...)` is used to reuse code and manually bind `this`
*/