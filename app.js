"use strict";
var Person = (function () {
    function Person(name, username, age) {
        this.username = username;
        this.age = 47;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log('Age: ', this.age);
        this.setType('Front End Developer');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log('Type: ', this.type);
    };
    return Person;
}());
var person = new Person('Norm Glomski', 'nglomski');
console.log('Name: ', person.name);
console.log('Username: ', person.username);
person.setType('Programmer');
person.printAge();
