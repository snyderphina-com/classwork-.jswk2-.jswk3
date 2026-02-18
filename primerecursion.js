//Write a JS code that accepts anumber as a pararmeter and checks whether it is a prime number or not using recursion

function isPrime(num, divisor = 2) {
    // Base case: numbers less than 2 are not prime
    if (num < 2) return false;
    
    // Base case: if divisor exceeds the square root of num, it's prime
    if (divisor > Math.sqrt(num)) return true;
    
    // If num is divisible by the current divisor, it's not prime
    if (num % divisor === 0) return false;
    
    // Recursive case: check the next divisor
    return isPrime(num, divisor + 1);
}

const prompt = require("prompt-sync")();
let numberToCheck = Number(prompt("Enter a number to check if it's prime: "));
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " is a prime number.");
} else {
    console.log(numberToCheck + " is not a prime number.");
}   