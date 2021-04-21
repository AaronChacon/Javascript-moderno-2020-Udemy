const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//object Destructuring - crea una nueva variable extranyendo 
//el valor seleccionado

const { disponible } = producto

console.log(disponible);

//Destructuting con arreglos

const numeros = [10, 20, 30, 40, 50]

const [, , tercero] = numeros
const [, , , ...rest] = numeros

console.log(tercero);
console.log(rest);