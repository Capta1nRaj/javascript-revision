# JavaScript Interview Answers

## 001 - Basic JavaScript Concepts

### 1. What is JavaScript? Explain its key characteristics.

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. Key characteristics include:

- Single-threaded and asynchronous
- Prototype-based object-oriented
- First-class functions
- Dynamic typing
- Event-driven
- Runs in browsers and on servers (Node.js)

### 2. What are the different JavaScript engines and where are they used?

- V8: Used in Chrome, Node.js, and Edge
- SpiderMonkey: Used in Firefox
- JavaScriptCore: Used in Safari
- Chakra: Previously used in Edge (now replaced by V8)

### 3. What is an Execution Context? Explain its types and phases.

An execution context is the environment where JavaScript code is evaluated and executed. There are two types:

1. Global Execution Context
2. Function Execution Context

Phases:

1. Creation Phase:
   - Creation of Variable Object (VO)
   - Creation of Scope Chain
   - Setting the value of 'this'
2. Execution Phase:
   - Variable assignment
   - Function execution
   - Code execution

## 002 - Data Types

### 1. What are the primitive data types in JavaScript?

JavaScript has 7 primitive data types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)
7. BigInt (ES2020)

### 2. What are reference types in JavaScript?

Reference types include:

1. Objects
2. Arrays
3. Functions
4. Dates
5. Regular Expressions

### 3. What is type coercion? Explain implicit and explicit conversion.

Type coercion is the automatic or manual conversion of values from one data type to another.

Implicit conversion (automatic):

```javascript
console.log(1 + '2'); // '12'
console.log(true + 1); // 2
```

Explicit conversion (manual):

```javascript
Number('123'); // 123
String(123); // '123'
Boolean(0); // false
```

## 003 - Comparison Operators

### 1. What is the difference between `==` and `===`?

- `==` (loose equality): Performs type coercion before comparison
- `===` (strict equality): No type coercion, compares both value and type

Examples:

```javascript
1 == '1' // true
1 === '1' // false
null == undefined // true
null === undefined // false
```

### 2. How does JavaScript compare different data types?

JavaScript follows these rules for comparison:

1. If both operands are objects, compare references
2. If one operand is a number, convert the other to number
3. If one operand is a string, convert the other to string
4. If one operand is boolean, convert to number
5. null and undefined are equal to each other

### 3. What are the special cases in comparison (NaN, null, undefined)?

```javascript
NaN === NaN // false
null == undefined // true
null === undefined // false
null == 0 // false
undefined == 0 // false
```

## 004 - Typeof Operator

### 1. What does the `typeof` operator return for different data types?

```javascript
typeof 'string' // 'string'
typeof 42 // 'number'
typeof true // 'boolean'
typeof undefined // 'undefined'
typeof null // 'object' (historical bug)
typeof {} // 'object'
typeof [] // 'object'
typeof function() {} // 'function'
typeof Symbol() // 'symbol'
typeof 42n // 'bigint'
```

### 2. What are the limitations of the `typeof` operator?

- Returns 'object' for null
- Returns 'object' for arrays
- Cannot distinguish between different object types
- Returns 'function' for both functions and classes

### 3. How can you perform type checking in JavaScript?

```javascript
// For arrays
Array.isArray([]) // true

// For null
value === null

// For objects
Object.prototype.toString.call(value) === '[object Object]'

// For custom types
value instanceof MyClass
```

## 005 - Memory Management

### 1. Explain the difference between stack and heap memory.

- Stack Memory:

  - Stores primitive values and references
  - Fixed size
  - Fast access
  - Last In First Out (LIFO)
  - Automatic memory management
- Heap Memory:

  - Stores objects and complex data
  - Dynamic size
  - Slower access
  - Manual memory management
  - Garbage collection

### 2. What are common causes of memory leaks in JavaScript?

1. Global variables
2. Forgotten timers or callbacks
3. Out of DOM references
4. Closures
5. Event listeners not removed
6. Circular references

### 3. How can you prevent memory leaks?

1. Use proper scoping
2. Clear timers and intervals
3. Remove event listeners
4. Nullify references
5. Use weak references (WeakMap, WeakSet)
6. Profile memory usage

## 006 - Strings

### 1. What are the different string manipulation methods in JavaScript?

Common string methods:

