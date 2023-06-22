/* eslint-disable prettier/prettier */
// create a constant variable (const)

const blah = "blah";

// create a variable that can be reassigned (let)

let tacos = 23;

// create three variables and assign them values of different data types (=)

let string = "string";
let number = 1;
let boolean = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal

console.log(typeof boolean);

// change the value referenced by a variable (dynamic typing)

string = 2;

// print the type of the variable you just changed (typeof)

console.log(typeof string);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// ^ answer: variables containing 'name', 'language', 'time', and 'bool'
// What type of data needs to go in each variable?
// ^ answer: name = string, language = string, time = number, bool = boolean

const name = 'Jon';
let language = 'JavaScript';
let weeks = 2
let status = false

console.log("Hello, my name is " + name + ", and I am learning " + language + ". I have been practicing for only " +  weeks + " weeks, so my status as a master is: " + status + ".");
