//SWITCH STATEMENT
//Switch case satements executes different blocks of codes based
//  on  the value of a give espresion.

// //Example
// const prompt = require("prompt-sync")({ sigint: true });
// let color=prompt("Enter the displayed color ").toLowerCase();
// let message;

// if (color === "red") {
//     message="Stop";
// }
// else if (color === "yellow") {
//     message="Caution,get ready to stop";
// }
// else if (color === "green") {
//     message="Go";
// }
// else{
//     message="Invalid color";
// }
// console.log(message);

//SWITCH CASE
//Syntax
// switch (what is defined) {
//     case "value1":
//          code to be executed if expression === value1
//         break;
//     case "value2":
//          code to be executed if expression === value2
//         break;
//        default:
//         code to be executed if expression doesn't match any case;
//                   }





// const prompt = require("prompt-sync")({ sigint: true });
// let color=prompt("Enter the displayed color ").toLowerCase();
// let message;

// switch (color) {
//     case "red":
//         message="Stop";
//         break;
//     case "yellow":
//         message="Caution,get ready to stop";
//         break;
//     case "green":
//         message="Go";
//         break;
//     default:
//         message="Invalid color";
// }
// console.log(message);


// const prompt = require("prompt-sync")({ sigint: true });
// let Number1=Number(prompt("Enter a number: "));
// let operator=prompt("Choose an operator (add, subtract, multiply, divide): ").toLowerCase();
// let Number2=Number(prompt("Enter another variable: "));


// let result;

// switch (operator) {


//     case "add":
//         result=Number1+Number2;
//         break;
//     case "subtract":
//         result=Number1-Number2;
//         break;
//     case "multiply":
//         result=Number1*Number2;
//         break;
//     case "divide":
//         if (Number2 !== 0) {
// }   }
// console.log(result);


//***************0000000000000000000000000000000000000000000000000000000000


//LOOPS
//A loop is a programming structure that repeats a block of code as long as a specified condition is true. 
//Loops are used to automate repetitive tasks and can be categorized into different types, such as: for
//  loops, while loops, and do-while loops.  

//FOR LOOPS      0000000000000000000000000000000000000000000000000000000000



//It's a controll statementused to execute a block of code repeatedly untill aspecific conditin becomes 
// fales 
// It's ideal for situations where the number of iterations is known before hand.

//Syntax
// for (initialization; condition; increment/decrement(condition-update)) {
//     code to be executed if condition is true;
// }

//(a)Initialization: This is where you set up a counter variable to keep track of the number of 
// iterations. It's executed once before the loop starts and is used to initialize the counter variable.


//(b)Condition: This is a boolean expression that is evaluated before each iteration of the loop. If the
//  condition evaluates to true, the code block inside the loop is executed. If it evaluates to false, 
// the loop terminates and control is passed to the next statement after the loop.
// Evaluated before each loop iteration If ti's true, the code block executes .If false the loop
//  terminates.

//(c)Increment/Decrement: This is where you update the counter variable after each iteration. It is 
// executed
// Executes after each iteration of the code block. It is typically used to incerement or decrement 
// the countervariable, which helps control the number of iterations of the loop.


//Write a JS code that executes numbers 0 to 10
//example   
 //for (let num = 0; num <= 100; num++) {
   // console.log(num);
 //}

 //Write a JS code that calculatesthe sum  numbers from 25 to 75
 //let sum=0;
 //for (let num = 25; num <= 75; num++) {
   // sum += num;
 //}
 //console.log(sum);

 // Write a JS code that calculates sum aof all even numbers from 0 to 100
//Test for even numbers; k%2===0    

    //let sum=0;  
    //for (let num = 0; num <= 100; num++) {
       // if (num % 2 === 0) {
        //    sum += num;
      //  }
   // }
   // console.log(sum);
 

    //Assignments
//does factorial need nessted loops? No, it can be calculated using a single loop.
//example of factorial calculation using a single loop:
// The factorial of a non-negative integer n is the product of all positive integers less than or
   // The factorial of a non-negative integer n is the product of all positive integers less than or 
   // equal to n. For example, the factorial of 5 
   // (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.
   //(a) Write a JS code that calculates the factorial of a given number using a for loop.

    // let factorial=1;
    // let num=10; // You can change this value to calculate the factorial of any non-negative integer
