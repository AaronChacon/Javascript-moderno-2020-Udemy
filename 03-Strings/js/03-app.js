const producto = 'Monitor 20 pulgadas';
const precio = '30 USD';

/* Formas de concatenar string */

// 1 - Concat

/* El método concat() se utiliza para combinar dos o 
más cadenas. Este método no cambia las cadenas existentes, 
sino que retorna una nueva cadena. */

console.log(producto.concat(' '+ precio));
console.log(producto.concat(' en descuento'));

// 2 - Con el +

console.log(producto + "con un precio de: " + precio);
console.log("El producto: " + producto + " tiene un precio de: " + precio);

// 3 - templated string o template literal `` - BACKTICK

/* Las plantillas de cadena de texto se delimitan 
con el caracter de comillas o tildes invertidas (` `) (grave accent) , 
en lugar de las comillas simples o dobles. Las plantillas de cadena de 
texto pueden contener marcadores, identificados por el signo de dólar, 
y envueltos en llaves (${expresión}). */

console.log(`EL producto: ${producto} tiene un precio de ${precio}`);