const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  function fetchPersonById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const person = persons.find(item => item.id === id);
  
        if (person) {
          return resolve(JSON.stringify(person));
        }
  
        return reject(`Person with id: ${id} doesn't exist`);
      }, 1000);
    });
  }
  
//   fetchPersonById(2)
//     .then((personJson) => JSON.parse(personJson))
//     .then((person) => console.log(person))
//     .catch((err) => console.error(err));

async function f() {
    let generic = await fetchPersonById(1);
    let person = await JSON.parse(generic);
    console.log(person);
}
f();