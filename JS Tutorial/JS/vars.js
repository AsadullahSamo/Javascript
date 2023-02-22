// var is obsolete, now we use const and let
let x = 2, y= 5, z = x+y;
console.log(z);

x = 4;
console.log(x);

const i = 5;
// i =10;  --> This is error
console.log(i);
// let, var, and const 

let empty;
console.log(empty);     // Output: undefined

// ** is power
console.log("5**2 = "+5**2);     //means 5 to power 2 --> Output: 25
console.log("5**3 = "+5**3);     //means 5 to power 3 --> Output: 125

console.log("5 + \'5\' = "+5+'5');