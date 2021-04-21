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



// instanciarlo
const aaron = new Cliente('aaron', 6000);
console.log(
    aaron.tipoCliente()
);
    
console.log(
    aaron.nombreClienteSaldo()    
);

aaron.retirarSaldo(1000);

console.log(
    aaron.nombreClienteSaldo()    
);

console.log(aaron);


/* function Empresas(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const DSA = new Empresas('Desarrollo de Software con aaronch', 4000, 'Desarrollo web');

console.log(DSA); */