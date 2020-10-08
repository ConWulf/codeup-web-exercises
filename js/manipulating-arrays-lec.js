// TODO EXERCISE: create a function that takes in an array of pies baked and return the 3 most recently
//  baked pies (the three at the end)

// var pies = ["apple", "cherry","key lime", "huckleberry", "rhubarb", "key lime"];
// var pies = ["apple", "cherry","key lime", "huckleberry", "rhubarb", "Pecan", "key lime", "Pumpkin"];
var pies = ["apple", "cherry","key lime","pecan", "huckleberry", "rhubarb", "key lime", "pumpkin"];

// function bakedPies(arr) {
//     return pies.slice(arr.length -3)
// }
//
// console.log(bakedPies(pies));

// pies.sort();
// console.log(pies);

var names = pies.join(", ");
console.log(names);
console.log(pies);

// returns a mutated array:
// -pop
// -unshift
// -shift
// -push
// -reverse
// -splice

// does not return a mutated array

// -slice
// -indexOd
// -lastIndexOf

// returns a copy of the data
// -split
// -join
// -slice
// -splice

// sort returns a copy and mutates the array

// mdn sort numbers function

// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
// cleanPhoneNumbers(phoneNumbers);
// the above code should output the following...
// 2105552020
// 2305552020
// 5125553030

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// function cleanPhoneNumbers(phoneNums) {
//     var output = [];
// // split input into array of characters
//   var phoneNumsArr =  phoneNumbers.split("\n");
// // create output array of nums
//     phoneNumsArr.forEach(function (phoneNum) {
//         var phoneNumArr = phoneNum.split("-");
//         var phoneNumDashes = phoneNumArr.join("");
//         output.push(phoneNumDashes);
//     })
// //return nums
// return output
//
// }
//
// var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
//
// for (var i = 0; i < cleanNumsArr.length; i += 1) {
//     console.log(cleanNumsArr[i]);
// }

