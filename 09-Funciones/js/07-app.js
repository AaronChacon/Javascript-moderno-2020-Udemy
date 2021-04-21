iniciarApp()

function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuntion();
}

function segundaFuntion() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Aaron');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}