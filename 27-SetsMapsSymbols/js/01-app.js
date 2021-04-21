/* 

SET

The Set object lets you store unique values of any type, 
whether primitive values or object references.

No tiene llave: valor, No almacenan valores duplicados y son iterables.

*/

const carrito = new Set();

carrito.add('Camisa #1');
carrito.add('Camisa #2');
carrito.add('Camisa #3');

carrito.add('Camisa #4');
carrito.delete('Camisa #4');
/* carrito.clear('Camisa #4'); */

console.log(carrito.size);

// Los set son iterables
carrito.forEach((producto, index, pertenece) => {
    console.log(producto);
});

console.log(carrito);

console.log(
    carrito.has('Camisa #3')
);

console.log(
    carrito.has('Camisa #35')
);


const numeros = [10,20,30,40,50,10, 20]

const noDuplicados = new Set(numeros);

console.log(noDuplicados);