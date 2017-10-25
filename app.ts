class Person {
    name: string;
    private type: string;
    protected age: number = 47;
    
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log('Age: ', this.age);
        this.setType('Front End Developer');
    }

    private setType(type: string) {
        this.type = type;
        console.log('Type: ', this.type);
    }
}

const person = new Person('Norm Glomski', 'nglomski');
console.log('Name: ', person.name);
console.log('Username: ', person.username);
person.printAge();

//Inheritance
class Norm extends Person {
    constructor(username: string) {
        super( 'Norm Glomski', username);
        this.age = 31;
    }
}
const person2 = new Norm('normando2');
console.log('Person2: ', person2);