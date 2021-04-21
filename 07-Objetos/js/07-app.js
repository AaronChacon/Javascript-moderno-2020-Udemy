// Const
// al definir un objeto mediante const esta aun puede ser modificada
// cambiando el contenido del objeto o eliminando algun parametro

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;

console.log(producto);

