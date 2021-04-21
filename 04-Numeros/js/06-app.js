

const numero = "20"
const numero1 = "20.2"
const numero2 = "uno"
const numero3 = 20

console.log((numero));
console.log(Number(numero));
console.log(Number.parseInt(numero));

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero1));

console.log(Number.parseFloat(numero2));


// Revisar si es un numero entero o no

console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero3));