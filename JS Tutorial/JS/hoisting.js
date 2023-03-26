
"use strict"    // To enable strict mode (and actually get error on line 30)
//  hoisting  --> To pull (in English)


hello();

function hello(){
    console.log("Hello, World!");
}     // in C++, C this is error, cause we defined functioned after we call it
// But JS puts this at top when executing, this is hoisting feature
// It only lifts declared for variable

y = 7;
console.log(y);
var y;     // puts y at top of x = 7         // for let it will give referenceError

let x;
console.log(x);
x = 8;

// and for variable it assigns undefined to it by default


console.log(z);
var z = 5;       // it just takes var z from (var z = 5) and move it to 22, giving undefined error, because it just takes var z at top


// let num;
num = 15;
console.log(num);    // now it declares num by itself at line with let num;


// 1. function declaration is fully hoisted
// 2. let/const are just put to top without being initialized with undefined
// 3. var is moved to the top, initialized with undefined



// Conclusion


//    For Variables with let/const/var
// console.log(a); // undefined
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// var a = 10;
// let b = 20;
// const c = 30;



//  For functions and function expressions

// greet1();
// greet3();
// greet3();
// greet4();

// // function declaration is fully hoisted
// function greet1() {
//   console.log("HELLO");
// }

// // TypeError: greet1 is not a function
// var greet2 = function () {
//   console.log("HELLO");
// };

// // ReferenceError: Cannot access 'greet3' before initialization
// let greet3 = function () {
//   console.log("HELLO");
// };

// // ReferenceError: Cannot access 'greet4' before initialization
// const greet4 = function () {
//   console.log("HELLO");
// };