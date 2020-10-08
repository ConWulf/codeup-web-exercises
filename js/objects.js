(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Connor",
        lastName: "Wulf",
    }

    console.log(person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "hello from " + person.firstName + " " + person.lastName;
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discount(shopperList) {
        var offer = .12;
        var before;
        var name;
        var after;
        var discount;
        shopperList.forEach(shopper => {
            console.log("===============================================");
            before = "amount before: " + shopper.amount + ",";
            name = "name: " + shopper.name + ",";
            if (shopper.amount > 200) {
                discount = "discount amount: " + (shopper.amount * offer) + ",";
                after = "amount after: " + (shopper.amount - (shopper.amount * offer))
                console.log(name + " "  + discount + " " + before + " " + after);
            } else {
                discount = "discount amount: " + 0 + ",";
                after = "amount after: " + (shopper.amount);
                console.log(name + " " + discount + " " + before + " " + after);
            }
        })
    }
    discount(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {
    //         title: "Hitchhikers Guide to the Galaxy",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "the Witcher",
    //         author: {
    //             firstName: "Andrzej",
    //             lastName: "Sapkowski"
    //         }
    //     },
    //     {
    //         title: "Marvel Champions",
    //         author: {
    //             firstName: "Mark",
    //             lastName: "Ramos"
    //         }
    //     },
    //     {
    //         title: "Frankenstein",
    //         author: {
    //             firstName: "Mary",
    //             lastName: "Shelly"
    //         }
    //     },
    //     {
    //         title: "Calvin and Hobbs",
    //         author: {
    //             firstName: "Bill",
    //             lastName: "Watterson"
    //         }
    //     }
    // ]
    // console.log(books);

    var books = [createBook("Calvin and Hobbes", "Bill", "Watterson"),
        createBook("Frankenstein", "Mary", "Shelly"),
            createBook("Marvels Champions", "Mark", ),
            createBook("Hitchhikers Guide to the Galaxy", "Douglas", "Adams"),
        createBook("the Witcher", "Andrzej", "Sapkowski")]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

            // books.forEach((book, index) => {
            //     console.log("***=======***");
            //     console.log("Book #" + index);
            //     console.log("Title: " + book.title);
            //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            // });

    books.forEach((book, index) => {
        console.log(showBookInfo(book, index));
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authFirstName, authLastName) {
        var book = new Object();
        book.title = title;
        book.author = new Object();
        book.author.firstName = authFirstName;
        book.author.lastName = authLastName;
        return book;
    }

    books.push(createBook("bookN", "AuthorFirstName", "AuthorLastName"));

    // console.log(books);

    // function createBook(title, authFirstName, authLastName) {
    //     return {
    //         title: title,
    //         author: {
    //             firstName: authFirstName,
    //             lastName: authLastName
    //         }
    //     };
    // }

    // console.log(createBook(books));

    function showBookInfo(bookInfo, index) {
        var output = ""
            output += "***=====***" + "\n";
            output += "Book #" + index + "\n";
            output += "Title: " + bookInfo.title + "\n";
            output += "Author: " + bookInfo.author.firstName + " " + bookInfo.author.lastName;
            return output;
    }



})();
