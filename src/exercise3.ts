// Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.


class Logger {
  
  constructor(public name: string){}

  writing() {
    console.log(`Editing ${this.name}`);
  }
}

// Given the Person class below, create a getter for getting the full name of a person.

class Person {
  constructor(public firstname: string, public lastName: string){}

  get fullName() {
    return this.firstname + " " + this.lastName
  }
}

// Create a new class called Employee that extends Person and adds a new property called salary. 
class Employee extends Person {
  constructor(public salary: number,  firstname:string, lastName:string){
    super(firstname, lastName)
  }
}

// What is the difference between private and protected members?

// Given the data below, define an interface for representing employees: 
// let employee = {name:'John Smith',salary:50_000,address:{street:'Flinders st',city:'Melbourne',zipCode:3144,},};

interface Address {
  street: string,
  city: string,
  zipcode: number
}

interface Employee {
  name: string,
  salary: number,
  address: Address
}