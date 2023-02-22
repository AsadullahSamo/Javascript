let input = "n";

//  It performs === comparison
switch(input){
    case 1: 
    case "y": 
    case "yes": 
        alert("Continue"); 
        break;
    case 0: 
    case "n": 
    case "no":
        alert("End"); 
        break;
    default: 
        alert("Wrong input");
}


// == compares values but not datatype  e.g. 5=='5'   true
// === compares values and datatype     e.g. 5==='5'  false