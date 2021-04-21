
/* const meses = ['enero', 'febrero', 'marzo']; */

/* meses[3] = 'abril' */

/* Metodos */

//Agregar al final del arreglo
/* meses.push('abril');
meses.push('mayo');

console.table(meses); */

const carrito = [];

// definir producto

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//PUSH

/* El método push() añade uno o más elementos al final de un array y 
devuelve la nueva longitud del array. */

carrito.push(producto)
carrito.push(producto2)

//UNSHIFT

/* El método unshift() agrega uno o más elementos al inicio del array, y
devuelve la nueva longitud del array. */


carrito.unshift(producto3)

console.table(carrito)
