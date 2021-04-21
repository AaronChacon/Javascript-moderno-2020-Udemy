
// La forma imperativa modifica el objeto actual 
// La forma declarativa no modifica el objeto, crea uno nuevo

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

const producto4 = {
    nombre: 'Mouses',
    precio: 150
}

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)
carrito.push(producto4)
console.table(carrito)

// POP

/* El método pop() elimina el último elemento de un array y lo devuelve. 
Este método cambia la longitud del array. */

carrito.pop();
console.table(carrito)

//SHIFT

/* El método shift() elimina el primer elemento del array y lo retorna.
Este método modifica la longitud del array. */

carrito.shift();
console.table(carrito)

//SPLICE

/* El método splice() cambia el contenido de un array eliminando elementos
existentes y/o agregando nuevos elementos. */

carrito.splice(1,1)
console.table(carrito)

