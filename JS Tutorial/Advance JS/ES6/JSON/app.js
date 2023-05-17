// app.js is connected with JSON.html
// Retreiving data from server
let data = `{
    "students": [
        {
            "name": "Asad",
            "age": 18
        },
        {
            "name": "Awais",
            "age": 13
        },
        {
            "name": "Uzair",
            "age": 13
        }
    ]
}`
// We store data retreive from json in JS like above
// Now we've to make it object of JS using JSON.parse()

let jsonDataObject = JSON.parse(data);

console.log(jsonDataObject.students[1]);




// Sending data to server
let student = {
    fname: "Awais",
    lname: "Samo",
    age: 13,
    city: "T.A.Y",
    fullname: function(){       
        return `${this.fname} ${this.lname}`;
    }
}


// We've to convert object to JSON first using JSON.stringify(object)
let jData = JSON.stringify(student);     // Now we can send it to server using either FetchAPI or Ajax
console.log(jData)

// Functions will not be stringified, so we will use "student.fullName.toString()" to stringify student.fullName
student.fullName = student.fullname.toString();
jData = JSON.stringify(student);     
console.log(jData)