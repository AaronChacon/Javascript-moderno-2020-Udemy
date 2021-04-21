

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenida al cajero`
    }
}

// Herencia

class Empresa extends Cliente {

    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo)
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return `Bienvenida al cajero de empresas`
    }

}




const aaron = new Cliente('Aaron', 1200);
const empresa = new Empresa('Aaronch.com', 100200, 12345, 'Desarrollo Web');

console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());
console.log(empresa);