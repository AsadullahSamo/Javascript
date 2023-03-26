// let content = document.querySelectorAll(".content");

// console.log(content);
// let i = 0;

let quote = document.querySelector(".content q");
let name = document.querySelector(".name");
let newQuote = document.querySelector(".new-quote");

let quotes = [
    {
        quote: "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
        person: "DALAI LAMA"
    }, 
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "ALBERT EINSTEIN"
    }, 
    {
        quote: "Knowing yourself is the beginning of all wisdom.",
        person: "ARISTOTLE"
    }, 
    {
        quote: "I do the very best I know how-the very best I can; and mean to keep doing so until the end.",
        person: "ABRAHAM LINCOLN"
    }
];


newQuote.addEventListener("click", function(e){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    name.innerHTML = quotes[random].person;
    // content = content.nextElementSibling;
});

// i++;

