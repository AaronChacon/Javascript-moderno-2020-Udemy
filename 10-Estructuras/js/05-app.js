// Switch case

const metodoPago = 'tarjeta'

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        pagar();
        break;
    case 'tarjeta':
        pagar();
        break;
    default: 
    console.log(`Aun no has seleccionado metodo de pago o metodo de pago no soportado`);
}

function pagar() {
    console.log(`Pagaste con ${metodoPago}`);
}