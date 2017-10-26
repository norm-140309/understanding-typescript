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

//Getters and Setters
class Plant {
    private _species: string = "Default";
    get species() {
        return this._species;
    }
    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    } 
}
let plant = new Plant();
plant.species = 'Rose';
console.log('plant:', plant.species);

//Static Properties and Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log('PI:', 2 * Helpers.PI);
console.log('Circumference:', Helpers.calcCircumference(8));

//Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log('newProject:', newProject);
newProject.changeName("Super IT Project");
console.log('newProject:', newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public name: string) {}
    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log('Right name:', right.name);
