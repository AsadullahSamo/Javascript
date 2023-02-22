// By default input given by user is always String, if we wanna convert it 

// A. Automatic Conversion (Done by JS Engine)
// e.g.
let a = "4" * "2";      // converts both to number due to *
console.log(a);

let b = "4" * 2;        // converts both to number due to *
console.log(b);

let c = "4" + 2;       // converts 2 to string
console.log(c);

let d = 4 + "2";       // converts 4 to string
console.log(d);

let e = "5" * "yes";       // gives NaN
console.log(e);

// B. By functions
// 1. String(arg)  --> Converts arg into String

// 1. Boolean(arg)  --> Converts arg into Boolean

let type = 4;
console.log("New type is "+ typeof String(type));

// 2. Number(arg)  --> Converts arg into Number
type = "Asad";
console.log("It is "+ Number(type));     // converts it to number, NaN
console.log("NaN * 4 is "+ Number(type) * 4);     // converts it to number, NaN
console.log("New type is "+ typeof Number(type));

// if true is converted to number it'll be converted into 1 and false into 0

type = Number(true);
console.log("1(true in number) + 5 = " + type + 5);


// 3. Boolean(arg)  --> 0 into false and everything else in true, in string, blank string("") is false and everything else is true
type = Boolean(3.14);
console.log("Boolean value of 3.14 is  "+ type);
console.log("Boolean value of 0 is  "+ Boolean(0));
