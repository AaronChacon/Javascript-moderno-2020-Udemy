

const carrito = [];

// definir producto

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Forma declarativa

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado,]


console.table(resultado)
