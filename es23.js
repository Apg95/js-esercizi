const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }

  for (const iterator of Object.keys(person)){
     console.log(`${iterator}: ${person[iterator]}`);
  }