let age = 15, hasVoterCard = "yes";

if(age>=14 && hasVoterCard =="yes"){
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

let isLoggedIn = 1;     // 1 is loggedin and 0 is loggedout

// Ternary Operator

let option =  isLoggedIn ==1 ? "Logout" : "Login";
console.log(option);           // true    // false

let user;

alert("As user is undefined so user ?? \"Asad\" print "+user ?? "Asad");    //  --> if user is undefined print Asad