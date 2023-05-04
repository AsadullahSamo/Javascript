// no one can use this (OR any js) file, until permission is granted
// Permission is granted by export

export let name = "Asad";      //  This variable can be used in another file
let age = 18;                 // This variable can't be used in another file

export function code(){
    console.log("Coding...");
}

function cook(){
    console.log("Cooking...")
}

export function withdraw(){
    console.log("user withdraw function called...")
}

//               Defualt function:    
// 1.  It has no name (like anonymous function)
// 2.  Every module has only one default function


export default function(){
    console.log("User default function is called");
}

// one module can also be imported in another module
import { dp } from './account.js';
dp();

