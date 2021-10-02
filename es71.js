const mario = document.querySelector('#firstName');
const closeL = mario.previousElementSibling;
console.log(closeL.textContent, mario.value);

const rossi = document.querySelector('#lastName');
const closeS = rossi.previousElementSibling;
console.log(closeS.textContent, rossi.value);

const anni = document.querySelector('#age');
const closeA = anni.previousElementSibling;
console.log(closeA.textContent, anni.value);