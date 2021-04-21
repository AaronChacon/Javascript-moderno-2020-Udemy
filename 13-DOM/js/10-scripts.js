/* 
const enlace = document.createElement('a'); //pasas la etiqueta

// agregando el texto
enlace.textContent='Nuevo enlace';

//enlace.href
enlace.href = '/nuevo-enlace';
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

console.log(enlace);


// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert('Click')
} 

*/


// Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

console.log(parrafo3);

// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// crear la imagen 
const imagen =document.createElement('img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);

// crear el card

const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info)

console.log(card);

//Insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');

/* contenedor.appendChild(card); */
contenedor.insertBefore(card, contenedor.children[0]);