function sum(...num) {
    return num.reduce ((previousValue, currentValue) => previousValue + currentValue);
}

console.log(sum(1, 2, 3, 4, 5));