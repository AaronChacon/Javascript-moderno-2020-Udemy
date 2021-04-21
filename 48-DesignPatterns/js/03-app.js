
// Singleton

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else { 
            return instancia
        }
    }
}

const persona = new Persona('Aaron', 'mail@aaronch.com');
console.log(persona);

const persona2 = new Persona('Mariam', 'mail@mariamLevy.com');
console.log(persona2);