// Run this file using `node array_methods.js` or `nodemon array_methods.js` if nodemon package is installed
const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

/*** 
 * MAP:
 * Maps the function i.e. executes a function for all elements in the array
 *  ***/
// 1. Get an array of all names
allNames = characters.map((character) => character.name)
// console.log(allNames)

// 2. Get an array of all heights
allHeights = characters.map((character) => character.height)
// console.log(allHeights)

// 3. Get an array of objects with just name and height properties
allNamesAndHeights = characters.map((character) => ({name: character.name, height: character.height}))
// console.log(allNamesAndHeights)

// 4. Get an array of all first names
allFirstNames = characters.map((character) => character.name.split(" ")[0])
// console.log(allFirstNames)

/*** 
 * REDUCE:
 * Aggregates the elements in array to return a single output
 *  ***/
// 1. Get the total mass of all characters
totalMass = characters.reduce((acc, cur) => acc + Number(cur.mass), 0)
// console.log(totalMass)

// 2. Get the total height of all characters
totalHeight = characters.reduce((acc, cur) => acc + Number(cur.height), 0)
// console.log(totalHeight)

// 3. Get the total number of characters in all the character names
totalCharactersInNames = characters.reduce((acc, cur) => acc + cur.name.length, 0)
// console.log(totalCharactersInNames)

// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
totalCharactersByEyeColors = characters.reduce((acc, cur) => {
  let color = cur.eye_color
  if (acc[color]) {
    acc[color] += 1
  } else {
    acc[color] = 1
  }
  return acc
}, {})
// console.log(totalCharactersByEyeColors)

/*** 
 * FILTER:
 * filters elements from array based on the condition
 *  ***/
// 1. Get characters with mass greater than 100
massGT200 = characters.filter((character) => character.mass > 100)
// console.log(massGT200)

// 2. Get characters with height less than 200
heightLT200 = characters.filter((character) => character.height < 200)
// console.log(heightLT200)

// 3. Get all male characters
allMales = characters.filter((character) => character.gender === "male")
// console.log(allMales)

// 4. Get all female characters
allFemales = characters.filter((character) => character.gender === "female")
// console.log(allFemales)

/*** 
 * SORT
 * we need to return negative to sort in ascending
 *  ***/
// 1. Sort by name
byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1
  return 1
})
// console.log(byName)

// 2. Sort by mass
byMass = characters.sort((a, b) => a.mass - b.mass)
// console.log(byMass)

// 3. Sort by height
byHeight = characters.sort((a, b) => a.height - b.height)
// console.log(byHeight)

// 4. Sort by gender
byGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1
  return 1
})
// console.log(byGender)

/*** 
 * EVERY:
 * returns true if every element in array satisfy the condition
 *  ***/
// 1. Does every character have blue eyes?
hasBlueEyes = characters.every((character) => character.eye_color === "blue")
// console.log(hasBlueEyes)

// 2. Does every character have mass more than 40?
hasMassGT40 = characters.every((character) => character.mass > 40)
// console.log(hasMassGT40)

// 3. Is every character shorter than 200?
hasHeightLT200 = characters.every((character) => character.height < 200)
// console.log(hasHeightLT200)

// 4. Is every character male?
areMales = characters.every((character) => character.gender === "male")
// console.log(areMales)

/***
 * SOME:
 * returns true if atleast one element in array satisfy the condition
 *  ***/
// 1. Is there at least one male character?
oneMale = characters.some((character) => character.gender === "male")
// console.log(oneMale)

// 2. Is there at least one character with blue eyes?
oneBlueEyes = characters.some((character) => character.eye_color === "blue")
// console.log(oneBlueEyes)

// 3. Is there at least one character taller than 200?
oneHeightGT200 = characters.some((character) => character.height > 200)
// console.log(oneHeightGT200)

// 4. Is there at least one character that has mass less than 50?
oneMassLT50 = characters.some((character) => character.mass < 50)
// console.log(oneMassLT50)