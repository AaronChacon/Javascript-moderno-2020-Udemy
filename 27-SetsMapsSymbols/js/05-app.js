
// Simbols

const sym = Symbol('1');
const sym2 = Symbol('1');

// No son iguales nunca

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// agregar nombre y apellido

persona[nombre] = 'aaron';
persona[apellido] = 'chacon';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);


// las propiedades que utilizan un symbol no son iterrables

// definir una descriptcion del symbol

const nombreCliente = Symbol('Nombre del cliente');

const cliente = {};

cliente[nombreCliente] = "PEDRO";

console.log(cliente);