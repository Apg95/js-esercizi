const person = {
  get firstName() {
    return this._firstName;
  },

  set firstName(name) {
    this._firstName = name;
  },

  get lastName() {
    return this._lastName;
  },

  set lastName(name) {
    this._lastName = name;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = 'John';
simon.firstName = 'Simon';
john.lastName = 'Doe';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
