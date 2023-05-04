// Ctrl+Shift+R after highlighting (shortcut for getters and setters)
// Getters and setters are properties in JS. so don't call them like functions
let person = {
    name: "Asad",
    age: 18,

    // setters
    set setName(value) {
        this.name = value;
    },
    set setAge(value) {
        this.age = value;
    },


    // getters
    get getName() {
        return this.name;
    },
    get getAge() {
        return this.age;
    },
    

    // normal function
    // getName: function(){
    //     return this.name.toUpperCase();
    // }
};

person.setName = "Awais";       // Behave like property so don't call it
console.log(person.getName);

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
