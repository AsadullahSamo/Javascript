let reveal = document.querySelector("#reveal button");
let text = document.querySelector("#text");

reveal.addEventListener("click", function(){
    text.style.top = '50vh'
    text.style.transition = 'top 1s';
});

document.getElementById("close").addEventListener("click", function(){
    text.style.top = '-50vh'
    text.style.transition = 'top 1s';
})