
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


console.log('------------------------------------');

//FOREACH

/* El método forEach() ejecuta la función indicada una vez por cada 
elemento del array. */

const nuevoArreglo = carrito.forEach(function(producto){
    console.log( `${producto.nombre} - Precio: ${producto.precio}`);
});

//MAP

/* El método map() crea un nuevo array con los resultados de la llamada 
a la función indicada aplicados a cada uno de sus elementos.

Se diferencia de un foreach ya que el map crea un nuevo arreglo y este
ultimo no */

const nuevoArreglo2 = carrito.map(function(producto){
    return  `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log('------------------------------------');

console.log(nuevoArreglo);
console.log(nuevoArreglo2);