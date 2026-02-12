// Break in Loops
// When break is encountered in a loop, the loop terminates immediately.

// The program control is transfered to the statements following the loop.

// No more loop iterations are executed.

// let text = '';
// for (let i = 0; i < 10;i++){
//     if(i === 3){break;}
//     text += "This number is: " + i + '\n';

// }
// console.log(text)

// Labeled Break
// Syntax
// break labelname;
// The break statement exits a loop or block and transfers the control to the labeled statement.

// The break statement is particularly useful for breaking out of inner or outer loops from nested loops.

// let text = '';

// loop_outer : for(let j = 0; j < 5; j++){
//     loop_inner : for(let i = 0; i < 5; i++ ){
//         if(i === 3){ break loop_outer;}
//         text += i + "\n"
//     }  
// }

// console.log(text);


let text = '';

loop_outer : for(let j = 0; j < 5; j++){
    loop_inner : for(let i = 0; i < 5; i++ ){
        if(i === 3){ break loop_inner;}
        text += i + "\n"
    }  
}

console.log(text);


