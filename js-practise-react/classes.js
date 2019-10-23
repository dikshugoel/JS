class Human {
    constructor() {
        this.gender = 'Male';
    }

    printMygender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // Super If we extends class
        this.name = 'Max';
        this.gender = 'FeMale';
    }

    printMyname() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printMygender();