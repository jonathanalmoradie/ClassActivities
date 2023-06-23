/* eslint-disable prettier/prettier */
// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "afternoon";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

let greeting = `Good ${timeOfDay}, sir.`;

// Print "greeting"

console.log(greeting)

// Create a new variable, but do not assign it a value

let anotherVariable;

// Print the new variable and its type
// What type should we expect?
// ^ undefined

console.log(anotherVariable, typeof anotherVariable);

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
// ^ null

anotherVariable = null;

// Print the variable and its type again
// What type should we expect?
// ^ object

console.log(anotherVariable, typeof anotherVariable);

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
// ^ ReferenceError

console.log(oldVariable);

// Print "greeting" again
// Will this line run?
// ^ no due to referenceError

console.log(greeting)
