const usuario = false;
const puedePagar = true;

if( usuario && puedePagar ){
    console.log('si puedes comprar');
} else if (!usuario) {
    console.log('Inicia sesion');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No puedes comprar');
}