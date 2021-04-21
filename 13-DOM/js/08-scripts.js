

//Traversing the DOM

const navegacion = document.querySelector('.navegacion')

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);


/* 
console.log(navegacion.childNodes); // Los espacios en blanco son cosiderados elementos
console.log(navegacion.children); // Lista codigo html

console.log(navegacion.children[0]); // Lista codigo html

const card = document.querySelector('.card')

card.children[1].children[1].textContent = 'Nuevo heading desde traversing'

card.children[0].src = 'img/hacer3.jpg'

console.log(card.children[0]); 

*/




// Traversing del hijo al padre
/* 

const card = document.querySelector('.card')

console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement);
console.log(card.parentElement.parentElement.parentElement);

*/

// Traversing hermanos

/* const card = document.querySelector('.card')

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard .previousElementSibling);

*/