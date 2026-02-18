//Write a JS function that returns a string that has letters in alphabetical order. For example, if the input string is "hello", the output should be "ehllo".

function alphabetizeString(str) {
    // Split the string into an array of characters, sort it, and join it back into a string
    return str.split('').sort().join('');
}

const prompt = require("prompt-sync")();
let inputString = prompt("Enter a string to alphabetize: ");
let result = alphabetizeString(inputString);
console.log("The alphabetized string is: " + result);   