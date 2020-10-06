"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = {
    color: "grey",
    model: "iphone",
    storage: "64gb",
    ring: function () {
        console.log("ring, ring");
    },
    picture: function () {
        console.log("click");
    }
};
//
// myPhone.picture();
// myPhone.ring();

// var myPhone = new Object();
// myPhone.color = "grey";
// myPhone.model = "iphone 11";
// myPhone.storage = "64gb";
// myPhone.ring =function () {
//     console.log("ring, ring");
// }
// console.log(myPhone);
/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

let myMac = {
    color: "grey",
    memory: "512gb",
    size: "13 inch",
}
// myMac.model = "MacBook Pro";
// myMac.year = "2020";
// console.log(myMac);
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */


/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */


/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Connor",
    lastName: "Wulf",
}
// console.log(myPhone.name.lastName);
//
// myPhone.apps = ["Slack", "Youtube", "Twitter"];
// console.log(myPhone);
//
// myPhone.apps.forEach(function (app) {
//     console.log(app);
// })

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["downloads", "documents", "applications", "resources", "creative cloud"];
// console.log(myMac.folders[3]);
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
    username: "fake username",
    fakePassword: "password",
    email: "gmail"
}
// console.log(myMac.login.username);

// console.log(myMac);
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

// myPhone.call = function () {
//     console.log("Dialing...");
// }
// myPhone.call();
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

// myMac.powerOn = function () {
//     console.log("Powering on");
// };

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

// myPhone.currentUser = function () {
//     console.log("Current user: " + this.name.firstName);
// }
//
// myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

// myMac.currentUser = function () {
//     console.log("username: " + this.login.username);
//     console.log("email: " + this.login.email);
// }
//
// myMac.currentUser()


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */


var chooseFighter = [{
    name: {
        firstName:"Spongebob",
        lastName:"Squarepants"
    },
    catchphrase: function () {
        return "I'm Ready"
    },
    abilities: ["Karate", "Bubble blowing"]
},{
    name: {
        firstName: "Patrick",
        lastName: "Star",
    },
    catchphrase: function () {
        return "No, this is Patrick"
    },
    abilities: ["belly flop", "belly bounce"]
},{
    name: {
        firstName:"Eugene",
          lastName: "Krabs"
    },
    catchphrase: function () {
        return "Money"
    },
    abilities: ["money", "money", "tiny violin"]
},{
    name: {
        firstName:"Squidward",
        lastName: "Tentacles"
    },
    catchphrase: function () {
        return "sad noise"
    },
    abilities: ["squilliam", "clarinet"]
}

];

chooseFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ": " + fighter.catchphrase());
    console.log("Their abilities: ");
    fighter.abilities.forEach(function (ability) {
        console.log(ability);
    })
    console.log("================");
})