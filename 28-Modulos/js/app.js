
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion()

console.log( nombreCliente );
console.log( ahorro );

console.log(
    mostrarInformacion(nombreCliente, ahorro)
);

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente);
console.log(cliente.mostrarInformacion());


// Importar Empresa

const empresa = new Empresa('Aaronch.com', 1200, 'Desarrollo Web');
console.log(empresa);
console.log(empresa.mostrarInformacion());

