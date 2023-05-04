function makeRequest(location){
    
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)

        if(location === "Google"){
            resolve("Google says hi") // the flow goes to 1st then
        } else {
            reject("We can only talk to Google")
        }    
    })

}   // end of makeRequest() function

function processRequest(response){

    return new Promise((resolve, reject) => {
        console.log("Processing Request");
        resolve(`Extra information: ${response}`)    // the flow goes to 2nd then
    })

}

function getRequest(request){

    return new Promise((resolve, reject) => {
        console.log("Getting Request");
        resolve(`Request: ${request}`) // the flow goes to 3rd then
    })

}

// Using promises
console.log("\t\t\t\t\t\t\t\t\t\tPromises")
// makeRequest("Google")
//     .then(response => {
//         console.log("Response received");
//         return processRequest(response);       // response =  "Google says hi"
//     }).then(processResponse => {
//         console.log("Dummy Request");
//         return getRequest(processResponse);    // processResponse = "Extra information: Google says hi"
//     }).then(request => {
//         console.log(request);                  // request = "Request: Extra information: Google says hi"
//     }).catch(error => {
//         console.log(err);
//     })

// Using Async Await
// console.log("\t\t\t\t\t\t\t\t\t\tAsync Await")
// async function doWork(){
//     const response = await makeRequest("Google")     // Wait until makeRequest is finished
//     console.log("Response received");
//     const processResponse = await processRequest(response);
//     console.log("Dummy Request")
//     const Request = await getRequest(processResponse);
//     console.log(Request);
// }

// doWork("Google");


for(let i=0; i<5; i++){

    const log = () => {
        console.log(i);
    }
    
    setTimeout(log, 2000);
 }