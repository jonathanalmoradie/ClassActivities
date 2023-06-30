/* eslint-disable prettier/prettier */
// Object Activity 1
// ---
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};

// Print a string that references weather, temp and sky
console.log(`Currently, it is ${currentWeather.temp} degrees, ${currentWeather.sky}, with a chance of ${currentWeather.weather}.`)

// Create a variable called weatherDetails and assign it to the string below
let weatherDetails = "These are the weather details: "

// Using a for...of loop, iterate through the array stored in "details". Each iteration of the loop should concatenate the value of the item AND a blank space to the end of the "weatherDetails" string.
for (let detail of currentWeather.details) {
  weatherDetails += `${detail} `;
}

// After the for...of loop, print out "weatherDetails"
console.log(weatherDetails);

// The exact output for this should be as shown bellow
// These are the weather details: Moderate Rain 45 Not Severe

// Accessing the details key, Print another string that references each of the properties contained within details
console.log(`Tomorrow, we're looking at a high of ${currentWeather.details[1]} degrees, with ${currentWeather.details[0]}, but ${currentWeather.details[2]}`)

// Object Activity 2
// ---
// Create an object called 'movie' that has 3 properties
// These keys will be "title", "genre", "yearReleased"
// Each key should have a relevant value
const movie = {
  title: 'Encanto',
  genre: "Children's movie",
  yearReleased: 2020
}
// Iterate over the movie object to print the key AND value of each property
for (let key in movie) {
  console.log(`${key}: ${movie[key]}`)
}
