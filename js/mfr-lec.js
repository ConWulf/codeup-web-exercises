"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });
//
// console.log(newArray);


// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.
// let addOne = numbers.map(n => n + 1);
//
// console.log(addOne);

//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.
// let multiply = numbers.map(n => n * 3);
// console.log(multiply);


//Bonus: Refactor your functions using ES6


/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'
// let isTrue = binary.filter(num => num === 1);
// console.log(isTrue);
// TODO: filter through binary again and this time, return all the false values.
// let isFalse = binary.filter(num => num !== 1);
// console.log(isFalse);
//Bonus: Refactor your functions using ES6

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.
// let fruits = fruitsAndVeggies.filter(produce => produce.type === 'fruit')
// console.log(fruits);

// TODO: filter through the array of objects and return all vegetable type objects.
// let vegetables = fruitsAndVeggies.filter(produce => produce.type === 'vegetable')
// console.log(vegetables);
/*********************************************
 *              .reduce
 ******************************************** */

const numbersArray = [1, 2, 3, 4, 5];


//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.

// let sum = numbersArray.reduce( (currentSum, currentValue) => currentSum + currentValue, 0);
//
// console.log(sum);

// let multiply = numbersArray.reduce((currentProduct, currentValue) => {
//     console.log(currentProduct);
//     return currentProduct * currentValue
//     })
// console.log(multiply);
// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.

// let subtract = numbersArray.reduce((currentDifference, currentValue) => currentDifference - currentValue, 100)
// console.log(subtract);

const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
// let numOfApples = shoppingCarts.reduce((currentApple, currentValue) => currentApple + currentValue.apples, 0)
// console.log(numOfApples);
const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.
// let numOfColors = colors.reduce((colorCount, currentColor) => {
//     if (typeof colorCount[currentColor] === 'undefined') {
//         colorCount[currentColor] = 1;
//     } else {
//         colorCount[currentColor] += 1;
//     }
//     console.log(colorCount);
//     return colorCount;
// }, {})
//
// console.log(numOfColors.red);
// console.log(numOfColors);
const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.

let lyricString = lyrics.reduce((currentString, lyric) => `${currentString} ${lyric}`, "");
console.log(lyricString);

// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.



var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];


let uniqueFur = hamsters.reduce((furs, currentFur) => {
   currentFur.fur.forEach(fur => furSet.add(fur));
    // console.log(furs);
    return Array.from(furSet);
}, []);

console.log(uniqueFur);
console.log(furSet);
