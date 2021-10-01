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
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  function fetchPersonById(id) {
    return new Promise((resolve,reject) => { 
      setTimeout(() => {
        let response = persons.find((item => item.id === id));
        
        if (response) {
          return resolve (JSON.stringify(response));
        }else return reject();
      }, 1000);
    });
  }

  function fetchJobById(id) {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        let item = jobs.find((item => item.id === id));

        if (item) {
          return resolve (JSON.stringify(item));
        }else return reject;
      },1000)
    });  
  };

Promise.all([fetchPersonById(1), fetchJobById(2)])
.then((items) => items.map(item => JSON.parse(item)))
.then((items) => console.log(items));
