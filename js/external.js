"use strict"
console.log("Hello from external js");

//Exercise 1:
//Use the alert function to show a message that says 'Welcome to my Website!'

//alert("Welcome to my Website");

//Exercise 2
//Use a prompt to ask for the user's favorite color. Use the user's response
// to alert a message that says that the color entered is your favorite color too.

//var favColor = prompt("What is your favorite color?");
//alert("Really, " + favColor + " is my favorite color too!");

//Exercise 3
//Complete exercise 3 from the previous lesson,
// but write your code in the external.js file instead of in the console.

// 1
// using only var, prompt, and alert
/*var daysRentedtlm = prompt("How many days would you like to rent The Little Mermaid?");
var daysRentedbb = prompt("How many days would you like to rent Brother Bear?");
var daysRentedherc = prompt("How many days would you like to rent Hercules?");

var totalDaysRented = (parseInt(daysRentedtlm) + parseInt(daysRentedbb) + parseInt(daysRentedherc));

alert("your total cost is " + (totalDaysRented  * 3).toFixed(2));*/

// using an array and while loop nested in for loop
/*var movies = ["The Little Mermaid", "Brother", "Hercules"];

for (var i = 0; i < movies.length; i++) {
    var askDaysRented = prompt("How many days would you like to rent " + movies[i]);
    var daysRented = parseInt(askDaysRented) + parseInt(askDaysRented) + parseInt(askDaysRented)
    if (askDaysRented === null) {
        break;
    }
    while (isNaN(askDaysRented) !== false || askDaysRented === "") {
        alert("Please enter a number")
        askDaysRented = prompt("How many days would you like to rent " + movies[i]);
    }

}
alert("your total cost is " + (daysRented * 3).toFixed(2));*/


//function for choosing a movie from an array
/*var movies = ["the little mermaid", "brother bear", "hercules", "captain marvel",
    "hitchhikers guide to theGalaxy", "the addams family"];
var askForMovie = prompt("what movie would you like to rent?");
var moviesRented = [];

function rentals(movies) {
    for (var i = 0; i < movies.length; i++) {
        while (askForMovie === movies[i] || askForMovie.toLowerCase() === movies[i]) {
            var verify = confirm("would you like to rent " + movies[i]);
            if (verify === false) {
                alert("have a nice day");
                break;
            } else if (verify === true) {
                moviesRented.push(movies[i]);
                var askForNextMovie = confirm("would you like to rent another movie?");
            }
            if (askForNextMovie === true) {
                askForMovie = prompt("what movie would you like to rent?");
            } else if (askForNextMovie === false) {
                return moviesRented;

            }

        }

    }
}

function verifyRentedMovies() {
    rentals(movies);
    var verifyMovies = confirm("Verify the movies you want to rent are: " + moviesRented.join(", "));
    if (verifyMovies === true) {
        return alert("you rented " + moviesRented.join(", "));
    }
}*/
//rentals(movies);
//verifyRentedMovies();

//2
/*var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleHours = prompt("Hours worked for google.");
while ((isNaN(googleHours) !== false)) {
    alert("Please enter a number");
    googleHours = prompt("Hours worked for google.");


}
var amazonHours = prompt("Hours Worked For Amazon.");
while ((isNaN(amazonHours) !== false)) {
    alert("Please enter a number");
    amazonHours = prompt("Hours Worked For Amazon.");
}
var facebookHours = prompt("Hours worked for Facebook.");
while ((isNaN(facebookHours) !== false)) {
    alert("Please enter a number");
    facebookHours = prompt("Hours worked for Facebook.");
}
if (googleHours === null || amazonHours === null || facebookHours === null) {
    alert("goodbye");
} else {
        var googleTotalPay = googlePay * parseInt(googleHours);
        var amazonTotalPay = amazonPay * parseInt(amazonHours);
        var facebookTotalPay = facebookPay * parseInt(facebookHours);
        var totalWeeklyPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
        alert("Your total pay is " + totalWeeklyPay);

}*/


