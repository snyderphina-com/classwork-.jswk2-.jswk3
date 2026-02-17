//Generate a code that checks if a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). The code should take a string as input and return true if it is a palindrome and false otherwise.

// function isPalindrome(str) {
//     // Remove spaces, punctuation, and convert to lowercase
//     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
//     // Check if the cleaned string is equal to its reverse
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// const prompt = require("prompt-sync")();
// let inputString = prompt("Enter a string to check if it's a palindrome: ");
// console.log("Is the string a palindrome? " + isPalindrome(inputString));    



/*

ARROW FUNCTIONS     00000000000000000000000000000000000000000000000000000000000000000000
const checkPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return { original: cleanedStr, reversed: reversedStr, isPalindrome: cleanedStr === reversedStr };
};*/

// Function expression version
const checkPalindrome = function(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');

    return {
        original: cleanedStr,
        reversed: reversedStr,
        isPalindrome: cleanedStr === reversedStr
    };
};

const prompt = require("prompt-sync")({ sigint: true });

let inputString = prompt("Enter a word or sentence: ");

let result = checkPalindrome(inputString);

console.log("Cleaned Word: ", result.original);
console.log("Reversed Word:", result.reversed);

if (result.isPalindrome) {
    console.log("Result: ✅ It is a palindrome!");
} else {
    console.log("Result: ❌ It is NOT a palindrome.");
}

//BY  LOOPING
/*
const checkPalindrome = function(str) {
    // Clean the string: remove non-alphanumerics and lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Build reversed string manually
    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    // Check if palindrome
    const isPalindrome = cleanedStr === reversedStr;

    return {
        original: cleanedStr,
        reversed: reversedStr,
        isPalindrome: isPalindrome
    };
};

const prompt = require("prompt-sync")({ sigint: true });
let inputString = prompt("Enter a word or sentence: ");

let result = checkPalindrome(inputString);

console.log("Cleaned Word: ", result.original);
console.log("Reversed Word:", result.reversed);

if (result.isPalindrome) {
    console.log("Result: ✅ It is a palindrome!");
} else {
    console.log("Result: ❌ It is NOT a palindrome.");
}

*/

//BY USING TWO POINTER// Function expression using two-pointer approach
/*const checkPalindrome = function(str) {
    // Clean the string: remove non-alphanumerics and lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Two-pointer palindrome check
    let isPalindrome = true;
    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    // Build reversed string manually for display
    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return {
        original: cleanedStr,
        reversed: reversedStr,
        isPalindrome: isPalindrome
    };
};

    console.log("Result: ❌ It is NOT a palindrome.");
// Terminal input
const prompt = require("prompt-sync")({ sigint: true });
let inputString = prompt("Enter a word or sentence: ");

// Check palindrome
let result = checkPalindrome(inputString);

// Display results
console.log("Cleaned Word: ", result.original);
console.log("Reversed Word:", result.reversed);

if (result.isPalindrome) {
    console.log("Result: ✅ It is a palindrome!");
} else {
    console.log("Result: ❌ It is NOT a palindrome.");
}
*/