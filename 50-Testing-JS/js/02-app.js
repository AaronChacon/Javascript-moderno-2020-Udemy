 // Probar 2 valores


 function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


let resultado = suma(1,2);

let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10,5);

esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);



function expected(esperado) {
    return {
        toBe(resultado) { 
            if (resultado !== esperado) {
                console.error('Error');
            } else {
                console.log('Correcto');
            }
        },
        toEqual(resultado) { 
            if (resultado === esperado) {
                console.error('Error - No es igual');
            } else {
                console.log('Correcto');
            }
        }
    }
}