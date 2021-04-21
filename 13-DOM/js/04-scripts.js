// QuerySelector
// En el caso que existan elementos con el mismo selector querySelector
// retornara el primer elemento que encuentre en el DOM.

const card = document.querySelector('.card');
console.log(card);

// podemos tener selectores especificos como en CSS

const info = document.querySelector('.premium .info ')
console.log(info);

// Seleccionar el segundo card de hospedaje

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard);

//Seleccionar mediante ID

const formulario = document.querySelector('#formulario');
console.log(formulario);

// seleccionar elementos HTML
const navegacion = document.querySelector('Nav')
console.log(navegacion);