const producto = 'Monitor 20 Pulgadas ';

//repeat

/* El método repeat() construye y devuelve una nueva cadena
que contiene el número especificado de copias de la cadena 
en la cual fue llamada, concatenados. */
// si el numero no es entero este lo redondea.

const texto = 'en promocion '.repeat(3)
console.log(texto);
console.log(`${producto} ${texto}!!`);

//Split, dividir un string

/* El método split() divide un objeto de tipo String en un array 
(vector) de cadenas mediante la separación de la cadena en 
subcadenas. */


const actividad = 'Estoy aprendiendo Javascript Moderno'
console.log(actividad.split(' '));

const hobbie = 'leer, caminar, escuchar musica, programar'
console.log(hobbie.split(' '));

const tweet = 'Aprendiendo Javascript Moderno, #JSModernoConJuan';
console.log(tweet.split('#'));


