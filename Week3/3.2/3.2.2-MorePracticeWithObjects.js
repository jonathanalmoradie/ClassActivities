/* eslint-disable prettier/prettier */

// bracket and dot notation
const key = "1";


const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};
// sets up the "obj" object that we will be working with later in the exercise

// --- #1
// what will the following lines print?

obj[key]; // the key is 'key'
obj.key; // should print: the key is 'key', but doesn't print anything
obj["key"]; // the key is 1 - accessing the 'key' variable which is equal to 1, setting the "key" of the key/value pair to 1 --- similar to saying obj[1]
/*
  EDIT: did some testing --> each line prints the same: "the key is 'key'" && "the key is 1" -> not sure why

  even tested with obj['1'] and got the same result
*/

// --- #2
// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.

const person = {
  firstName: 'Jon',
  lastName: 'Almoradie',
  zipcode: 89801,
  collection: {
    faveHobby: 'gaming',
    faveGame: 'Overwatch'
  }
}
// created new object with 4 properties, one of them being 'collection', which holds an object as it's value

// --- #3
// Access a value in the "collection" property

console.log(person.collection.faveGame); // person -> (dot notation to access collection) .collection -> (dot notation to access faveGame key) .key

// --- #4
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
// each of the keys gets added to the "obj" object by the time we get here

// --- #5
// Add a method to an Object

obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
// does it for you ^ -> adds a method to the "obj" object

// --- #6
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Interstellar",
  number: 0,
  color: "Red"
};
// ^^ above adds another key - "favorites", whose value is an object itself
// filled in movie value and color value as per instructions

// --- #7
// Add a list (a.k.a array) to an Object

obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
// does it for you ^ -> adds a new key "list" with an array of values, another array, and an object within the array


// --- #8
// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print? ---> 5
/*
"obj" object should look like this currently:

const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
  method: () => {
    return "the key is 'method' and it calls refers to a function";
  },
  favorites: {
    movie: "Interstellar",
    number: 0,
    color: "Red"
  },
  list: ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }]
};

*/

// what do you expect to see on each line? -- 5 lines, each saying Key is "key", and Value is "value"

for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// should result in:
/*
Key is: key and Value is: undefined --> undefined because it's a console.log
Key is: 1 and Value is: undefined --> same as above
Key is: method and Value is: function() {
  return "the key is 'method' and it calls refers to a function";
}
Key is: favorites and Value is: [object Object] --> doesn't access key/value pairs in object
Key is: list and Value is: a,b,3,d,e,4,5,[object Object]
*/
// actually results in:
/*
Key is: 0 and value is: undefined
Key is: 1 and value is: undefined
Key is: 2 and value is: undefined
Key is: 3 and value is: undefined
Key is: 4 and value is: undefined
*/


// --- #9

// Use a template literal to print a sentence about your favorite things
// access the "favorites" object/array created in step #6
console.log(`My favorite movie is ${obj.favorites.movie} and my favorite color is ${obj.favorites.color}`)

// --- #10

// Access the values "b", 4, and 6 from obj.list
// referencing: obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

console.log(obj.list[1]) // 'b' - because it's in the '1' index
console.log(obj.list[4][1]) // 4 - because the array holding num 4 is in the '4' index, but num 4 itself is in the '1' index within the array
console.log(obj.list[5].f) // 6 - because the object is in the '5' index && using dot notation to access the 'f' key
