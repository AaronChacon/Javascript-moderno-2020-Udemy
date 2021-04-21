
//Object literal

const cliente = {
    nombre: 'aaron',
    saldo: 1200,
}

console.log(cliente);
console.log( typeof cliente);



// Object constructor

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const aaron = new Cliente('aaron', 1500)

console.log(aaron);