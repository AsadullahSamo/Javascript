// Arrays are special type of objects in JS, so we can store different values in them
let cars = [];
//  Declaration

console.log(typeof cars);
//  Declaration and Initialization 
let books = ["Math", "Physics", "C++", "Javascript", "PostgreSQL"];
console.log(books);
console.log(books[2]);
// If you want to access last element, you can either use 
// console.log(books[books.length - 1]);    OR simply
console.log("Last Element: " + books.at(-1));   
let text = "<ul>";

for(let i=0; i<books.length; i++){
    text += "<li>" + books[i] + "</li>";
}
text += "</ul>";

// document.getElementById("h").innerHTML = books;
document.getElementById("h").innerHTML = text;

let object = [1, "Asad", 3.14, true];
console.log(object);

//    Array methods
//    1. length
console.log("Length of array object is " + object.length);

//    2. push(arg)  --> Put element at last of array  (pop() is opposite of push)
books.push("OOP in C++");
console.log(books);

//    3. unshift(arg)  --> Put element at start of array     (shift() is opposite)
books.unshift("Sams Teach Yourself Java");
console.log(books);

//    4. splice(startingIndex, numOfElementsToRemove, newElement, newElement, newElement, ...)
//    Using splice() to add elements at specific position
books.splice(2, 0, "Islamiyat", "Science", "Biology");                // means add these elements from index 2 while removing 0 elements
console.log(books);

//      Using splice() to remove elements
books.splice(2, 1);                // means remove 1 element from index 2 (index 2 element will be removed)
console.log(books);


//   to make entire array empty either 
// books.length = 0 // (or use ) books = [];


// 5. indexOf(arg)      --> Return index of element 
console.log("Index of PostgreSQL is " + books.indexOf("PostgreSQL"));


//  6. Array.isArray()    --> To check whether var is variable or array
let word = "Hi";
console.log("Word hi is array? " + Array.isArray(word));
console.log("books is array? " + Array.isArray(books));


//  7. split(param)   --> If that param is found split string into substr and store it in array
let line = "This is a random text";
let wordArray = line.split(" ");     // if " " is found split it into substr and store it into array
console.log(wordArray)

//  8. join(param)  --> Converts array to string by specified param
let string = books.join(" ");
console.log(string);

// 9. slice(startIndex, endIndex)  --> Use to copy elements from one arr to another (endIndex excluded)
// Ex:  
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numArr2 = numArr.slice(2, 5);
console.log(numArr2);

// 10. reverse()   --> Reverses an array
let stringArr = ["Asad", "Junaid", "Abdul Rasheed", "Awais", "Ubaid", "John Cena"]
console.table(numArr);
console.log(numArr.reverse())
console.log(stringArr.reverse())


// 11. concat(arg1, arg2....) --> Combines two or more arrays
let books2 = ["Islamic Studies", "Science", "DSA"];
let books3 = ["Urdu", "Sindhi"];
let newArray = books.concat(books2, books3);
console.log(newArray);


// Multidimensional Array
// useful in situations like if we want to get book with pages 
let bookWithPages = [
    ["Math", 300], 
    ["Physics", 400], 
    ["CS", 1000]
];
console.log(bookWithPages);
console.log(bookWithPages[1]);

console.log((0.2*10 + 0.1*10)/ 10) ;