```javascript
'string'.length
'string'.charAt(0)
'string'.concat('another')
'string'.includes('str')
'string'.indexOf('str')
'string'.replace('old', 'new')
'string'.slice(0, 3)
'string'.split('')
'string'.toLowerCase()
'string'.toUpperCase()
'string'.trim()
```

### 2. How do you handle string operations like concatenation and interpolation?

```javascript
// Concatenation
const str = 'Hello' + ' ' + 'World';

// Template literals (ES6)
const name = 'World';
const str = `Hello ${name}`;

// String methods
const str = 'Hello'.concat(' ', 'World');
```

### 3. How do you work with Unicode in JavaScript?

```javascript
// Unicode escape sequences
'\u{1F600}' // 😀

// String methods
'😀'.codePointAt(0) // 128512
String.fromCodePoint(128512) // 😀

// Normalization
'café'.normalize('NFD') // 'cafe\u0301'
```

## 007 - Numbers

### 1. What are the different number methods available in JavaScript?

```javascript
// Number methods
Number.isInteger(42)
Number.isNaN(NaN)
Number.isFinite(42)
Number.parseFloat('42.5')
Number.parseInt('42', 10)

// Math methods
Math.abs(-42)
Math.ceil(42.1)
Math.floor(42.9)
Math.round(42.5)
Math.max(1, 2, 3)
Math.min(1, 2, 3)
Math.random()
```

### 2. How do you handle precision in JavaScript numbers?

```javascript
// Using toFixed
(0.1 + 0.2).toFixed(2) // '0.30'

// Using Math.round
Math.round((0.1 + 0.2) * 100) / 100 // 0.3

// Using BigInt for large integers
const bigInt = 9007199254740991n
```

### 3. What is BigInt and when should you use it?

BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.

```javascript
// Creating BigInt
const bigInt = 9007199254740991n
const bigIntFromString = BigInt('9007199254740991')

// Operations
bigInt + 1n
bigInt * 2n
bigInt / 3n

// When to use:
// - Working with large integers
// - Financial calculations
// - Cryptography
```

## 008 - Date and Time

### 1. How do you create and manipulate dates in JavaScript?

```javascript
// Creating dates
const now = new Date()
const specificDate = new Date('2023-01-01')
const timestamp = new Date(1672531200000)

// Manipulating dates
now.setFullYear(2024)
now.setMonth(0)
now.setDate(1)
now.setHours(0)
now.setMinutes(0)
now.setSeconds(0)

// Getting date components
now.getFullYear()
now.getMonth()
now.getDate()
now.getDay()
now.getHours()
now.getMinutes()
now.getSeconds()
```

### 2. How do you handle timezone conversions?

```javascript
// Using toLocaleString
now.toLocaleString('en-US', { timeZone: 'America/New_York' })

// Using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'long'
})
formatter.format(now)
```

### 3. What are the different date formatting methods?

```javascript
// Built-in methods
now.toString()
now.toDateString()
now.toTimeString()
now.toISOString()
now.toLocaleDateString()
now.toLocaleTimeString()

// Using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'long'
})
formatter.format(now)
```

## 009 - Arrays

### 1. What are the different array methods in JavaScript?

```javascript
// Mutating methods
array.push()
array.pop()
array.shift()
array.unshift()
array.splice()
array.sort()
array.reverse()

// Non-mutating methods
array.concat()
array.slice()
array.map()
array.filter()
array.reduce()
array.find()
array.includes()
array.indexOf()
array.join()
```

### 2. What is the difference between mutating and non-mutating array methods?

- Mutating methods modify the original array:

  ```javascript
  const arr = [1, 2, 3]
  arr.push(4) // arr is now [1, 2, 3, 4]
  ```
- Non-mutating methods return a new array:

  ```javascript
  const arr = [1, 2, 3]
  const newArr = arr.concat(4) // arr remains [1, 2, 3]
  ```

### 3. How do you perform common array operations?

```javascript
// Filtering
const evens = array.filter(x => x % 2 === 0)

// Mapping
const doubled = array.map(x => x * 2)

// Reducing
const sum = array.reduce((acc, x) => acc + x, 0)

// Finding
const firstEven = array.find(x => x % 2 === 0)

// Sorting
const sorted = array.sort((a, b) => a - b)

// Removing duplicates
const unique = [...new Set(array)]
```

