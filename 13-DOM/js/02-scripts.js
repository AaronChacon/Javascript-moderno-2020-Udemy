
// Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header')
console.log(header);

const hero = document.getElementsByClassName('hero')
console.log(hero);

// si las clases existen ma de 1 vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si la clase no existe - retorna un array vacio []

const no_existe = document.getElementsByClassName('no_existe');
console.log(no_existe);