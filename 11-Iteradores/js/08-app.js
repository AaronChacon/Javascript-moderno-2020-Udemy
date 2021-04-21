// for in

const automovil = {
    modelo: 'camaro',
    year: 1969,
    motor: '6.0'

}

/* for (const propiedad in automovil) {
   console.log(`${automovil[propiedad]}`);
} */

for (let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave}: ${valor}`);
}