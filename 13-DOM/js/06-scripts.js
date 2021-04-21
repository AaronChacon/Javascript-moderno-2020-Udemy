
const title = document.querySelector('.contenido-hero h1');
console.log(title);


/* //acceder al contenido

console.log(title.innerText); // si en el css - visibility: hidden; no lo va a mostrar

console.log(title.textContent); // si en el css - visibility: hidden; Si lo va a mostrar

//acceder al html
console.log(title.innerHTML); */

document.querySelector('.contenido-hero h1').textContent = 'Nuevo contenido';