const producto = {
    //llave:valor
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


console.log(producto.nombre);

//object destructuring - crea una nueva variable extranyendo 
//el valor seleccionado

const { nombre, precio } = producto

console.log(nombre);
console.log(precio);