/* eslint-disable prettier/prettier */

// select all unordered list (ul) elements
console.log(document.querySelectorAll('ul'));
// select all elements with the class "class-week"
console.log("Class Week: ", document.querySelectorAll('.class-week'));
// select all elements with the class "nav-bar"
console.log(document.getElementsByClassName('nav-bar'));
// select the element with the id "dog-picture" and save it to a variable
let dogPicture = document.querySelector('#dog-picture');
console.log("dogPicture: ", dogPicture)
