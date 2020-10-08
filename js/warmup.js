"use strict";
console.log("hello Evan");
console.log("Hello elvira");
console.log("Hello Kristen");
console.log("Hello Chris");
console.log("Hello Ryan M");

function sayHello(name) {
    console.log("Hello" + name);
}

sayHello("evan");

function caseSensitive(str) {
    return str === str.toLowerCase() || str === str.toUpperCase();
}

console.log(caseSensitive("hello world"));
console.log(caseSensitive("HELLO WORLD"));
console.log(caseSensitive("HeLLo WorLD"));
console.log(caseSensitive("UPPERCASE"));
console.log(caseSensitive("lowercase"));
console.log(caseSensitive("RanDOm"));