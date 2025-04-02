//^ Date Methods in JavaScript

console.clear();

//* Creating a Date Object
const date = new Date('2020-02-12T11:45:21.212Z');
console.log(date);
// Output: 2020-02-12T11:45:21.212Z (ISO format)

//* .toLocaleString()
// Converts the date to a readable format based on the user's locale.
console.log(date.toLocaleString());
// Example Output: "2/12/2020, 11:45:21 AM" (varies by locale)

//* .toLocaleDateString()
// Returns only the date portion in a localized format.
console.log(date.toLocaleDateString());
// Example Output: "2/12/2020"

//* .toLocaleDateString('en-IN')
// Converts the date to the Indian format (DD/MM/YYYY).
console.log(date.toLocaleDateString('en-IN'));
// Output: "12/02/2020"

//* .toLocaleTimeString()
// Returns only the time portion in a localized format.
console.log(date.toLocaleTimeString());
// Example Output: "11:45:21 AM"

//* .toISOString()
// Converts the date to an ISO 8601 string (UTC format).
console.log(date.toISOString());
// Output: "2020-02-12T11:45:21.212Z"

//* .toJSON()
// Similar to .toISOString(), converts date to JSON format.
console.log(date.toJSON());
// Output: "2020-02-12T11:45:21.212Z"

//* .toUTCString()
// Converts the date to a human-readable UTC string.
console.log(date.toUTCString());
// Output: "Wed, 12 Feb 2020 11:45:21 GMT"

//* .toDateString()
// Returns only the date portion in a readable format.
console.log(date.toDateString());
// Output: "Wed Feb 12 2020"

//* .toTimeString()
// Returns only the time portion in a readable format.
console.log(date.toTimeString());
// Output: "11:45:21 GMT"

//^ Getting Individual Date Components

//* .getTime()
// Returns the timestamp (milliseconds since 1970-01-01 UTC).
console.log(date.getTime());
// Output: 1581505521212

//* .getFullYear()
// Returns the 4-digit year.
console.log(date.getFullYear());
// Output: 2020

//* .getMonth()
// Returns the month (0-11, where 0 = January, 11 = December).
console.log(date.getMonth() + 1);
// Output: 2 (February)

//* .getDate()
// Returns the day of the month (1-31).
console.log(date.getDate());
// Output: 12

//* .getDay()
// Returns the day of the week (0-6, where 0 = Sunday, 6 = Saturday).
console.log(date.getDay());
// Output: 3 (Wednesday)

//* .getHours()
// Returns the hour (0-23).
console.log(date.getHours());
// Output: 11 (in UTC)

//* .getMinutes()
// Returns the minutes (0-59).
console.log(date.getMinutes());
// Output: 45

//* .getSeconds()
// Returns the seconds (0-59).
console.log(date.getSeconds());
// Output: 21

//* .getMilliseconds()
// Returns the milliseconds (0-999).
console.log(date.getMilliseconds());
// Output: 212

//* Formatting Date with Options
console.log(date.toLocaleDateString('en-IN', {
    day: '2-digit',
    year: '2-digit',
    month: '2-digit',
}));
// Output: "12/02/20" (DD/MM/YY format)

//^ Setting Individual Date Components

//* .setFullYear()
// Sets the full year of the date object.
date.setFullYear(2025);
console.log(date.getFullYear());
// Output: 2025

//* .setMonth()
// Sets the month (0-11).
date.setMonth(5); // June (0-based index)
console.log(date.getMonth() + 1);
// Output: 6

//* .setDate()
// Sets the day of the month (1-31).
date.setDate(25);
console.log(date.getDate());
// Output: 25

//* .setHours()
// Sets the hours (0-23).
date.setHours(18);
console.log(date.getHours());
// Output: 18

//* .setMinutes()
// Sets the minutes (0-59).
date.setMinutes(30);
console.log(date.getMinutes());
// Output: 30

//* .setSeconds()
// Sets the seconds (0-59).
date.setSeconds(45);
console.log(date.getSeconds());
// Output: 45

//* .setMilliseconds()
// Sets the milliseconds (0-999).
date.setMilliseconds(500);
console.log(date.getMilliseconds());
// Output: 500

//^ Additional Date Methods

//* .now()
// Returns the current timestamp in milliseconds.
console.log(Date.now());
// Output: Current timestamp in milliseconds

//* .parse()
// Parses a date string and returns the timestamp.
console.log(Date.parse('2025-06-15T12:00:00'));
// Output: 1750008000000 (milliseconds)

//* .UTC()
// Returns a timestamp in UTC format.
console.log(Date.UTC(2025, 5, 15));
// Output: 1750008000000 (milliseconds)

//* Checking if a year is a leap year
const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
console.log(isLeapYear(2024));
// Output: true