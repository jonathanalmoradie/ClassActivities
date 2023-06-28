// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet);
// "Please enter your name: "
// Jon
// "Hello, Jon"

getNameAndShowMessage(welcome);
// "Please enter your name: "
// Jon
// "Jon, welcome"

getNameAndShowMessage(informAboutSale);
// "Please enter your name: "
// Jon
// "Jon, we're having a sale!"
