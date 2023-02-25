let x = Math.random();       // Generate number between 0 and 1
console.log("Random number is "+x);

let y = Math.floor(Math.random() * 6) + 3;   // Now it gives random number between 0 and 9
let z = Math.random() * 100;   // Now it gives random number between 0 and 99
let a = Math.random() * 101;   // Now it gives random number between 0 and 100
let b = Math.random() * 105;   // Now it gives random number between 0 and 104

console.log(y);

//  Algorithm : To generate random number between 0 and n (where n is any number)

//  Algorithm:  Math.floor(Math.random() * (maxValue - minValue)) + minValue;      // max excludes
//  Algorithm:  Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;      // max includes

