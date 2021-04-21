
/* 
    Ventajas de Hacer Testing

    - Mejorara la calidad de tu software evitando bugs.

    - Probar todos los diferentes escenaris puede ser complicado
    o tardar demasido, pero existen herramientas que automatizan
    las pruebas de nuestros proyectos.

    - Libera nuevas versiones sin las preocupaciones de que algo 
    salga mal.

    Consideraciones con el Testing

    - ¿Cuantas veces has agregado nuevas funciones a aun proyectos
    existente pero desconoces si funciona bien con lo existente?
        Testear te da la tanquilidad de integrar sin errores

    - Tener pruebas hara que una persona que no ha mantenido un 
    proyecto conozca que es hace cada parte.

    - No haras pruebas de todo, mas bien de como se integran
    diferentes partes de la aplicacion.

    Diferentes tipos de Testing

    - End to End - Integracion - Unit - Static.

    Herramientas para Testing

    - Jest La herramienta mas popular.

    - Cypress.


 */


 // Probar 2 valores


function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


let resultado = suma(1,2);

let esperado = 3;

if (resultado !== esperado) {
    console.error('Error');
} else {
    console.log('Correcto');
}

resultado = restar(10,5);

esperado = 6;

if (resultado !== esperado) {
    console.error('Error');
} else {
    console.log('Correcto');
}