// JavaScript String Properties and Methods

// 1. String Properties

// a. length
// Returns the number of characters in the string.
let exampleString = "Hello, World!";
console.log(exampleString.length); // Output: 13

// 2. String Methods

// a. charAt(index)
// Returns the character at the specified index.
console.log(exampleString.charAt(0)); // Output: 'H'

// b. charCodeAt(index)
// Returns the Unicode of the character at the specified index.
console.log(exampleString.charCodeAt(0)); // Output: 72

// c. concat(string2, string3, ..., stringN)
// Combines the text of two or more strings and returns a new string.
let greeting = "Hello";
let place = "World";
console.log(greeting.concat(", ", place, "!")); // Output: 'Hello, World!'

// d. includes(searchString, position)
// Checks if the string contains the specified substring.
console.log(exampleString.includes("World")); // Output: true

// e. indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of the specified value, or -1 if not found.
console.log(exampleString.indexOf("o")); // Output: 4

// f. lastIndexOf(searchValue, fromIndex)
// Returns the index of the last occurrence of the specified value, or -1 if not found.
console.log(exampleString.lastIndexOf("o")); // Output: 8

// g. localeCompare(compareString)
// Compares two strings in the current locale.
console.log("apple".localeCompare("banana")); // Output: -1

// h. match(regexp)
// Retrieves the result of matching a string against a regular expression.
console.log(exampleString.match(/[A-Z]/g)); // Output: ['H']

// i. normalize(form)
// Returns the Unicode Normalization Form of the string.
let accentedString = "\u1E9B";
console.log(accentedString.normalize("NFC")); // Output: 'ẛ'

// j. padEnd(targetLength, padString)
// Pads the current string with another string (repeated, if necessary) so that the resulting string reaches the given length.
let numberString = "5";
console.log(numberString.padEnd(3, "0")); // Output: '500'

// k. padStart(targetLength, padString)
// Pads the current string with another string (repeated, if necessary) so that the resulting string reaches the given length.
console.log(numberString.padStart(3, "0")); // Output: '005'

// l. repeat(count)
// Returns a new string with a specified number of copies of the string it was called on.
let repeatString = "abc";
console.log(repeatString.repeat(3)); // Output: 'abcabcabc'

// m. replace(searchValue, newValue)
// Replaces occurrences of a specified value with another value in a string.
let sentence = "Hello World";
console.log(sentence.replace("World", "JavaScript")); // Output: 'Hello JavaScript'

// n. search(regexp)
// Tests for a match between a regular expression and the string.
console.log(sentence.search("World")); // Output: 6

// o. slice(beginIndex, endIndex)
// Extracts a section of a string and returns it as a new string.
console.log(sentence.slice(0, 5)); // Output: 'Hello'

// p. split(separator, limit)
// Splits a string into an array of substrings based on a specified separator.
console.log(sentence.split(" ")); // Output: ['Hello', 'World']

// q. startsWith(searchString, position)
// Checks if the string starts with the specified substring.
console.log(sentence.startsWith("Hello")); // Output: true

// r. substring(indexStart, indexEnd)
// Extracts characters from a string between two indices.
console.log(sentence.substring(0, 5)); // Output: 'Hello'

// s. toLowerCase()
// Converts all characters in the string to lowercase.
console.log(sentence.toLowerCase()); // Output: 'hello world'

// t. toUpperCase()
// Converts all characters in the string to uppercase.
console.log(sentence.toUpperCase()); // Output: 'HELLO WORLD'

// u. trim()
// Removes whitespace from both ends of the string.
let paddedString = "   Hello World   ";
console.log(paddedString.trim()); // Output: 'Hello World'

// v. valueOf()
// Returns the primitive value of a String object.
let stringObject = new String("Hello");
console.log(stringObject.valueOf()); // Output: 'Hello'

// Summary:
// - **String Properties**: The most important property is `length`, which returns the number of characters in a string.
// - **String Methods**: JavaScript offers a variety of methods to manipulate strings, such as:
//   - `charAt()`, `charCodeAt()` for accessing specific characters or their Unicode values.
//   - `concat()`, `replace()`, and `split()` for combining, replacing, and splitting strings.
//   - `toUpperCase()`, `toLowerCase()` for case transformation.
//   - `startsWith()`, `includes()`, and `match()` for checking substrings and patterns.
//   - `slice()`, `substring()` for extracting parts of strings.
//   - `padStart()`, `padEnd()` for padding strings.
//   - `trim()` for removing leading and trailing spaces.
// These methods are commonly used to manipulate and analyze string data in JavaScript.