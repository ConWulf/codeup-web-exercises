(function () {
"use strict"

    //TODO: Write a script to generate and output the first 25 narcissistic integers.

// function narcissisticNum(num) {
// var digits = num + "";
// var nDigits = [];
// var ogNum = [];
// var start = 0;
//     for (let i = 0; i < digits.length; i++) {
//        nDigits.push(digits[i]);
//     }
//     for (let i = 0; i < nDigits.length; i++) {
//        ogNum. push(Math.pow(nDigits[i], digits.length));
//     }
//     for (let i = 0; i < ogNum.length; i++) {
//         start += ogNum[i];
//     }
//     return start;
// }
//
// function numberOutput() {
//     var m = 0;
//     for (let j = 0; j < 4679307776; j++) {
//         if (j === narcissisticNum(j)) {
//             m += 1
//             console.log("The narcissistic number at " + m + " is: " + j);
//             if (m === 34) {
//                 break;
//             }
//         }
//     }
// }
// numberOutput();


//     console.log(narcissisticNum(370));
// console.log(narcissisticNum(371));
// console.log(narcissisticNum(407));

    //TODO: Write a function that takes in a string variable and returns that string reversed.

function reverseString(string) {
    var strArr = [];
    for (let i = string.length; i >= 0; i--) {
        strArr.push(string[i])
    }
    return strArr.join("");
}

//     console.log("works for anything");
//     console.log(reverseString("works for anything"));

   //TODO: Create a function that will:
   //  -Accept any number as input.
   //  -Validate that input and convert it to an integer as necessary.
   //  -Return the sum of the individual digits of that integer.

    //does not work with parseFloat

    // function sumOfDigits(num) {
    //     var numStr = parseInt(num);
    //     var str = numStr.toString()
    //     var arr = [];
    //     var start = 0;
    //     if (isNaN(num)){
    //         return "you did not input a number.";
    //     }
    //     for (let i = 0; i < str.length; i++) {
    //         arr.push(str[i]);
    //     }
    //     for (let i = 0; i < arr.length; i++) {
    //             start += (arr[i] * 1);
    //     }
    //     return start;
    // }


    //works with parseFloat

    // function sumOfDigits(num) {
    //     var numStr = parseFloat(num);
    //     var str = numStr.toString()
    //     var arr = [];
    //     var start = 0;
    //     if (isNaN(num)){
    //         return "you did not input a number.";
    //     }
    //     for (let i = 0; i < str.length; i++) {
    //         arr.push(str[i]);
    //     }
    //     for (let i = 0; i < arr.length; i++) {
    //         if (!isNaN(arr[i])) {
    //             start += (arr[i] * 1);
    //         }
    //
    //     }
    //     return start;
    // }

    // console.log(sumOfDigits(12345));

    //TODO: Write a function that will return a palindrome number through
    // iterative adding of a number amd it's own palindrome (i.e. 23 + 32 = 55)
    // (46 + 64 = 110; 110 + 011 = 121)

    function palindrome(num) {
        parseInt(num);
        var sNum = num.toString();
        var reverseNum = (reverseString(sNum) * 1);
        while (reverseNum !== num) {
            num += reverseNum;
            sNum = num.toString();
            reverseNum = (reverseString(sNum) * 1);
        }
        return num;
    }

    // console.log(palindrome(96));
    // console.log(palindrome(46));
    console.log(palindrome(46));
    // console.log(palindrome(68));

    // function palindrome(num) {
    //     var sNum;
    //     var reverseNum;
    //     do {
    //         sNum = num.toString();
    //         reverseNum = (reverseString(sNum) * 1);
    //         num += reverseNum;
    //         sNum = num.toString();
    //         reverseNum = (reverseString(sNum) * 1);
    //     } while (reverseNum !== num)
    //     return num;
    //
    // }

    // console.log(palindrome(46));


    // function palindrome(num) {
    //     var sNum = num.toString();
    //     var reverse = (reverseString(sNum) * 1);
    //     for (let i = 1; i <= 56; i++) {
    //         if (reverse !== num) {
    //             console.log((num + "") + " + " + (reverse + "") + " = " + (reverse + num));
    //             num += reverse;
    //             sNum = num.toString();
    //             reverse = (reverseString(sNum) * 1);
    //         }
    //     }
    // }
    //
    // palindrome(10911);

    // function palindrome(num) {
    //         var sNum = num.toString();
    //         var reverseNum = (reverseString(sNum) * 1);
    //         var numTable = "";
    //         while(reverseNum !== num) {
    //             numTable += (sNum) + ( " + " + reverseNum + " = ") + (num + reverseNum) + "   ";
    //             num += reverseNum;
    //             sNum = num.toString();
    //             reverseNum = (reverseString(sNum) * 1);
    //     }
    //     return numTable
    // }
    //
    // console.log(palindrome(96));
    // console.log(palindrome(46));
    // console.log(palindrome(46));
    // console.log(palindrome(68));


})();