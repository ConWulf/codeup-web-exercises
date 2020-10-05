
//this works the same as th do/while;
// var oddNumber = prompt("enter an odd number between 1 and 50");
// while(oddNumber % 2 === 0 || isNaN(oddNumber)) {
//     if (typeof oddNumber === "object") {
//         break;
//     }
//      oddNumber = prompt("enter an odd number between 1 and 50");
//
// }

// do {
//     var oddNumber = prompt("enter an odd number between 1 and 50");
//     if (typeof oddNumber === "object") {
//         break;
//     } else if (oddNumber > 50 || oddNumber < 1) {
//         alert("that is not a valid input.");
//     } else if ( oddNumber % 2 === 0 || isNaN(oddNumber)){
//         alert("that is not an odd number.")
//     } else {
//         alert("that is an odd number.")
//         break;
//     }
//
//
// }while(true)

// do {
//     if (typeof oddNumber === "object") {
//         break;
//     }
//    var oddNumber = prompt("enter an odd number between 1 and 50");
//
// }while(oddNumber % 2 === 0 || isNaN(oddNumber))

console.log("the number to skip is: " + oddNumber);
for (var i = 1; i < 50; i++) {
    if (i === parseFloat(oddNumber)) {
        console.log("Skipping: " + i);
        continue;
    }
    if (i % 2 !== 0) {
        console.log("here is an odd number: " + i);
    }
}

