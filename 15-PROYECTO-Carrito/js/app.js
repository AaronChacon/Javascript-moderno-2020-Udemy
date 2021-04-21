// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

// Event Listeners

cargarEventListeners()
function cargarEventListeners() {
    // Agrega un curso - click 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito 
    carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos del local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    });

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        
        articulosCarrito = []; // reseteamos el arreglo
        limpiarHTML(); // eliminamos todo el html
    })

}

// funciones

// agrega cursos al carrito - funcion principal
function agregarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {

        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Elimina un curso del carrito
function eliminarCurso(e) {


    if (e.target.classList.contains('borrar-curso')) {
        
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articulosCarrito mediante el data-id

        articulosCarrito.map(curso => {

            if (curso.id === cursoId) {
                
                if(curso.cantidad > 1 ){
                    curso.cantidad--;
                    return curso; // retorna el objeto actualizado
                } else {
                    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
                    return articulosCarrito
                }

            }
            

        });

        //console.log(curso);

        //articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        console.log(articulosCarrito);

        carritoHTML() // iterar sobre el carrito y mostrar HTML
    }

}

// Identifica el card del curso y extrae su informacion
function leerDatosCurso(curso) {
    /* console.log(curso); */

    //crear un objto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

    console.log(existe);

    if (existe) {
        // actualizamos la cantidad  
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else { 
                return curso; // retorna el objeto que no son duplicados
            }

        });

        articulosCarrito = [...cursos]

    } else {
        // agregregamos el curso al carrito
        
        // agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }



    console.log(articulosCarrito);

    carritoHTML()
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {

    //limpiar el html
    limpiarHTML();

    // recorre el carrito y genera el html
    articulosCarrito.forEach((curso) =>{

        const {imagen, titulo, precio, cantidad, id } = curso

        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td> 
            <img src="${imagen}" width="100">
        </td>
        <td> ${titulo} </td>
        <td> ${precio} </td>
        <td> ${cantidad} </td>
        <td> 
            <a href="#" class="borrar-curso" data-id="${id}">x</a> 
        </td>
        `;

        //agregar el html del carrito al tbody
    
        contenedorCarrito.appendChild(row);

    });

    // Agregar el carrito de compras al storage

    sincronizarStorage();

    
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify( articulosCarrito ));
}

//elimina los cursos del tbody.
function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = ''

    while(contenedorCarrito.firstElementChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}