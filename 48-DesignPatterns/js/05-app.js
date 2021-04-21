
// Module Pattern

const module1 = (function() {
    const nombre = 'aaron';
    
    function hola() {
        console.log('hola');
    } 

    return {
        nombre,
        hola
    }
})();


const mostrarCliente = nombre => {
    console.log(nombre)
}

export default mostrarCliente;