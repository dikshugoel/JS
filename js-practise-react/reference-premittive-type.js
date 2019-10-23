const person = {
    name: 'Max'
};

const secondPerson = { ...person }

person.name = 'Manu';

console.log(secondPerson); // return object same as person