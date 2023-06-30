/* eslint-disable prettier/prettier */

const { test } = require("node:test");

// Function Activity 1
// ---
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

const testAverage = (...scores) => {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length
}

// Invoke testAverage with the following parameters: 92, 71, 85, 83
let avgScore = testAverage(92, 71, 85, 83);

// Function Activity 2
// ---
// NOTE: This function really just contains conditionals. The real purpose of Activity 2 is to practice using the returned value of a function as the argument to another function

// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true

const gradeAverage = (grade) => {
  if (grade >= 90) {
    console.log('Your grade is an A, great job!')
    return false
  } else if (grade >= 80 && grade < 90) {
    console.log("Your grade is B, nice job!")
    return false
  } else if (grade >= 70) {
    console.log("Your grade is a C, extra studying required")
    return true
  } else {
    console.log("Uh oh")
    return true
  }
}

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
// NOTE: There are a couple of ways to do this. You could invoke testAverage() inside the argument of gradeCheck:

gradeAverage(avgScore) // Your grade is B, nice job!

// Or you could create a variable and assign it to the returned value of testAverage()

// Now invoke gradeCheck, but pass in testAverage as an argument that has different parameters

gradeAverage(testAverage(60, 65, 53, 79)); // Uh oh
