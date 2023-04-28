let content = document.getElementsByClassName("content");

for(i=0; i<content.length; i++){

  content[i].addEventListener("click", function(){
      this.classList.toggle("active");      // adds active class to questions
  })

}       // end of for loop