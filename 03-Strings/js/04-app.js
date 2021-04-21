
const producto = '        Monitor 20 pulgadas             ';

console.log(producto);
console.log(producto.length);


//trimStart
/* The trimStart() method removes whitespace from the beginning
of a string. trimLeft() is an alias of this method. */

//Eliminar los espacio en el inicio de un string
console.log(producto.trimStart());
console.log(producto.trimStart().length);

//trimEnd
/* El método trimEnd() elimina los espacios en blanco al final de 
una cadena de carácteres. trimRight() es el alias de este método. */

//Eliminar los espacio al final de un string
console.log(producto.trimEnd());
console.log(producto.trimEnd().length);


/* En javascript se pueden encadenar metodos esto se le denomina 
"chaining method" */

//Eliminar los espacio al final de un string
console.log(producto.trimStart().trimEnd());
console.log(producto.trimStart().trimEnd().length);


//trim()

/* El método trim( ) elimina los espacios en blanco en ambos extremos 
del string. Los espacios en blanco en este contexto, son todos los 
caracteres sin contenido (espacio, tabulación, etc.) y todos los 
caracteres de nuevas lineas (LF,CR,etc.). */

//Eliminar los espacio al final de un string
console.log(producto.trim());
console.log(producto.trim().length);