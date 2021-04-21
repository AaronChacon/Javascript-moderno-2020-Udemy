const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado ${pais}`);
    callback();
    
}

function mostrarPaises(){
    console.log(paises);

}

function iniciarCallBackHell() {

    setTimeout(() => {
        nuevoPais('Brazil', mostrarPaises);
        
        setTimeout(() => {
            nuevoPais('Venezuela', mostrarPaises);
            
            setTimeout(() => {
                nuevoPais('Colombia', mostrarPaises);

                setTimeout(() => {
                    nuevoPais('Argentina', mostrarPaises);
                }, 3000);

            }, 3000);
            
        }, 3000);

    }, 3000);
    
}


iniciarCallBackHell()