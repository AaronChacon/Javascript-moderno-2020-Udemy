
// Scope

/* const cliente = 'aaron';

function mostrarCliente() {
    const cliente = 'mariam';
    console.log(cliente);
}

mostrarCliente() */


const login = true;

function clíenteLogeado() {
    const cliente ='aaron';
    console.log(cliente);

    if (login) {
        //console.log(cliente);
        const cliente = 'mariam';
        console.log(cliente);
    }
}

clíenteLogeado()