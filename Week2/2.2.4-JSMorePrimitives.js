/* eslint-disable prettier/prettier */
// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let exString = 'hello';
let exNum = 12;
let bool = true;
let something;
let nothing = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof exString, typeof exNum, typeof bool, typeof something, typeof nothing);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

let str = `${exString}, I have ${exNum} questions.`
console.log(str)

// reassign the value of the variable that references "null"

nothing = 'something';

// print the value and its type

console.log(nothing, typeof nothing);

// print a variable that causes a ReferenceError

// console.log(anotherThing); moved down to last task

// alter the previous line to no longer cause a ReferenceError

let anotherThing = 'something else';
console.log(anotherThing)
