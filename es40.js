class Person {
    constructor (firstName, lastName, age) {
        this.firstName =  firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get _firstName() {
        return this.firstName;
    }
    set _firstName (value) {
        this.firstName = value;
    }
    get _lastName () {
        return this.lastName;
    }
    set _lastName (value) {
        this.lastName = value;
    }
    get _age () {
        return this.age;
    }
    set _age (value) {
        this.age = value;
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}
  


  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName);