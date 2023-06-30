/* eslint-disable prettier/prettier */

// create an Array using an Array literal
const oceanFish = ['fish', 'crabs', 'octopus', 'whale']

// access the 1st item in the Array
const firstFish = oceanFish[0]

// access the last item in the Array
const lastFish = oceanFish[3]

// print the length of the Array
// console.log(oceanFish.length);

// use the length property to access the last item in the Array
const lastIndex = oceanFish.length - 1;
const lastFishAgain = oceanFish[lastIndex];

// with for...of, loop over the Array, modify the value and add to a different Array
const goodMexicanFood = [];

oceanFish[4] = 'jellyfish'

for (let seafood of oceanFish) {
  if (seafood !== 'fish') {
    goodMexicanFood.push(seafood)
  }
}
console.log(goodMexicanFood)
