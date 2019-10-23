const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);


const filter = (...args) => {
    return args.filter(el => el === 2);
}
console.log(filter(1, 2, 3, 2));