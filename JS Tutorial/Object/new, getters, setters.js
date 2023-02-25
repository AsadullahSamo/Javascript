// Ctrl+Shift+R after highlighting (shortcut for getters and setters)

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

