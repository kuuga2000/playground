/**
 * Prototypes Explained
 */
function Person(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
//get Full Name
Person.prototype.getFulName = function() {
    return `${this.firstname} ${this.lastname}`;
}

//get Married
Person.prototype.getsMaried = function(newLastName) {
    this.lastname =  newLastName;
}
const brad = new Person('Darklop', 'Zero' ,30);
const dgea = new Person('David', 'De Gea', 29);
console.log(brad.getsMaried('Zero One'));
console.log(`${brad.getFulName()} : ${dgea.age}`);
console.log(brad.hasOwnProperty('getFullName'));
