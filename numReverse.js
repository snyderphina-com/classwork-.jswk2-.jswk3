/*Write a JS code that reverses a number
using function expression
*/

let reverseNumber = function(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }
    return reversed;
};

const prompt = require("prompt-sync")();
let numberToReverse = Number(prompt("Enter a number to reverse: "));
console.log("The reversed number is: " + reverseNumber(numberToReverse));       

