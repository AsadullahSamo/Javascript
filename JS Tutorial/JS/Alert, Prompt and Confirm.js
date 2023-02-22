// Alert, prompt and confirm

// All are to interact with user

// 1. Alert

alert("Welcome! Asad");


// 2. Prompt --> To get input from user (if user does not give input, the var will store null)
// prompt(message);
// prompt(message, placeholder);
// if we want that by default prompt text field will have 20, then we can acheive this by 
// let age = prompt("Enter your age: ", 20);
let age = prompt("Enter your age: ");
if(age>18){
    alert("Your age is "+age);
    document.getElementById("h1").innerHTML = "You can vote!";
} else {
    alert("Your age is "+age);
    document.getElementById("h2").innerHTML = "You can not vote!";
}



// 3. boolean confirm(message);

let response = confirm("Are you sure, you wanna delete?");
if(response){
    document.write("Deleted");
} else {
    document.write("Not Deleted");
}