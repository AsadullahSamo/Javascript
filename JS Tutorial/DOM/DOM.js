// Document Object Model(DOM) is an application program interface(API)
// for manipulating HTML and XML documents(add, remove and modify parts)
// of the document/HTML)


// 1. Select element by id
let element = document.getElementById("second-list");
console.log(element);


// console.log(element.innerHTML);

// if id is not in HTML, it'll return null
let nullId = document.getElementById("h");
console.log(nullId);


// to manipulate list2, from list2 to Manipulated List

console.log("Before manipulation: " + element.innerHTML);
element.innerHTML = "<button> Click me! </button>";
console.log("After manipulation: " + element.innerHTML);



// 2. Get element by class

let newArray = document.getElementsByClassName("cl");    // It stores these objects into array
console.log(newArray);
// so to manipulate it, we will use for loop (now this is treated as array)

for(i=0; i<newArray.length; i++){
    newArray[i].innerHTML = '<p style ="color: red;"> Hi, I am changed';
}


// 3. Select Element by Tag Name
// This is also multiple, so will be stored as array of objects
let div1 = document.getElementById("div1");
let collectionOfPs = div1.getElementsByTagName("h2");     // Change all h2 in div1
for(i=0; i<collectionOfPs.length; i++){
    collectionOfPs[i].innerHTML = "New Heading";
}




 
// 1. To apply Css styling
// Syntax:       elm.style.property = '';
// eg.  elm.style.fontSize = '2rem'

element.style.color = 'red';


// 2. Modify atrributes
// Syntax: 
// a. elm.setAttribute(attrb, val);
// eg. elm.setAttribute('id', 'main-heading');
// b. elm.removeAttribute('id');
// c. console.log(elm.getAttribute('id'));

// 3. Modifying classes
// li.classList.add('main-class');     also remove() contains()