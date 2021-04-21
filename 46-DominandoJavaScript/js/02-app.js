
// function declaration

obtenerClientes('aaron');

function obtenerClientes(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// funtion expresion

obtenerClientes2('aaron')

const obtenerClientes2 = function(nombre) {
    console.log(`El nombre dle cliente es ${nombre}`);
}