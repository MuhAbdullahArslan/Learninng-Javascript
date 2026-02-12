// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// The For Loop
// The for statement creates a loop with 3 optional expressions:

// for (expr1; expr2; expr) {
//   // code block to be executed
// }
// exp1 is executed one time before the execution of the code block.

// exp2 defines the condition for executing the code block.

// exp3 is executed every time the code block has been executed.

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// text = "";
// for (let i = 0; i < cars.length;i++){
//     text += cars[i] + "\n"
// }
// console.log(text);

// let text = '';
// for (let i = 0; i < 5; i++){
//     text += "The number is: " + i + "\n"
// }
// console.log(text);

// Table of num 
// let num = 2

// for (let i = 1; i < 11;i++){
//     console.log(num + " X " + i + " = " + (num*i));
    
// }

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// text = '';
// let i = 0;
// while (i < cars.length){
//     text += "The Car"+ i+" Name is: " + cars[i] + '\n';
//     i++
// }
// console.log(text);


// The Do While Loop
// The do while loop is a variant of the while loop.

// The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
// // code block to be executed
// }
// while (condition);

text = '';
let i = 0;
do {
    text += "The number is: " + i + "\n";
    i++
}while(i < 10)

console.log(text);
