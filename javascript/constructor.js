/**
 * Constructors & the 'this' Keyword
 */
function Person(name, age){
    this.name = name;
    this.age = age;
}

const brad = new Person('Butland' ,30);
const dgea = new Person('De Gea', 29);
console.log(`${dgea.name} : ${dgea.age}`);
