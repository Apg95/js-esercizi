const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  };
  
  const json = JSON.stringify(person, (key, value) => {
    console.log(typeof key);
    if (typeof value === 'string'){
      return undefined;
    }else return value;
  });
  
  console.log(json);