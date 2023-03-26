let parent = document.getElementById("menu");

let item = document.createElement("li");
item.textContent = "Services";

let replace = parent.firstElementChild.nextElementSibling;

console.log(replace);
parent.replaceChild(item, replace);