## 010-012 - Objects

### 1. How do you create and access object properties?

```javascript
// Object creation
const obj = {
  property: 'value',
  method() {
    return this.property
  }
}

// Accessing properties
obj.property
obj['property']
obj.method()

// Adding properties
obj.newProperty = 'new value'
obj['newProperty'] = 'new value'
```

### 2. What are property descriptors in JavaScript?

Property descriptors define how a property behaves:

```javascript
const obj = {}
Object.defineProperty(obj, 'property', {
  value: 'value',
  writable: true,
  enumerable: true,
  configurable: true
})
```

### 3. What is prototypal inheritance?

Prototypal inheritance is a way to share properties and methods between objects:

```javascript
const parent = {
  property: 'value',
  method() {
    return this.property
  }
}

const child = Object.create(parent)
child.property = 'new value'
```

### 4. How do you implement encapsulation in JavaScript?

```javascript
// Using closures
function createCounter() {
  let count = 0
  return {
    increment() {
      count++
    },
    getCount() {
      return count
    }
  }
}

// Using classes
class Counter {
  #count = 0 // Private field

  increment() {
    this.#count++
  }

  getCount() {
    return this.#count
  }
}
```

## 013 - Functions

### 1. What are the different ways to define functions in JavaScript?

```javascript
// Function declaration
function add(a, b) {
  return a + b
}

// Function expression
const add = function(a, b) {
  return a + b
}

// Arrow function
const add = (a, b) => a + b

// Constructor function
function Person(name) {
  this.name = name
}

// Generator function
function* generator() {
  yield 1
  yield 2
}
```

### 2. What is the difference between function declarations and expressions?

- Function declarations are hoisted
- Function expressions are not hoisted
- Function declarations must have a name
- Function expressions can be anonymous

### 3. What are generator functions and when should you use them?

Generator functions return an iterator and can be paused and resumed:

```javascript
function* generator() {
  yield 1
  yield 2
  yield 3
}

const gen = generator()
gen.next() // { value: 1, done: false }
gen.next() // { value: 2, done: false }
gen.next() // { value: 3, done: false }
gen.next() // { value: undefined, done: true }
```

Use cases:

- Implementing iterators
- Handling asynchronous operations
- Creating infinite sequences
- Managing state

## 014 - Scopes

### 1. What are the different types of scope in JavaScript?

1. Global Scope
2. Function Scope
3. Block Scope (let, const)
4. Module Scope (ES6 modules)

### 2. What is the scope chain?

The scope chain is the hierarchy of scopes that JavaScript uses to resolve variables:

```javascript
const global = 'global'

function outer() {
  const outer = 'outer'
  
  function inner() {
    const inner = 'inner'
    console.log(inner, outer, global)
  }
  
  inner()
}
```

### 3. What is the Temporal Dead Zone?

The TDZ is the period between entering a scope and declaring a variable with let/const:

```javascript
console.log(x) // ReferenceError
let x = 1
```

## 015 - Arrow Functions

### 1. What is the syntax of arrow functions?

```javascript
// No parameters
() => {}

// Single parameter
x => x * 2

// Multiple parameters
(x, y) => x + y

// Block body
(x, y) => {
  const sum = x + y
  return sum
}
```

### 2. How does `this` binding work in arrow functions?

Arrow functions don't have their own `this` binding - they inherit it from the surrounding scope:

```javascript
const obj = {
  value: 42,
  method() {
    const arrow = () => console.log(this.value)
    arrow()
  }
}
```

### 3. What are the limitations of arrow functions?

- No `this` binding
- No `arguments` object
- Cannot be used as constructors
- Cannot use `yield` (not generator functions)
- Cannot be used as methods in objects

## 016 - IIFE

### 1. What is an IIFE and how do you write it?

An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined:

```javascript
(function() {
  // code
})()

// With arrow function
(() => {
  // code
})()
```

### 2. What are the benefits of using IIFE?

- Creates a private scope
- Avoids polluting global namespace
- Encapsulates code
- Can be used for module patterns

### 3. What are common patterns using IIFE?

```javascript
// Module pattern
const module = (function() {
  let private = 'private'
  
  return {
    public: 'public',
    getPrivate() {
      return private
    }
  }
})()

// Self-executing async function
(async function() {
  const data = await fetchData()
  console.log(data)
})()
```

