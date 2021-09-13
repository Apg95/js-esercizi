const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    job: 'Web Developer',
    
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    info() {
        return `${this.fullName()}, ${this.age} ${this.job}`;
    }
  }
  
  console.log(person.fullName());
  console.log(person.info()); 