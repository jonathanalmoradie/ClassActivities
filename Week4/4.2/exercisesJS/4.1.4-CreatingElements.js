/* eslint-disable prettier/prettier */

// create a new unordered list (ul) element
let newUl = document.createElement("ul");


// remove the paragraph element in the nav-bar
let pToRemove = document.querySelector(".nav-bar > p");
pToRemove.remove();

// add your new ul element to the nav-bar
let addNewUl = document.querySelector(".nav-bar");
addNewUl.appendChild(newUl);

// create two new list item (li) elements, and add some text to them
let newLi1 = document.createElement('li');
let newLi2 = document.createElement('li');
newLi1.textContent = "I'm a new li"
newLi2.textContent = "I'm a new li too!"

// add the li elements to the ul in the nav-bar
newUl.appendChild(newLi1);
newUl.appendChild(newLi2);
