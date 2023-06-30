// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); // true
console.log("Hello, world" === "Hello, world"); //true

let x = false;
let y = x;
console.log(x === y); // true (both false)
x = !x; // x = true
console.log(x === y); // false x = true, y = false

console.log([1, 2, "c"] === [1, 2, "c"]); // false two separate objects
console.log({} === {}); // false two separate objects

y = { id: 1 };
x = y;
console.log(x === y); // true - both referencing the same object? or an object with the same contents?
y.id += 1;
console.log(x.id === y.id); // false? x = { id: 1 }, y = { id: 2 }...? nevermind. true because x is essentially a copy of y, so when y gets changed, so does x

