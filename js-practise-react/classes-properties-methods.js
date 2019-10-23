class Human {

    gender = 'Male';

    printMygender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {

    name = 'Max';
    gender = 'FeMale';

    printMyname = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyname();
person.printMygender();