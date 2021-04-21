// Class Declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

//Instanciar a la nueva clase
const aaron = new Cliente('Aaron', 1200);
console.log(aaron.mostrarInformacion());
console.log(aaron);

// Class expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

}

const aaron2 = new Cliente2('Aaron', 1300)
console.log(aaron2.mostrarInformacion());
console.log(aaron2);