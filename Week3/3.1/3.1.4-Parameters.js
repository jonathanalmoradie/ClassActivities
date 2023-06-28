// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
// IMPORTANT:
// Potential Solution 1
console.log(myFunction(5, 4)); // Note: We are printing the returned value only so we can confirm the value
// Potential Solution 2
let sumOf = myFunction(5, 4); // Note: We are assigning the returned value to the variable sumOf so we can print the value of sumOf
console.log(sumOf);

// invoke the function and pass in more than two numbers
let sumOfMoreTwoNumbers = myFunction(5, 4, 10, 20);
console.log(sumOfMoreTwoNumbers);

// invoke the function and pass in only one number
let oneNum = myFunction(10);
console.log(oneNum);

// change the function to set default values for the parameters
function myFunctionWithDefaultParam(param1, param2 = 4) {
  console.log(param1, param2);
  return param1 + param2;
}
// again, invoke the function and pass in only one number
let oneNumAgain = myFunctionWithDefaultParam(10);
console.log(oneNumAgain);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myFunctionRestParam(param1, ...param2) {
  console.log(param1);
  console.log(param2);

  return param1 + param2;
}

// again, invoke the function and pass in more than two numbers
let infiniteNums = myFunctionRestParam(1, 2, 3, 4, 5, 6, 7, 8);
console.log(infiniteNums);
