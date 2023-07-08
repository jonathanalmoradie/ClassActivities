/* eslint-disable prettier/prettier */

// add an event listener to the dog picture that listens for a "click" and gives an alert
const barkAlert = () => {
  alert("bark!");
};
let dogPic = document.querySelector("#dog-picture");
dogPic.addEventListener("click", barkAlert);

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
let listItems = document.querySelectorAll("#class-schedule-list li");

listItems.forEach((item => {
    item.addEventListener(
      'mouseover',
      (event) => {
        event.target.style.backgroundColor = '#977482';
      }
    )
  })
)

listItems.forEach((item => {
    item.addEventListener(
      'mouseout',
      (event) => {
        event.target.style.backgroundColor = '#BC8DA0';
      }
    )
  })
)

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.body.addEventListener(
  "keydown",
  (event) => {
    console.log(event.key)
  }
)