## 017 - Execution Context

### 1. What are the different types of execution context?

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (rarely used)

### 2. What are the components of an execution context?

1. Variable Environment
2. Lexical Environment
3. This Binding
4. Outer Environment Reference

### 3. What happens during the creation and execution phases?

Creation Phase:

1. Create Variable Object
2. Create Scope Chain
3. Determine `this` value

Execution Phase:

1. Assign values to variables
2. Execute code
3. Handle function calls

## 018 - Control Flow

### 1. What are the different control structures in JavaScript?

```javascript
// if-else
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}

// switch
switch (value) {
  case 1:
    // code
    break
  default:
    // code
}

// for loop
for (let i = 0; i < 10; i++) {
  // code
}

// while loop
while (condition) {
  // code
}

// do-while loop
do {
  // code
} while (condition)
```

### 2. How do you handle errors in JavaScript?

```javascript
try {
  // code that might throw
} catch (error) {
  // handle error
} finally {
  // cleanup code
}

// Custom errors
class CustomError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CustomError'
  }
}
```

### 3. What are the different flow control statements?

```javascript
// break
for (let i = 0; i < 10; i++) {
  if (i === 5) break
}

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue
}

// return
function example() {
  return 'value'
}

// throw
if (error) throw new Error('message')
```

## 019 - Higher Level Control Flows

### 1. What are the different iteration methods in JavaScript?

```javascript
// for...of
for (const item of array) {
  // code
}

// for...in
for (const key in object) {
  // code
}

// Array methods
array.forEach(item => {
  // code
})

array.map(item => {
  // transform
  return newItem
})

array.filter(item => {
  // condition
  return true/false
})
```

### 2. How do you handle asynchronous control flow?

```javascript
// Callbacks
function asyncOperation(callback) {
  setTimeout(() => {
    callback('result')
  }, 1000)
}

// Promises
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result')
    }, 1000)
  })
}

// Async/Await
async function example() {
  const result = await asyncOperation()
  return result
}
```

### 3. What are generators and how do they work?

Generators are functions that can be paused and resumed:

```javascript
function* generator() {
  yield 1
  yield 2
  yield 3
}

const gen = generator()
gen.next() // { value: 1, done: false }
gen.next() // { value: 2, done: false }
gen.next() // { value: 3, done: false }
gen.next() // { value: undefined, done: true }
```

## 020 - Array Methods

### 1. What are the different array transformation methods?

```javascript
// map
const doubled = array.map(x => x * 2)

// filter
const evens = array.filter(x => x % 2 === 0)

// reduce
const sum = array.reduce((acc, x) => acc + x, 0)

// flat
const flattened = array.flat(2)

// flatMap
const result = array.flatMap(x => [x * 2])
```

### 2. How do you perform complex array operations?

```javascript
// Chaining methods
const result = array
  .filter(x => x > 0)
  .map(x => x * 2)
  .reduce((acc, x) => acc + x, 0)

// Finding elements
const found = array.find(x => x > 5)
const index = array.findIndex(x => x > 5)

// Checking conditions
const allPositive = array.every(x => x > 0)
const somePositive = array.some(x => x > 0)
```

### 3. What is the difference between map, filter, and reduce?

- map: Transforms each element
- filter: Selects elements based on condition
- reduce: Combines elements into a single value

## 021 - DOM Manipulation

### 1. How do you select and create DOM elements?

```javascript
// Selecting
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('div')

// Creating
document.createElement('div')
document.createTextNode('text')
```

### 2. What are the different ways to manipulate DOM content?

```javascript
// Content
element.textContent = 'text'
element.innerHTML = '<div>content</div>'

// Attributes
element.setAttribute('id', 'value')
element.getAttribute('id')

// Classes
element.classList.add('class')
element.classList.remove('class')
element.classList.toggle('class')

// Styles
element.style.color = 'red'
```

### 3. How do you optimize DOM manipulation?

1. Use document fragments
2. Batch DOM updates
3. Use efficient selectors
4. Cache DOM references
5. Use event delegation

## 022 - Projects

### 1. How do you structure a JavaScript project?

