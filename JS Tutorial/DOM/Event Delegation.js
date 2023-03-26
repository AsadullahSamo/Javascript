//  Event Delegation: 

// It allows user to apply a single event listener to parent element that 
// adds it to all of its present and future descendants

document.querySelector("#sports").addEventListener("click", function(e){
    console.log(e.target.getAttribute("id") + " is clicked");
    e.target.style.backgroundColor = 'lightGray';
});