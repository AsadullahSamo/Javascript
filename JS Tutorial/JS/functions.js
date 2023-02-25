table(5, 10);

showArgumentsArray(1, 2, 5);
showArgumentsArray(12, 21, "hi");

console.log(add(5, 10, 15, 2, 1));

let array = ["Asad", "Awais", "JS", "C++"];
printArray(array);

function table(i, n){
    for(let j=1; j<=n; j++){
        document.write(i + " * " +j+ " = "+ (i*j) + "<br>");
    }
}     // end of table function()



// Arguments Object:  same as Variable Arguments in Java

// even if add() has no params by default arguments is array which store arguments passed by function add()

function showArgumentsArray(){
    console.log(arguments);
}

// function with arguments object and return statement
function add(){
    if(arguments.length==0){
        document.write("No args passed!");
    } else {
        let sum = 0;
        for(let i=0; i<arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }
}

function printArray(arr){
    console.log(arr);
}