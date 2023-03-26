let elm = document.getElementById("intro");
console.log(elm);

let parent = elm.parentElement;
console.log(parent);
// parent.innerHTML = "Hello";  // change entire ul with id intro to hello
elm = document.getElementById("child");
let node = elm.firstElementChild;     // also elm.lastElementChild
console.log(node);



//  To select all childs
let nodes = elm.children;     
console.log(nodes);


// To select siblings
let elm2 = document.getElementById("sibling");
console.log(elm2);
let sibling =elm2.nextElementSibling.nextElementSibling;     // also elm2.previousElementSibling
console.log(sibling);