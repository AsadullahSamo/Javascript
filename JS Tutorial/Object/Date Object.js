let x = new Date();         // Date object will be made like this
console.log(x);        // It stores current date

let format = new Date(2018, 9, 13, 11, 12, 33, 45);
console.log(format);
console.log(format.getMonth());    // Oct is 9, Jan is 0, Feb is 1 and so on

format.setMonth(2);
console.log(format);


// Question:  What will be day after 50 days
format.setDate(format.getDate() + 50);
console.log("Date after 50 days: "+format);


