// 2nd method
// Syntax:
// element.addEventListener("eventName", function, true/false);
const button2 = document.querySelector("#btn-2");

function alertBtn(){
    alert("I also love Javascript");
}

// applying click event on button 2
button2.addEventListener("click", alertBtn);



// Applying mouseOver event at button 3
const newBackgroundColor = document.querySelector("#btn-3");

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}


newBackgroundColor.addEventListener("mouseover", changeBgColor, true);



const revealBtn = document.querySelector(".hidden-content");
const revealMore = document.querySelector("#reveal-more");


function revealText(){
    revealBtn.style.display = 'block';
    revealMore.style.display = 'none';
}

console.log(revealBtn);
revealMore.addEventListener("click", revealText);

