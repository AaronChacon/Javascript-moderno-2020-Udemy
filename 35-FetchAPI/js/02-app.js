

const cargarJSON = document.querySelector('#cargarJSON');
cargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json'
    fetch(url)
        .then( resp => resp.json() )
        /* .then( resp => console.log(resp)) */
        .then( resp => mostararHTML(resp))
        /* .then( resp => {
            console.log(resp);

            return resp.json()
        })
        .then( resp => {
            console.log(resp);
        }) */

}


function mostararHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Id:       ${id}    </p>  
        <p>Empleado: ${nombre}</p>
        <p>Empresa:  ${empresa}</p>
        <p>trabajo:  ${trabajo}</p>
    `
}