//  for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     console.log(`The factorial of ${num} is ${factorial}.`);



   //(b)Write a JS code that calculates and prints the sum of all even numbers and all odd
   //  numbers separately from 1 to 100.

//    let sumEven=0;
//    let sumOdd=0;
//    for (let num = 1; num <= 100; num++) {
//     if (num % 2 === 0) {
//         sumEven += num;
//     } else {
//         sumOdd += num;
//     }
// }
// console.log(`The sum of even numbers from 1 to 100 is ${sumEven}.`);
// console.log(`The sum of odd numbers from 1 to 100 is ${sumOdd}.`);



//Nested loops   00000000000000000000000000000000000000000000000000000000000




//A nested loop is a loop that is contained within another loop. The inner loop is executed completely 
// for each iteration of the outer loop. Nested loops are often used to work with multi-dimensional 
// data structures, such as arrays or matrices, and to perform complex iterations over data sets.

//example of nested loops
// for (let j = 1; j <= 5; j++) {

// for(let i=1;i<=5;i++){
//   let mult=j*i;
//   console.log(j+"*"+ i +"=" +mult);
  
// }

// }

//Example:write a JS code that prints a right angled triangle of stars with a height of 5 using
//  nested loops.
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "*";
//     }
//     console.log(stars);
// }
 /*
 Example(b)
 Write a JS code that prints an isosceles triangle of stars with a height of 5 using nested loops.
 for (let i = 1; i <= 5; i++) {
    let stars = "";
    let spaces = " ".repeat(5 - i); // Calculate the number of spaces needed for centering
    for (let j = 1; j <= (2 * i - 1); j++) { // Calculate the number of stars needed for each row
        stars += "*";
    }
    console.log(spaces + stars); // Print spaces followed by stars to create an isosceles triangle
}   witout using repeat method
for (let i = 1; i <= 5; i++) {
    let stars = "";
    let spaces = "";
    for (let s = 1; s <= 5 - i; s++) { // Calculate the number of spaces needed for centering
        spaces += " ";
    }
    for (let j = 1; j <= (2 * i - 1); j++) { // Calculate the number of stars needed for each row
        stars += "*";
    }
    console.log(spaces + stars); // Print spaces followed by stars to create an isosceles triangle
}


 */


//Write a JS code that prints all prime numbers between 1 and 100 using nested loops.


// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;
//     for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
//         if (num % divisor === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }


//Labeled for loop with continue statement
// A labeled statement allows you to name a loop, and then you can use that label with 
// break or continue statements to control the flow of the loop more precisely. This is
//  particularly useful in nested loops, where you may want to break out of or continue an 
// outer loop from within an inner loop.




// nextnum:
// for (let num = 0; num <= 100; num++) {
// if (num <=1){
//     continue nextnum;
// }; // Skip numbers less than 1

// for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
//     if (num % divisor === 0) {
//         continue nextnum; // Skip non-prime numbers
//     }       

// // This will only print prime numbers
//    }  
// console.log(num);
//  }
//  console.log("Loop has completed.");

//Break statement 00000000000000000000000000000000000000000000000000000000000000000000000000000
//The break statement is used to exit a loop or switch statement prematurely when a 
// certain condition is met.
//Example
// for (let num = 1; num <= 10; num++) {
//     if (num === 5) {
//         break; // Exit the loop when num is 5
//     }
//     console.log(num);
// }
// console.log("Loop has been exited.");

//Continue statement 00000000000000000000000000000000000000000000000000000000000000000000000000
//The continue statement is used to skip the current iteration of a loop and move on to
//  the next iteration.It's often used to skip over certain values or conditions without
//  exiting the entire loop.
//Example
// for (let num = 1; num <= 10; num++) {
//     if (num === 5) {
//         continue; // Skip the rest of the loop when num is 5
//     }
//     console.log(num);
// }
// console.log("Loop has completed.");

