
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('Todo bien!!');
            } else{
                reject('Error')
            }
        }, 3000);
    })
};

// async await

async function ejecutar() {
    try {
        console.log(2+3);
        const respuesta = await descargarClientes();
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar()