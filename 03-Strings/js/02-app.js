const producto = 'Monitor 20 pulgadas';

console.log(producto);

/* 
//////// LENGTH ////////

La propiedad length de un objeto String representa 
la longitud de una cadena, en unidades de código UTF-16. */

//length es un metodo que nos retorna la longitud de un string
//Conocer la cantidad de letras de la cadena de texto

console.log(producto.length);

/* 
////// INDEXOF ////////

El método indexOf() devuelve el índice, dentro del objeto String 
que realiza la llamada, de la primera ocurrencia del valor 
especificado, comenzando la búsqueda desde indiceDesde; o -1 
si no se encuentra dicho valor. */

console.log(producto.indexOf('pulgadas'));

/* 
////// INCLUDES ////////

El método includes() determina si una matriz incluye un determinado 
elemento, devuelve true o false según corresponda. */

console.log(producto.includes('Monitor'));