```
project/
├── src/
│   ├── components/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   └── index.js
├── tests/
├── public/
├── package.json
└── README.md
```

### 2. What are the different ways to manage dependencies?

1. npm/yarn
2. Module bundlers (webpack, rollup)
3. CDN
4. Local files

### 3. How do you implement state management in a project?

```javascript
// Using classes
class Store {
  constructor() {
    this.state = {}
    this.listeners = []
  }

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.notify()
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state))
  }
}

// Using React hooks
const [state, setState] = useState(initialState)
```

## 023 - Events

### 1. What are the different types of events in JavaScript?

1. Mouse Events (click, mouseover, etc.)
2. Keyboard Events (keydown, keyup)
3. Form Events (submit, change)
4. Window Events (load, resize)
5. Custom Events

### 2. How does event propagation work?

Event propagation has three phases:

1. Capturing Phase (top to target)
2. Target Phase
3. Bubbling Phase (target to top)

```javascript
element.addEventListener('click', handler, {
  capture: true, // or false for bubbling
  once: true,    // remove after first trigger
  passive: true  // for performance
})
```

### 3. What are event delegation and event batching?

Event delegation:

```javascript
parent.addEventListener('click', event => {
  if (event.target.matches('.child')) {
    // handle child click
  }
})
```

Event batching:

```javascript
// Using requestAnimationFrame
function batchUpdates() {
  requestAnimationFrame(() => {
    // batch DOM updates
  })
}
```

## 024 - Async Projects

### 1. What are the different patterns for handling asynchronous code?

```javascript
// Callbacks
function asyncOperation(callback) {
  setTimeout(() => {
    callback('result')
  }, 1000)
}

// Promises
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result')
    }, 1000)
  })
}

// Async/Await
async function example() {
  const result = await asyncOperation()
  return result
}

// Generators
function* generator() {
  const result = yield asyncOperation()
  return result
}
```

### 2. How do you handle API calls and file operations?

```javascript
// Fetch API
async function fetchData() {
  try {
    const response = await fetch('url')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// File operations
async function readFile(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsText(file)
  })
}
```

### 3. What are the best practices for async operations?

1. Use async/await for readability
2. Handle errors properly
3. Use Promise.all for parallel operations
4. Implement retry logic
5. Use timeouts
6. Cache results when appropriate

## 025 - XML and API Requests

### 1. What are the different ways to make API requests?

```javascript
// Fetch API
fetch('url')
  .then(response => response.json())
  .then(data => console.log(data))

// XMLHttpRequest
const xhr = new XMLHttpRequest()
xhr.open('GET', 'url')
xhr.onload = () => console.log(xhr.response)
xhr.send()

// Axios
axios.get('url')
  .then(response => console.log(response.data))
```

### 2. How do you handle different data formats (JSON, XML)?

```javascript
// JSON
const json = JSON.stringify(data)
const parsed = JSON.parse(json)

// XML
const parser = new DOMParser()
const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
```

### 3. How do you handle errors in API requests?

```javascript
// Fetch API
fetch('url')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .catch(error => console.error(error))

// Axios
axios.get('url')
  .catch(error => {
    if (error.response) {
      // Server responded with error
      console.error(error.response.data)
    } else if (error.request) {
      // Request made but no response
      console.error(error.request)
    } else {
      // Other errors
      console.error(error.message)
    }
  })
```

## 026 - Promises

### 1. What are the different states of a Promise?

1. Pending
2. Fulfilled
3. Rejected

### 2. How do you chain promises?

```javascript
promise
  .then(result => {
    // handle result
    return newResult
  })
  .then(newResult => {
    // handle new result
  })
  .catch(error => {
    // handle error
  })
  .finally(() => {
    // cleanup
  })
```

### 3. What are Promise.all, Promise.race, and Promise.allSettled?

```javascript
// Promise.all - all promises must resolve
Promise.all([promise1, promise2])
  .then(results => console.log(results))

// Promise.race - first promise to settle
Promise.race([promise1, promise2])
  .then(result => console.log(result))

// Promise.allSettled - all promises settle (resolve or reject)
Promise.allSettled([promise1, promise2])
  .then(results => console.log(results))
```

## 027 - OOP in JavaScript

### 1. How do you implement OOP concepts in JavaScript?

