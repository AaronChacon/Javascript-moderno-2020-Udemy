const producto = 'Monitor 20 Pulgadas';

console.log(producto);

//replace() - para reemplazar

/* El método replace() devuelve una nueva cadena con algunas 
o todas las coincidencias de un patrón, siendo cada una de 
estas coincidencias reemplazadas por remplazo. El patrón puede 
ser una cadena o una RegExp, y el reemplazo puede ser una cadena 
o una función que será llamada para cada coincidencia. Si el patrón 
es una cadena, sólo la primera coincidencia será reemplazada. */

console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));


//slice() - para cortar

/* El método slice() extrae una sección de una cadena y devuelve
una cadena nueva. */

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

//Substring - alternativa a slice()

/* Se difentencia con slice por que este identifica cuando el primer
parametros es mayor al segundo y lo modifica invirtiendolo. En el
caso de slice no hace nada */

console.log(producto.substring(0,10));
console.log(producto.substring(2,1));


/* Obteniendo la Iniciald e un String. */

const usuario = 'Aaron';

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));