(function () {
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     } else if (color === "red") {
//         return "Strawberries are red";
//     } else if (color === "cyan") {
//         return "I don't know anything about cyan";
//     } else {
//         return "that is not one of the defined colors";
//     }
// }

    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("cyan"));
    // console.log(analyzeColor("orange"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log("color is: " + randomColor
// console.log(analyzeColor(randomColor));

    /**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
    // function analyzeColor(color) {
    //     switch(color) {
    //         case "blue":
    //             return "blue is the color of the sky";
    //         case "red":
    //             return "Strawberries are red";
    //         case "cyan":
    //             return "I don't know anything about cyan";
    //         default:
    //             return "that is not one of the defined colors";
    //     }
    // }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var askColor = prompt("please write a color.");
// alert(analyzeColor(askColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNum, total = 0) {
    var discountPrice;
    switch (luckyNum) {
        case 0:
            discountPrice = total;
            break;
        case 1:
            discountPrice = total - (total * 0.1);
            break;
        case 2:
            discountPrice = total - (total * 0.25);
            break;
        case 3:
            discountPrice = total - (total * 0.35);
            break;
        case 4:
            discountPrice = total - (total * 0.5);
            break;
        default:
            discountPrice = total - total;
    }
    return discountPrice;
}
    console.log(calculateTotal(2, 100));
    console.log(calculateTotal(4, 100));
    console.log(calculateTotal(1, 100));

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var bill = parseFloat(prompt("what is your bill?"));
var billAfterDiscount = (calculateTotal(luckyNumber, bill)).toFixed(2)
    if(isNaN(bill)) {
        alert("you did not enter a number.")
    }else {
        alert(" your lucky number is: " + luckyNumber);
        alert("your price before discount: $" + bill.toFixed(2));
        alert("your price after discount: $" + billAfterDiscount);
    }

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var askForNum = confirm("would you like to enter a number");
//     if (askForNum) {
//         var num = parseInt(prompt("what is your number"));
//     }
//     var negativeEven = (num % 2 === 0 && num < 0);
//     var negativeOdd = (num % 2 !== 0 && num < 0);
//     var positiveEven = (num % 2 === 0 && num > 0)
//     var positiveOdd = (num % 2 !== 0 && num > 0);
//     if (negativeEven) {
//         alert(num + "  is negative even");
//     } else if (negativeOdd){
//         alert(num + "  is negative odd");
//     } else if(positiveEven) {
//         alert(num + " is positive even");
//     } else if (positiveOdd) {
//         alert(num + " is positive odd");
//     } else {
//         alert("that is not a number");
//     }

    var askForNum = confirm("would you like to enter a number");
    function inputNumber() {
        var num = parseFloat(prompt("what is your number"));
           if (isNaN(num)) {
               num = "you did not enter a number";
           } else if (num % 2 === 0 && num < 0) {
            num = (num + "  is negative even and your number plus one hundred is " + (num + 100));
        } else if (num % 2 !== 0 && num < 0){
            num = (num + "  is negative odd and your number plus one hundred is " + (num + 100));
        } else if(num % 2 === 0 && num > 0) {
            num = (num + " is positive even and your number plus one hundred is " + (num + 100));
        } else  {
            num = (num + " is positive odd and your number plus one hundred is " + (num + 100));
        }
           return num;
    }
    if (askForNum) {
        alert(inputNumber());
    } else {
        alert("Goodbye");
    }

    var x = 2

})();