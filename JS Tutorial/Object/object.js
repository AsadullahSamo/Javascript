// It has properties and functions

// Trick: If noun is found in programming make its object

// Syntax:
let person = {
    firstName: 'Asadullah',
    lastName:  'Samo',
    age: 18,

    eat: function (){
        console.log("Asad is eating");
    },
    // this keyword
    printInfo: function(){
        console.log("My name is "+this.firstName +" and my age is "+this.age);
    }
};

console.log("First name of person is " + person.firstName);
// or to access it second way is 
console.log("Age of person is " + person['age']);
console.log(person);
console.log("As address is not property of person so I am giving "+person.address);      // As address is not property of person, output will be undefined

person.rollNumber = "xyz";     // now rollnumber is also property of person
console.log("Roll number of person is " + person.rollNumber);
console.log(person);

// to delete property of object
delete person.lastName;     // to delete property of person(object)
console.log(person);

// To find out whether height is property of person or not, we have two methods
//  1. console.log(person.height);     // if output is undefined, height is not property of person
//  2.  Using in --> returns true or false
console.log('height' in person);
let response = 'age' in person;
console.log(response);

// Iterating properties of object
for (const key in person) {
    console.log(key+": "+person[key]);            
}

person.eat();
person.printInfo();

// this is used to access same property in same object