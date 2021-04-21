

const nav = document.querySelector('.navegacion');

// registrar  un evento

// click
nav.addEventListener('click', () => {
    console.log('click');
})

// Mouse enter 
nav.addEventListener('mouseenter', () => {
    console.log('Entrando');
})

// Mouse out 
nav.addEventListener('mouseout', () => {
    console.log('Saliendo');
})

// Mouse down
nav.addEventListener('mousedown', () => {
    console.log('click mouse down');
})

// Mouse up
nav.addEventListener('mouseup', () => {
    console.log('click mouse up');
})

// doble click
nav.addEventListener('dbclick', () => {
    console.log('doble click');
})

