let account_no = 45632532;
let account_type = "saving";

function withdraw(){
    console.log("account withdraw function called...")
}

function deposit(){     // or instead of using export multiple time with each we can use
    console.log("Balance updated...")
}

export {withdraw, deposit as dp};     // We renamed deposit function


//               Defualt function:    
// 1.  It has no name (like anonymous function)
// 2.  Every module has only one default function
// 3. When importing default function we've to give it a name


export default function(){
    console.log("Account default function is called");
}

