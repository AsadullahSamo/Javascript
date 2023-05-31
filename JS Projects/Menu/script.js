let all = document.getElementById("all");
let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let shakes = document.getElementById("shakes");
let dinner = document.getElementById("dinner");

let images = document.getElementsByTagName("img");
let descriptions = document.getElementsByClassName("description");

all.addEventListener("click", function(){
    for(let i=0; i<images.length; i++){
       descriptions[i].style.display = 'flex';
       images[i].style.display = 'flex';
    }
})

breakfast.addEventListener("click", function(){
    for(let i=0; i<images.length; i++){
        if(i === 0 || i === 3 || i === 6){
            descriptions[i].style.display = 'flex';
            images[i].style.display = 'flex';
        } else {
            descriptions[i].style.display = 'none';
            images[i].style.display = 'none';
        }
    }
})

lunch.addEventListener("click", function(){
    for(let i=0; i<images.length; i++){
        if(i === 1 || i === 4 || i === 7){
            descriptions[i].style.display = 'flex';
            images[i].style.display = 'flex';
        } else {
            descriptions[i].style.display = 'none';
            images[i].style.display = 'none';
        }
    }
})

shakes.addEventListener("click", function(){
    for(let i=0; i<images.length; i++){
        if(i === 2 || i === 5 || i === 8){
            descriptions[i].style.display = 'flex';
            images[i].style.display = 'flex';
        } else {
            descriptions[i].style.display = 'none';
            images[i].style.display = 'none';
        }
    }
})

dinner.addEventListener("click", function(){
    for(let i=0; i<images.length; i++){
        if(i === 9){
            descriptions[i].style.display = 'flex';
            images[i].style.display = 'flex';
        } else {
            descriptions[i].style.display = 'none';
            images[i].style.display = 'none';
        }
    }
})