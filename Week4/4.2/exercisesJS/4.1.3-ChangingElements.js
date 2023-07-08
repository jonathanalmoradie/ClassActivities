// print the outer HTML of the navigation bar
let outerHTMLNav = document.querySelector(".nav-bar").outerHTML;
console.log(outerHTMLNav);
// print the inner HTML of the navigation bar
let innerHTMLNav = document.querySelector(".nav-bar").innerHTML;
console.log(innerHTMLNav);
// print the text content of the #class-schedule-list element
let classSchText = document.querySelector("#class-schedule-list").textContent;
console.log(classSchText);
// select the classList for the first class-week, then add the class "week-1"
let week1 = document.querySelector(".class-week:first-child");
week1.classList.add("week-1");
// select the img element and add a src attribute
document.querySelector("#dog-picture").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";
// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
