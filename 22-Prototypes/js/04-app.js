function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if ( this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre ${this.nombre}, saldo: ${this.saldo}, tipo: ${this.tipoCliente()} `
}

Cliente.prototype.retirarSaldo = function (retira) {
    this.saldo -= retira
}


function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//Instanciando

const aaron = new Persona('Aaron', 12000, '920-880-485')

console.log(aaron);

