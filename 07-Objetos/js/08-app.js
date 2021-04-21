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

//Object.freeze()

/* El método Object.freeze() congela un objeto, es decir: impide 
que se le agreguen nuevas propiedades; impide que se puedan 
eliminar las propiedades ya existentes; impide que dichas 
propiedades, o su capacidad de enumeración, configuración, o 
escritura, puedan ser modificadas; impide también que se pueda 
modificar su prototipo. El método devuelve el objeto recibido. */

Object.freeze(producto)

/* producto.disponible = false;
producto.img = 'img.jpg'; */

console.log(producto);

console.log(Object.isFrozen(producto));
