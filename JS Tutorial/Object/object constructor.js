// let student = {
//     name: "Asad",
//     age: 18,
//     favGame: "ROTTR",
// }

// same as above
// It is constructor
function Student(name, age, favGame){
    this.name = name;
    this.age = age;
    this.favGame = favGame;

    this.description = function(){
        return this.name + " " + this.age; 
    }
}

let student1 = new Student("Asad", 18, "ROTTR");
let student2 = new Student("Awais", 14, "GTA V");

console.log(student2.favGame);
console.log(student1.favGame);
console.log(student2.description());


// Prototype: A way to add functions and properties outside of constructor

// Student.nationality = "Pakistan";  this is not a valid way to add property in constuctor
// So, we use object prototype
Student.prototype.nationality = "Pakistan";



let student3 = new Student("Awais", 14, "GTA V", "abc");
console.log(student3.nationality);