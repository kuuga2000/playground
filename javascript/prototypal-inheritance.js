//Prototypal Inheritance

//Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function () {
    /* const x = this.firstName;
    return {
        name: 'bb',
        dd: function() {
            return x;
        },
        bc: function() {
            return this.zz();
        },
        zz: function() {
            return 'aaa';
        }
    } */
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const Person1 = new Person('John', 'Doe');

//console.log(Person1.greeting());

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
//Customer.prototype.constructor = Customer;

//Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Create customer 
const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'Standard');
//console.log(customer1);

//Customer Greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} ${this.phone} welcome to our company`;
}
console.log(customer1.greeting());