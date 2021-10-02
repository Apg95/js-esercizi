const firstI = document.getElementById('firstName');
const lastI = document.getElementById('lastName');
const ageI = document.getElementById('age');

const person = {
firstName : firstI.value,
lastName : lastI.value,
age : ageI.value,
};

const forM = document.querySelector('form');
forM.setAttribute('data-person', JSON.stringify(person));
console.log(forM);