//Example2
// for (let num = 1; num <= 20; num++) {
//     if (num % 2 === 0) {
//         continue; // Skip even numbers
//     }
//     console.log(num); // This will only print odd numbers
// }
// console.log("Loop has completed.");          

//example of break and continue in a nested loop
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         if (i === 2 && j === 2) {
//             break; // Exit the inner loop when i is 2 and j is 2
//         }
//         if (i === 1 && j === 1) {
//             continue; // Skip the rest of the inner loop when i is 1 and j is 1
//         }
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }
// console.log("Outer loop has completed.");


/*
WHILE LOOPS    00000000000000000000000000000000000000000000000000000000000000000000000000000000000



A while loop is a control flow statement that allows code to be executed repeatedly based
 on a given boolean condition. The loop continues to execute as long as the condition 
 evaluates to true. Once the condition becomes false, the loop terminates and control is
  passed to the next statement after the loop.
Syntax:
while (condition) {
    // code to be executed as long as the condition is true
}

(a)Condition: This is a boolean expression that is evaluated before each iteration of the
 loop. If the condition evaluates to true, the code block inside the loop is executed. 
 If it evaluates to false, the loop terminates and control is passed to the next statement
  after the loop.

(b)Code Block: This is the set of statements that will be executed repeatedly as long as
 the condition is true. The code block can contain one or more statements, and it is typical
 ly enclosed in curly braces {}.


 Example: Write a JS code that prints numbers from 1 to 10 using a while loop.*/
/*let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}/*
Complex Example: Write a JS code that calculates the sum of all even numbers from 1 to 100 
using a while loop.
*//*let sum = 0;
   
let num2= 1;
while (num2 <= 100) {
    if (num2 % 2 === 0) {
        sum += num2;
    }
    num2++;
}
console.log(`The sum of even numbers from 1 to 100 is ${sum}.`);

*/

// const prompt = require("prompt-sync")({ sigint: true });
// let password="";

// while(password.length<8){
//     password=prompt("Enter a password with at least 8 characters: ");
//     if(password.length<8){
//         console.log("Password is too short. Please try again.");
//     }
//     else{
//         console.log("Password accepted.");
//     }
// }

// const prompt = require("prompt-sync")({ sigint: true });
// let password = "";

// while (password.length < 8) {
//     password = prompt("Enter a password with at least 8 characters: ");}


/*
DO-WHILE LOOPS   0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000




A do-while loop is a control flow statement that executes a block of code at least once, 
and then continues to execute the block as long as a specified condition is true. 
The key difference between a do-while loop and a while loop is that the do-while loop
 guarantees that the code block will be executed at least once, even if the condition is 
 false from the beginning.


Syntax:
do {
    // code to be executed at least once and then repeatedly as long as the condition is 
    // true
} while (condition);

(a)Code Block: This is the set of statements that will be executed at least once and then
 repeatedly as long as the condition is true. The code block can contain one or more
  statements,and it is typically enclosed in curly braces {}.

(b)Condition: This is a boolean expression that is evaluated after each execution of the 
code block.If the condition evaluates to true, the loop continues to execute. If it 
evaluates to false, the loop terminates and control is passed to the next statement after the loop.

Example: Write a JS code that prints numbers from 1 to 10 using a do-while loop.


*/
/*let num3 = 1;
do {
    console.log(num3);
    num3++;
} while (num3 <= 10);   
*/


/* 
Write a JS code that calculates the sum of all positive numbers entered by the user until a negative number is entered, using a do-while loop.
// */
// const prompt = require("prompt-sync")({ sigint: true });    
// let sum = 0;
// let num4 = '';
// do {
//     sum += Number(num4);
//     num4 = prompt("Enter a positive number or a negative number to quit: ");
// }
// while (Number(num4) >= 0);  
// console.log(`The sum of all positive numbers entered is ${sum}.`);

//Write a JS code that tells a user to exit the loop by entering "exit", and continues to prompt the user until they do so, using a do-while loop.

const prompt = require("prompt-sync")({ sigint: true });
let userInput = "";

do {
    userInput = prompt("Type 'exit' to quit the loop: ");
} while (userInput.toLowerCase() !== "exit");

console.log("You have exited the loop.");

