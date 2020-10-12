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

    function narcissisticNum(num) {
var digits = num + "";
var nDigits = [];
var ogNum = [];
var start = 0;
for (let i = 0; i < digits.length; i++) {
nDigits.push(digits[i]);
}
for (let i = 0; i < nDigits.length; i++) {
ogNum. push(Math.pow(nDigits[i], digits.length));
}
for (let i = 0; i < ogNum.length; i++) {
start += ogNum[i];
}
return start;
}

//4679307776
function numberOutput() {
var m = 0;
for (let j = 0; j < 1000; j++) {
if (j === narcissisticNum(j)) {
m += 1
console.log("The narcissistic number at " + m + " is: " + j);
            if (m === 34) {
                break;
            }
        }
    }
}
numberOutput();


    console.log(narcissisticNum(370));
console.log(narcissisticNum(371));
console.log(narcissisticNum(407));
>>>>>>> 321b9f39e53c89ae961f47a0321db1619c6bffe8

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

    // function palindrome(num) {
    //     var sNum = num.toString();
    //     var reverseNum = (reverseString(sNum) * 1);
    //     while (reverseNum !== num) {
    //         num += reverseNum;
    //         sNum = num.toString();
    //         reverseNum = (reverseString(sNum) * 1);
    //     }
    //     return num;
    //
    // }
    //
    // console.log(palindrome(89));

    function palindrome(num) {
        var sNum;
        var reverseNum;
        do {
            sNum = num.toString();
            reverseNum = (reverseString(sNum) * 1);
            num += reverseNum;
            sNum = num.toString();
            reverseNum = (reverseString(sNum) * 1);
        } while (reverseNum !== num)
        return num;

    }

    // console.log(palindrome(46));

    //TODO: print ot eah iteration of the reverse-add sequence.

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

    // BONUS CHALLENGE (when finished with the exercise)...

    // TODO: Create a phone number parser that will convert a string of numbers into a human readable format.
    //  The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    //  Using multiple functions will be helpful.

    // input = 5552324343, output = 555-232-4343
    // input = 5553434, output = 555-3434
    // input = 18005552323, output = 1-800-555-2323
    // Extra Challenge: account for invalid characters
    // Extra Challenge: if the input is already formatted, output the unformatted version
    // Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    // BONUS CHALLENGE (when finished with the exercise)...

    // TODO: Create a phone number parser that will convert a string of numbers into a human readable format.
    //  The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    //  Using multiple functions will be helpful.

    // input = 5552324343, output = 555-232-4343
    // input = 5553434, output = 555-3434
    // input = 18005552323, output = 1-800-555-2323
    // Extra Challenge: account for invalid characters
    // Extra Challenge: if the input is already formatted, output the unformatted version
    // Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    var number = "5552324343";
    // var number = "5553434";
    // var number = "18005552323";

    function sevenDigits(phoneNum) {
        phoneNum = phoneNum.split("");
        phoneNum.splice(3, 0, "-");
        return phoneNum.join("");
    }
    function tenDigits(phoneNum) {
        phoneNum = phoneNum.split("");
        phoneNum.splice(3, 0, "-");
        phoneNum.splice(7, 0, "-");
        return phoneNum.join("");
    }
    function elevenDigits(phoneNum) {
        phoneNum = phoneNum.split("");
        phoneNum.splice(1, 0, "-");
        phoneNum.splice(5, 0, "-");
        phoneNum.splice(9, 0, "-");
        return phoneNum.join("");
    }

    function phone(phoneNumber){
        if (phoneNumber.length === 7) {
            return sevenDigits(phoneNumber);
        } else if (phoneNumber.length === 10) {
            return tenDigits(phoneNumber);
        } else if (phoneNumber.length === 11) {
            return elevenDigits(phoneNumber);
        }
    }

    console.log(phone(number));



>>>>>>> 321b9f39e53c89ae961f47a0321db1619c6bffe8
})();