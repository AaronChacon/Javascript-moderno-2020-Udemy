function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const aaron = new Cliente('aaron', 1500)

console.log(aaron);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresas(cliente) {
    const { nombre, saldo, categoria } = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo} y su categoria es ${categoria}`
}

console.log(formatearCliente(aaron));

function Empresas(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const DSA = new Empresas('Desarrollo de Software con aaronch', 4000, 'Desarrollo web');

console.log(DSA);

console.log(formatearEmpresas(DSA));