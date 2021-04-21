
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo','junio']

console.table(meses);

/* 
Cuanto mide el arreglo - 
Usar la propiedad length
La propiedad length de un objeto String representa la longitud de una
cadena, en unidades de código UTF-16. 
*/

console.log(meses.length);



//

for (let i = 0; i < meses.length; i++ ) {
    console.log(meses[i]);
}