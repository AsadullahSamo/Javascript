// Immediately Invoked function

// Anonymous functioncan be immediately invoked by following way

(function (){
    console.log("Hello, World!");
    alert("Hello, World!");
})();

// Globally declared vars occupy more memory while locally declared vars and funcs take less memory
// if less lines of code better to use anonymous funcs

(function(){

    function greet(){    
    let msg = "Hello JS!";
    console.log(msg);
    }      // end of greet()

    greet();
})();
