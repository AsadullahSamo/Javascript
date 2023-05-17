// innerHTML used for all HTML elements
let elm = document.getElementById("intro");

let content = elm.innerHTML;

console.log(content);
console.log(elm);

elm.innerHTML = "<h2> This is a heading </h2>"


// value used to get all form related values
document.getElementById("btn").addEventListener("click", function(){
    let textboxVal = document.getElementById("myText").value;
    alert(textboxVal);
})


// src --> used to get src of image
document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("img").src = 'E:\\Javascript\\JS Projects\\Image Slider\\img\\img2.jpg';
})
