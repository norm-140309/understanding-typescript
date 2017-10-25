class Person {
    name: string;
    private type: string;
    protected age: number = 47;
    
    constructor(name: string, public username: string, age: number) {
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
person.setType('Programmer');
person.printAge();
