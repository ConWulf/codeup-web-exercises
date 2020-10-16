(function () {
    "use strict"
let halloween = "Trick or Treat";
    let halloweenArr =halloween.split(" ");
    halloweenArr.forEach(function(element, index) {
        console.log("[" + index + "] " + element);
    });


    //******** Math Methods **********//

    // Math.random()
    let randomNum = Math.random() * 2;
    console.log(randomNum);

    // Math.round()
    let index = Math.round(randomNum)
    console.log(Math.round(randomNum));
    let randomWord = halloweenArr[index]
    console.log("rounds up or down: " + index);
    console.log(randomWord);

    // Math.floor()
    index = Math.floor(randomNum)
    randomWord = halloweenArr[index]
    console.log("round down: " + index);
    console.log(randomWord);


    //Math.ceil()
    index = Math.ceil(randomNum);
    randomWord = halloweenArr[index]
    console.log("ronud up: " + index);
    console.log(randomWord);


    // add a constant to our random number
    // num between 74 and 186
    let numBetween = Math.ceil(Math.random() * 74) + 112
    //will never go below 112
    console.log("using 74 as base, add 112: " + numBetween);
    // flip numbers and get more exact result
    numBetween = Math.floor(Math.random() * 112) - 186
    console.log("using 112 as base, add 74: " + numBetween);
    console.log(numBetween);
    // 0.7 * 75 = 51.8
    // 51.8 + 112 = 163.8
    // random decimal
let randomDecimal = (Math.random() * .3) + .5;
    console.log(randomDecimal.toFixed(2));

    // Math.pow()
    // used to raise number to the power of another one
    let exponent = Math.pow(8, (1/3));
    console.log("cube root of 8: " + exponent);

    //using a for loop
    let base = 8
    let exp = 6
    let result = base;
    for (let i = 1; i < exp; i++) {
        result*=base
    }
    console.log(result);

    //Math.sqrt()




    // ***==constants==***

    //Math.E

    //Math.PI




    //pre-exercise warmup

    // function randomRange(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min
    // }

     function randomRange(num1, num2) {
         if (num1 > num2) {
        return Math.floor(Math.random() * (num1 - num2 + 1)) + num2
         }
         return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
    }

    console.log(randomRange(10, 5));

})();
