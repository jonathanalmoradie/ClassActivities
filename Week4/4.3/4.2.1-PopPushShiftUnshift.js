const nums = [6, 5, 2, 3, 4, 1, 0];
console.log("original nums: ", nums);

// remove each of the last two items with pop(), saving each item to a variable
let lastNumsItem0 = nums.pop();
console.log("first pop: ", lastNumsItem0);

let lastNumsItem1 = nums.pop();
console.log("second pop: ", lastNumsItem1);

console.log("popped nums: ", nums);

// remove each of the first two items with shift(), saving each item to a variable
let firstNumsItem6 = nums.shift();
console.log("first shift: ", firstNumsItem6);

let firstNumsItem5 = nums.shift();
console.log("second shift: ", firstNumsItem5);

console.log("shifted nums: ", nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(lastNumsItem0, lastNumsItem1);
nums.push(firstNumsItem5, firstNumsItem6);
console.log("reconstructed nums: ", nums);
