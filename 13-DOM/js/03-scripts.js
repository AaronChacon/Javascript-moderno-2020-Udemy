//getElementById
// Si encontrar 2 ids iguales getElementById seleccionara el primero

const formulario = document.getElementById('formulario');
console.log(formulario);

// Si el ID no existe - retorna null

const no_existe = document.getElementById('no_existe');
console.log(no_existe);