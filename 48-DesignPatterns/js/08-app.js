
// Mediator


function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
    
};

Vendedor.prototype = {
    oferta: ( articulo, precio ) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: (comprador) => {
        console.log(`Vendido a ${comprador}`);
    }
};

function Comprador(nombre) {
    this.nombre = nombre,
    this.sala = null;


};

Comprador.prototype = {
    oferta:(cantidad, comprador) =>{
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
    
};

const aaron = new Comprador('aaron');
const alejandro = new Comprador('alejandro');
const vendedor = new Vendedor('Mariam - Vendedora de Autos');
const subasta = new Subasta();

// Subasta tienes que registrarlos
subasta.registrar(aaron);
subasta.registrar(alejandro);
subasta.registrar(vendedor);

vendedor.oferta('Toyota 99', 800);

aaron.oferta(850, aaron);
alejandro.oferta(950,alejandro);
aaron.oferta(1200, aaron);

vendedor.vendido('aaron')