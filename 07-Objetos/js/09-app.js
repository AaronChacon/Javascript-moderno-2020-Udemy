"use strict";

//Use strict

/* El modo estricto de ECMAScript 5 es una forma de elegir una 
variante restringida de JavaScript, así implícitamente se deja 
de lado el modo poco riguroso. */


const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object Methods 

//Object.seal()

/* El método Object.seal() sella un objeto, previniendo que puedan 
añadirse nuevas propiedades al mismo, y marcando todas las propiedades 
existentes como no-configurables. Los valores de las propiedades 
presentes permanecen pudiendo cambiarse en tanto en cuanto dichas 
propiedades sean de escritura. */

Object.seal(producto)

producto.disponible = false;

console.log(producto);

console.log(Object.isSealed(producto));