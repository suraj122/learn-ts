"use strict";
class Logger {
    constructor(name) {
        this.name = name;
    }
    writing() {
        console.log(`Editing ${this.name}`);
    }
}
class Person {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstname + " " + this.lastName;
    }
}
class Employee extends Person {
    constructor(salary, firstname, lastName) {
        super(firstname, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=exercise3.js.map