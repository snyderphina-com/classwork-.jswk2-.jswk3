//Write a JS function that generates all combinations of a string. For example, if the input string is "abc", the output should be ["a", "b", "c", "ab", "ac", "bc", "abc"].

function getCombinations(str) {
    let combinations = [];

    // Helper function to generate combinations recursively                 
    function generate(current, remaining) {     
        if (current) {
            combinations.push(current);
        }
        for (let i = 0; i < remaining.length; i++) {
            generate(current + remaining[i], remaining.slice(i + 1));
        }
    }

    generate("", str);
    return combinations;
}

const prompt = require("prompt-sync")();
let inputString = prompt("Enter a string to generate combinations: ");
let result = getCombinations(inputString);
console.log("Combinations of the string: ", result);    