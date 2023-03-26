let elm = document.getElementById("intro");

let h1 = document.createElement("h1");        // name of tag to create

h1.className = "try pi";      // to add class to h1
h1.id = "idOfh1"             // to add id to h1
let text = document.createTextNode("This is h1 tag");

elm.appendChild(h1);

h1.appendChild(text);

let b = document.createElement("b");

let b_text = document.createTextNode("Hi, there! I am bold text");

b.appendChild(b_text);

elm.appendChild(b);


// document.body.appendChild(h1);

let elm2 = document.getElementById("intro");
let parent = elm2.parentElement;

// parent.appendChild(h1);     // Append in body by this or above document.body.appendChild() method

let list = document.getElementById("list");
let item = document.createElement("li");
item.textContent = "new List 5";        // another way of creating text for tag. Alternative of createNodeText() method


console.log(item.textContent);
list.appendChild(item);
// item.appendChild(item_text);