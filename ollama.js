function isPalindrome(str){
    const currentString=str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr=str.split("").reverse().join("");
    return str===reversedStr
}

const prompt=require("prompt-sync")();
const current=prompt("Enter a word or sentence: ");
const revesed=isPalindrome(current);
console.log("your revesed word is :"+revesed);
