"use strict";

console.log("hello from conditionals lec.js!");



// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over
// ================ IF STATEMENT SYNTAX ================
// if(condition){
// code here runs if condition evaluates to true
// }
// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin) {
//     //show admin navbar
// }
//TODO Together: Send a 20% off coupon if its users birthday

// if(userBDay) {
//     //send a Coupon
// }
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy) {
//     alert ("it's raining");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost =Math.floor(Math.random() * 100)
// var currentBalance = Math.floor(Math.random() * 100)
// var notEnoughMoney = itemCost > currentBalance
// if(notEnoughMoney) {
//     alert("you don't have enough money");
// } else {
//     alert("you have enough money.");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var lives = Math.floor(Math.random() * 10);
// if(lives !== 0) {
//     alert(lives + " lives left");
// } else {
//     alert("game over, man");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing"
// if(weather === "snowing") {
//     alert("it's snowing");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// function greaterThanTen() {
//     var number = Math.floor(Math.random() * 20);
//     if (number > 10) {
//         return "true, " + number + " is greater than 10";
//     } else {
//         return number + " is not greater than ten";
//     }
// }
// alert(greaterThanTen());
//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false
// if(isAdmin) {
//     //show the admin navbar
// } else {
//     //show a different navbar
// }
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRaining = true;
// if(isRaining) {
//     alert("It's raining");
// } else {
//     alert("have a nice day");
// }




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var lives = Math.floor(Math.random() * 5);
// if(lives !== 0) {
//  alert("next Level!");
// } else {
//     alert("game over, man");
// }
// console.log(lives);
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
// if(weather === "snowing") {
//     alert("it's snowing");
// } else {
//     alert("check back later");
// }
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var number = Math.floor(Math.random() * 5);
// if(number > 10) {
// alert("true");
// } else {
//     alert("the number is less than 10")
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// var lives = Math.floor(Math.random() * 5);
// function checkIfGameOver(num) {
//     if(lives !== 0) {
//         return "next Level!";
//     } else {
//         "game over, man";
//     }
// }
// alert(checkIfGameOver(lives));
//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.


//SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = confirm("are you older than 13?");
// if(age) {
//     alert("you may proceed");
// } else {
//     alert("you are not able to proceed");
// }



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "raining";
// if (weather === "raining") {
//     alert("it's raining");
// } else if(weather === "snowing") {
//     alert("it's snowing");
// } else {
//     alert("have a nice day");
// }

//TODO Together: refactor the above statement as a function


// function checkWeather(weather) {
//     if (weather === "raining") {
//         return "it's raining";
//     } else if(weather === "snowing") {
//         return "it's snowing";
//     } else {
//         return "have a nice day";
//     }
// }
//
// console.log(checkWeather("raining"));
// console.log(checkWeather("snowing"));
// console.log(checkWeather("sunny"));

// TODO Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);

// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLightInfo(lightColor) {
//     if (lightColor === "red") {
//         return "stop"
//     } else if (lightColor === "yellow") {
//         return "slow down, prepare to stop"
//     } else if (lightColor === "green") {
//         return "go"
//     } else {
//         return "that is not a usual traffic light color"
//     }
// }
//
// console.log(trafficLightInfo("red"));
// console.log(trafficLightInfo("yellow"));
// console.log(trafficLightInfo("green"));
// console.log(trafficLightInfo("purple"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var user = 15;
// var hasPermit = true
// var license = hasPermit && user >= 16
// if (user < 15) {
//     alert("you cannot get a permit");
// } else {
//     if (license) {
//         alert("you can get a license");
//     } else if (!license) {
//         alert("come back with a permit");
//     } else {
//         alert("contact support");
//     }
// }







// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

