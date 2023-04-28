//  A function without name

// 1. We can assign any function to variable
// 2. Useful if we want to call a function only one time so to rather give it a 
// name, it's better to make anonymous function
// 3. No need to name a function if we are assigning it to a var
// (it's good to make anonymous function in such case)

let show = function(){       // and this is called function expression
    console.log("Hello, World");
};

show();

// setTimeout(functionName, timeinMilliseconds)
setTimeout(show, 3000);      // displays function after 3 seconds 

// or to save memory copy entire anonymous function into setTimeout as argument

setTimeout(function(){       // and this is called function expression
    console.log("Hello, World");
},  4000);      // displays function after 3 seconds 