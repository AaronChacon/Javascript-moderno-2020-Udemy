
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Object.Keys

/* El método Object.keys() devuelve un array de las propiedades 
names de un objeto, en el mismo orden como se obtienen en un loop 
normal */

console.log(Object.keys(producto));

//Object.values

/* El método Object.values() devuelve un array con los valores 
correspondientes a las propiedades enumerables de un objeto. Las 
propiedades son devueltas en el mismo orden a como lo haría un bucle 
for...in (la única diferencia es que un bucle for-in también enumera 
las propiedades en la cadena de prototipo de un objeto). */

console.log(Object.values(producto));

// Object.entries

/* El método Object.entries() devuelve una matriz de pares propios de una 
propiedad enumerable [key, value] de un objeto dado, en el mismo orden 
que es proporcionado por for...in (La diferencia es que un bucle for-in 
enumera las propiedades en la cadena de prototipos). */

console.log(Object.entries(producto));