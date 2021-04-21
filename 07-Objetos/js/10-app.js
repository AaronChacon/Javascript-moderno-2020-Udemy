const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto); 
console.log(medidas); 

//Object.assign

/* El método Object.assign() copia todas las propiedades enumerables 
de uno o más objetos fuente a un objeto destino. Devuelve el objeto 
destino. 
 */

const resultado = Object.assign(producto, medidas);

//Spread Operator o rest operator

/* La sintaxis extendida o spread syntax permite a un elemento iterable 
tal como un arreglo o cadena ser expandido en lugares donde cero 
o más argumentos (para llamadas de  función) o elementos 
(para Array literales) son esperados, o a un objeto ser expandido 
en lugares donde cero o más pares de valores clave (para literales 
    Tipo Objeto) son esperados. */

const resultado2 = {...producto, ...medidas}


console.log(resultado);
console.log(resultado2);