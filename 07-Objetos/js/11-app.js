const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

const producto1 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

producto.mostrarInfo()
producto1.mostrarInfo()