
// Mixin Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


const funcionesPersona = {
    mostrartInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es:${this.nombre}`)
    }
} 

// Añadir funcionesPersonas a la clase de persona.

Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Aaron Chacon','mail@aaronch.com');
const cliente2 = new Cliente('Aaron cliente','mail@cliente.com');

console.log(cliente);
cliente.mostrartInformacion();
cliente.mostrarNombre();

console.log(cliente2);
cliente2.mostrartInformacion();
cliente2.mostrarNombre();
