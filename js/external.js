(function(){
"use strict";
//console.log("Hello from external js");

//Exercise 1:
//Use the alert function to show a message that says 'Welcome to my Website!'

//alert("Welcome to my Website");

//Exercise 2
//Use a prompt to ask for the user's favorite color.
//Alert a message that says that the color entered is your favorite color too.

// var favColor = prompt("What is your favorite color?");
// alert("Really, " + favColor + " is my favorite color too!");

//Exercise 3
//Complete exercise 3 from the previous lesson,
// but write your code in the external.js file instead of in the console.

// 3-1
//You have rented some movies for your kids:
//The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't
//know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// using only var and prompt and alert

// var daysRentedtlm = parseInt(prompt("How many days would you like to rent The Little Mermaid?"));
// var daysRentedbb = parseInt(prompt("How many days would you like to rent Brother Bear?"));
// var daysRentedherc = parseInt(prompt("How many days would you like to rent Hercules?"));
//
// var totalDaysRented = (daysRentedtlm + daysRentedbb + daysRentedherc);
//
// alert("your total cost is $" + (totalDaysRented  * 3).toFixed(2));

// using an array and for loop

// var movies = ["The Little Mermaid", "Brother", "Hercules"];
// var days = []
// var startDays = 0
// for (var i = 0; i < movies.length; i++) {
//     var askDaysRented = prompt("How many days would you like to rent " + movies[i]);
//     while ((isNaN(askDaysRented) || askDaysRented === "")) {
//         alert("Please enter a number")
//         askDaysRented = prompt("How many days would you like to rent " + movies[i]);
//     }
//     while (askDaysRented === "0") {
//         alert("Please enter a number greater than 0");
//         askDaysRented = prompt("How many days would you like to rent " + movies[i]);
//     }
//     if (askDaysRented !== null) {
//         days.push(askDaysRented);
//     } else {
//         days.push(0)
//     }
// }
//         for (var j = 0; j < days.length; j++) {
//                 startDays += parseInt(days[j]);
//                 var totalCost = startDays;
//         }
//         alert("your total cost is " + (totalCost * 3).toFixed(2));

//function for choosing a movie from an array

// var moviesRented = [];
// function rentals() {
//     var movies = ["the little mermaid", "brother bear", "hercules", "captain marvel",
//         "hitchhikers guide to the Galaxy", "the addams family"];
//     var askForNextMovie;
//     var verify;
//     for (var i = 0; i < movies.length; i++) {
//              verify = confirm("would you like to rent " + movies[i]);
//         while (verify) {
//                 moviesRented.push(movies[i]);
//             if (movies[i] === movies[movies.length - 1]) {
//                 break;
//             } else {
//                  askForNextMovie = confirm("would you like to rent another movie?");
//             }
//
//                 if (askForNextMovie) {
//                     verify = confirm("would you like to rent " + movies[++i]);
//                 } else {
//                     return moviesRented
//                 }
//
//                 }
//
//         }
// }
// function verifyRentedMovies() {
//     rentals();
//     var verifyMovies = confirm("Verify the movies you want to rent are: " + moviesRented.join(", "));
//     var rentalDays;
//     var totalCost = 0;
//     if (!verifyMovies) {
//    alert ("goodbye");
//     } else {
//         for (var j = 0; j < moviesRented.length; j++) {
//             rentalDays = parseInt(prompt ("How many days would you like to rent " + moviesRented[j]));
//             while (isNaN(rentalDays) || rentalDays === "" || rentalDays === "0") {
//                 alert("please enter a number greater than 0");
//                 rentalDays = prompt ("How many days would you like to rent " + moviesRented[j]);
//             }
//             totalCost += rentalDays;
//         }
//         alert("your total cost is $" + (totalCost * 3).toFixed(2));
//     }
//
// }
//     verifyRentedMovies();

//3-2
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a
//different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you
//receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var googlePay = 400;
// var amazonPay = 380;
// var facebookPay = 350;
// var googleHours = prompt("Hours worked for google.");
// if (googleHours === null) {
//     alert("goodbye");
// } else {
//     var googleTotalPay = googlePay * parseInt(googleHours);
// }
// while (isNaN(googleHours)) {
//     alert("Please enter a number");
//     googleHours = prompt("Hours worked for google.");
//
//
// }
// var amazonHours = prompt("Hours Worked For Amazon.");
//     if (amazonHours === null) {
//         alert("goodbye");
//     } else {
//         var amazonTotalPay = amazonPay * parseInt(amazonHours);
//     }
// while (isNaN(amazonHours)) {
//     alert("Please enter a number");
//     amazonHours = prompt("Hours Worked For Amazon.");
// }
// var facebookHours = prompt("Hours worked for Facebook.");
// if (facebookHours === null) {
//     alert("goodbye");
// } else {
//     var facebookTotalPay = facebookPay * parseInt(facebookHours);
// }
// while (isNaN(facebookHours)) {
//     alert("Please enter a number");
//     facebookHours = prompt("Hours worked for Facebook.");
// }
//  if (googleHours !== null && amazonHours !== null && facebookHours !== null) {
//         var totalWeeklyPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
//         alert("Your total pay is " + totalWeeklyPay);
// }

// var faceBookHours = parseInt(prompt("how many hours did you work for Facebook?"));
// var gooleHours = parseInt(prompt("how many hours did you work for google?"));
// var amazonHours = parseInt(prompt("how many hours did you work for amazon?"));
// var faceBookPay = parseInt(prompt("What is your pay for Facebook?"));
// var googlePay = parseInt(prompt("What is your pay for google?"));
// var amazonPay = parseInt(prompt("What is your pay for Amazon?"));
//
// var  totalPay = ((faceBookHours * faceBookPay) + (gooleHours * googlePay) + (amazonHours * amazonPay)).toFixed(2);
// alert(totalPay);

//3-3
//A student can be enrolled in a class only if the class is not full
//and the class schedule does not conflict with her current schedule.

// var currentClassSize = Math.floor(Math.random() * 60);
// var maxClassSize = Math.floor(Math.random() * 40);
// var classFull = currentClassSize >= maxClassSize;
// var conflicts = Math.floor(Math.random() * 75);
// var noConflicts = conflicts % 2 === 0;
// var canEnroll = !classFull && noConflicts;
//
// if (canEnroll) {
//     alert("Congrats, you are enrolled");
// }  else if (classFull) {
//         alert("This class is full");
//     } else if (!noConflicts) {
//         alert("You have a conflicting class");
//     }

// var scheduleConflicts = confirm("Does this class conflict with a current one");
// var classFull = confirm("is this class full");
// var enrolled = !classFull && !scheduleConflicts
// if (enrolled) {
//     alert("congrats! you are enrolled");
// } else {
//     alert("you cannot enroll at this time");
// }

//3-4
//A product offer can be applied only if a person buys more than 2 items,
//and the offer has not expired. Premium members do not need to buy a specific amount of products.

// var itemsBought = Math.floor(Math.random() * 6) + 1;
// var didByTwo = itemsBought > 2
// var offerExpDate = Math.floor(Math.random() * 30) + 1;
// var today = Math.floor(Math.random() * 30) + 1;
// var offerExpired = today > offerExpDate;
// var randomMember = Math.floor(Math.random() * 101);
// var isPremiumMember = (randomMember % 2 !== 0);
// var signUp;
// var store;
// if (!offerExpired && didByTwo && !isPremiumMember) {
//     alert("you get 20% off");
//      signUp = confirm("Would you like to become a premium member?");
//      store = signUp;
//     if (!store) {
//         alert("Thank you for shopping");
//     } else if (store) {
//         confirm("you bought " + itemsBought + " items");
//     }
// } else if (!offerExpired && isPremiumMember) {
//     alert("you get 20% off");
//     confirm("you bought " + itemsBought + " items");
//     confirm("Thank you for your membership")
// } else {
//     alert("This offer has expired");
// }

// var itemsBought = parseInt(prompt("how many items would you like to buy? "));
// var offerIsExpired = confirm("is this offer expired?");
// var premiumMember = confirm("are you a premium member");
// var validOffer = (itemsBought > 2 && !premiumMember && !offerIsExpired );
// var premiumMemberOffer = (premiumMember && !offerIsExpired );
// if (validOffer || premiumMemberOffer) {
// alert("you get 20% off");
// } else {
//     alert("this offer is invalid")
// }
})();