```javascript
// Classes
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a sound`)
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} barks`)
  }
}

// Encapsulation
class Counter {
  #count = 0

  increment() {
    this.#count++
  }

  getCount() {
    return this.#count
  }
}

// Polymorphism
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows`)
  }
}
```

### 2. What are the different design patterns in JavaScript?

```javascript
// Singleton
class Singleton {
  static instance

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this
  }
}

// Factory
class CarFactory {
  createCar(type) {
    switch (type) {
      case 'sedan':
        return new Sedan()
      case 'suv':
        return new SUV()
    }
  }
}

// Observer
class Observable {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}
```

### 3. How do you implement inheritance in JavaScript?

```javascript
// Using classes
class Parent {
  constructor(name) {
    this.name = name
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

// Using prototypes
function Parent(name) {
  this.name = name
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
```

## 028 - Lexical Scope and Closures

### 1. What is lexical scope?

Lexical scope is the scope defined by the physical placement of code:

```javascript
const global = 'global'

function outer() {
  const outer = 'outer'
  
  function inner() {
    const inner = 'inner'
    console.log(inner, outer, global) // inner can access all
  }
  
  inner()
}
```

### 2. What are closures and how do they work?

Closures are functions that remember their lexical scope:

```javascript
function createCounter() {
  let count = 0
  
  return function() {
    count++
    return count
  }
}

const counter = createCounter()
counter() // 1
counter() // 2
```

### 3. What are the practical applications of closures?

1. Data privacy
2. Function factories
3. Module patterns
4. Event handlers
5. Memoization

## Core JavaScript Questions

### 1. What are the differences between `const`, `let`, and `var`?

- `const`: Block-scoped, cannot be reassigned
- `let`: Block-scoped, can be reassigned
- `var`: Function-scoped, can be reassigned, hoisted

### 2. What is the difference between `slice` and `splice`?

- `slice`: Returns new array, doesn't modify original
- `splice`: Modifies original array, returns removed elements

### 3. What is an IIFE and why is it used?

An IIFE creates a private scope and runs immediately:

```javascript
(function() {
  // private code
})()
```

## Advanced Concepts

### 1. What happens when using the `new` keyword?

1. Creates new object
2. Sets prototype
3. Binds `this`
4. Returns object

### 2. What is the difference between `this` in browser and Node.js?

- Browser: `this` in global scope is `window`
- Node.js: `this` in global scope is `global`

### 3. What is `bind` and how does it work?

`bind` creates a new function with bound `this`:

```javascript
const bound = function.bind(thisArg, arg1, arg2)
```

## React and Frontend

### 1. How do you handle `this` binding in React?

```javascript
// In constructor
this.handleClick = this.handleClick.bind(this)

// Using arrow function
handleClick = () => {
  // code
}

// Using bind in render
<button onClick={this.handleClick.bind(this)}>

// Using arrow function in render
<button onClick={() => this.handleClick()}>
```

### 2. What are the different ways to manage state in React?

1. useState hook
2. useReducer hook
3. Context API
4. Redux
5. MobX

### 3. What are the best practices for handling events in React?

1. Use synthetic events
2. Avoid inline arrow functions in render
3. Use event delegation
4. Clean up event listeners
5. Use proper event naming

## Performance and Optimization

### 1. How do you optimize React applications?

1. Use React.memo
2. Use useMemo and useCallback
3. Implement code splitting
4. Optimize renders
5. Use production build

### 2. What are common memory leaks in JavaScript?

1. Forgotten timers
2. Event listeners
3. Closures
4. DOM references
5. Global variables

### 3. How do you handle asynchronous operations?

1. Use async/await
2. Implement proper error handling
3. Use loading states
4. Implement retry logic
5. Use timeouts

## Error Handling and Debugging

### 1. What are the different types of errors in JavaScript?

1. SyntaxError
2. ReferenceError
3. TypeError
4. RangeError
5. Custom errors

### 2. How do you handle errors in asynchronous code?

```javascript
try {
  const result = await asyncOperation()
} catch (error) {
  console.error(error)
}

// With promises
promise
  .then(result => {
    // handle result
  })
  .catch(error => {
    // handle error
  })
```

### 3. What are the best practices for debugging?

1. Use console methods
2. Use debugger statement
3. Use browser dev tools
4. Implement logging
5. Use error boundaries
