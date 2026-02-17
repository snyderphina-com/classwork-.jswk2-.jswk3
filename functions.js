/* 
Functions are reusable blocks of code that perform a specific task. They allow you to break down your code into smaller, more manageable pieces, and can be called multiple times throughout your program. Functions can take parameters (inputs) and return values (outputs). They are an essential part of programming and help improve code organization and readability.


DRY (Don't Repeat Yourself) is a programming principle that emphasizes the importance of avoiding code duplication. The idea is to write code in such a way that it can be reused, rather than copying and pasting the same code multiple times. This helps to reduce errors, improve maintainability, and make your code more efficient. By following the DRY principle, you can create functions that can be called whenever needed, instead of writing the same code over and over again.


Syntax of a function:
function functionName(parameters) {
     code to be executed
}
     return value; // optional

     function keywords:
     - function: used to declare a function.
     - return: used to specify the value that a function should return after it has completed its task. It is optional, and if not specified, the function will return undefined by default.    
*/
//Example; declare a function that adds the sum of two numbers and returns the result.
// function sum(num1, num2) {
//     let sum = num1 + num2;
//     return sum; 
// }
// //Call the function and store the result in a variable
// const prompt = require("prompt-sync")({ sigint: true });
// let number1 = Number(prompt("Enter the first number: "));
// let number2 = Number(prompt("Enter the second number: "));
// let result = sum(number1, number2);  // Call the function and store the result in a variable
// console.log("The sum of " + number1 + " and " + number2 + " is: " + result); // Output the result to the console    



//Example;Writea function that receives a username and outputs greetings followed by the username.
// function greetUser(username) {
//     console.log("Hello, " + username + "! Welcome to our website.");
// }
// //Call the function with a username
// const prompt = require("prompt-sync")();
// let userName = prompt("Enter your username: ");
// greetUser(userName); // Output: Hello, [username]! Welcome to our website.

//More detailed example; Write a function that calculates the area of a rectangle given its width and height, and returns the result.
// function calculateArea(width, height) {
//     let area = width * height;
//     return area;
// }
// //Call the function with width and height values
// let rectWidth = 5;
// let rectHeight = 3;
// let rectangleArea = calculateArea(rectWidth, rectHeight);

// console.log("The area of the rectangle is: " + rectangleArea); // Output: The area of the rectangle is: 15

//Write a function that receives radius of a circle and calculates its area  based on that radius, and returns the result.
function calculateCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

prompt = require("prompt-sync")();
let circleRadius = Number(prompt("Enter the radius of the circle: "));
let circleArea = calculateCircleArea(circleRadius);
console.log("The area of the circle is: " + circleArea.toFixed(2)); 
