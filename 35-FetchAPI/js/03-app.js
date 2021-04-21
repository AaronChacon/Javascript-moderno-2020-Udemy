

const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(resp => resp.json())
        /* .then(resp => console.log(resp)) */
        .then(resp => mostrarHTML(resp))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');
    let html = '';
    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo } = empleado;
        html += `
            <p>Id:       ${id}    </p>  
            <p>Empleado: ${nombre}</p>
            <p>Empresa:  ${empresa}</p>
            <p>trabajo:  ${trabajo}</p>
        `
    });

    contenido.innerHTML = html;
}



    