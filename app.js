"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, username) {
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
person.printAge();
//Inheritance
var Norm = (function (_super) {
    __extends(Norm, _super);
    function Norm(username) {
        var _this = _super.call(this, 'Norm Glomski', username) || this;
        _this.age = 31;
        return _this;
    }
    return Norm;
}(Person));
var person2 = new Norm('normando2');
console.log('Person2: ', person2);
