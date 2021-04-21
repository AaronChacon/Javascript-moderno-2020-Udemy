

const aplicarDescuento = new Promise((resolve, reject )=>{

    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado')
    } else {
        reject('No se aplico el despueto')
    }

});

aplicarDescuento
    .then( resultado => descuento(resultado) )
    .catch( error => console.log(error) )


function descuento(mensaje) {
    console.log(mensaje);
}


/* 

3 valores posibles...
fulfilled - El promise se cumplio
uncaught - rejected - el promise no se cumplio
pending - No se cumplio y tampoco fue rechazo
*/

