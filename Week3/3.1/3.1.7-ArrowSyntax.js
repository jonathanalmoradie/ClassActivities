/* eslint-disable prettier/prettier */

// refactor the functions below into arrow syntax

// #1
// ---
// regular syntax:
// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }
// ---
// arrow syntax:
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
// ---


// #2
// ---
// regular syntax:
// function greet(name) {
//   return `Hello, ${name}`;
// }
// ---
// arrow syntax:
const greet = name => `Hello, ${name}`
// ---


// #3
// ---
// regular syntax:
// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };
// ---
// arrow syntax:
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
// ---


// #4
// ---
// regular syntax:
// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }
// ---
// arrow syntax:
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
}
// ---


// #5
// ---
// regular syntax:
// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }
// ---
// arrow syntax:
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// ---
