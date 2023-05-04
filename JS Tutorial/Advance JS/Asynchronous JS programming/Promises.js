// Synchronous:     Code runs normally (from top to bottom)
// console.log('\t\t\t\t\t\t\t\t\t Synchronous System\n')
// console.log(" I ")       
// console.log(" eat ")
// console.log(" ice cream ")            
// console.log(" with a ")
// console.log(" spoon ")


// console.log(" I ")       
// console.log(" eat ")
// console.log(" spoon ")
// console.log(" ice cream ")            
// console.log(" with a ")

// Asynchronous
// 1. setTimeout()   // It is asynchronous function
// console.log('\t\t\t\t\t\t\t\t\t Asynchronous System\n')
// console.log(" I ")       
// console.log(" eat ")
// console.log(" ice cream ")            
// console.log(" with a ")
// console.log(" spoon ")


// Ice Cream Project

//        Without promises (Will create Callback Hell)

// let fruits = ["Strawberry", "grapes", "banana", "apple"];
// let liquid = ["ice", "water"];
// let holder = ["cone", "cup", "stick"];
// let toppings = ["chocolate", "peanuts"]


// let order = (fruit, call_production) => {
    
//     setTimeout(() => {

//         console.log(`${fruits[fruit]} was selected`);
//         call_production();

//     }, 2000)
// };

// let production = () => {
//     console.log("Production has started...");
//     setTimeout(() => {
//         console.log("The fruit has been chopped")

//         setTimeout(() => {
//             console.log(`Added ${liquid[0]} and ${liquid[1]}`);

//             setTimeout(() => {
//                 console.log("Machine has started")

//                 setTimeout(() => {
//                     console.log(`${holder[0]} is selected`)

//                     setTimeout(() => {
//                         console.log(`${toppings[0]} is selected as toppings`);

//                         setTimeout(() => {
//                             console.log("Serve Ice Cream")
//                         }, 2000)
//                     }, 2000) 
//                 }, 2000)
//             }, 1000)
//         }, 1000)
//     }, 2000)
// };

// order(0, production);



//        With promises 
// .then() function is executed when the promise is resolved
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a===2){
        resolve("Resolved");
    } else {
        reject("Failed");
    }
});

// .then() runs for resolve
p.then((message) => {
    console.log("Promise: " + message)
}).catch((message) => {
    console.log("Promise: " + message)
}).finally(() => {
    console.log("I will always run")
})


// Callback hell

const userLeft = true;
const userWatchingCatMeme = false;

// Function definition
function watchCallbackTutorial(callback, errorCallback){
    if(userLeft){     
        // function call  
        errorCallback( {
            name: "User Left",
            message: "):"
        })   
    } else if(userWatchingCatMeme){       
        // function call
        errorCallback( {
            name: "User Watching Cat Meme",
            message: "WebDev Simplified < 3"
        })   
    } else {
        // function call
        callback("Thumbs up and subscribe")
    }
}

// function call
// watchCallbackTutorial((message) => {
//     console.log("Success: " + message)
// }, (error) => {
//     console.log(error.name + " " + error.message)
// });


function watchPromiseTutorial(callback, errorCallback){
    return new Promise((resolve, reject) => {
        if(userLeft){     
            // function call  
            reject( {
                name: "User Left",
                message: "):"
            })   
        } else if(userWatchingCatMeme){       
            // function call
            reject( {
                name: "User Watching Cat Meme",
                message: "WebDev Simplified < 3"
            })   
        } else {
            // function call
            resolve("Thumbs up and subscribe")
        }
    });
}

watchPromiseTutorial().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message)
});


// Run all promises on the same time

// const recordVideoOne = new Promise((resolve, reject) => {
//     console.log("Video 1 recorded")
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     console.log("Video 2 recorded")
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     console.log("Video 3 recorded")
// })

// Promise.all([
//     recordVideoOne, recordVideoTwo, recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// })

function printNumsAfterGivenSecs(num, secsToWait){
        return new Promise((resolve, reject) => {
        
        if(isNaN(num)){
            reject(`${num} is not a number`)
        } else {
            setTimeout(() => {
                console.log(num);
                resolve();
            }, secsToWait)
        }

    })
}

//      Print numbers after 1 sec (i.e. Print 1, after 1 sec of printing 1 print 2, after 1 sec of printing 2 print 3)
// printNumsAfterGivenSecs(1, 1000)
//     .then(() => printNumsAfterGivenSecs(2, 1000))
//     .then(() => printNumsAfterGivenSecs(3, 1000))

    //      Print numbers after given secs (i.e. Print 1, after 2 secs of printing 1 print 2, after 1 sec of printing 2 print 3)
printNumsAfterGivenSecs(1, 1000)
    .then(() => printNumsAfterGivenSecs(2, 2000))
    .then(() => printNumsAfterGivenSecs(3, 1000))