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

for (let i = 0; i < Math.pow(10, 10); i++) {
    if (i === narcissisticNum(i)){
        console.log(i);
    }
}

console.log(narcissisticNum(370));
console.log(narcissisticNum(371));
console.log(narcissisticNum(407));




