
// Campos del Formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

// Event Listeners
eventListeners()
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);


    formulario.addEventListener('submit', nuevaCita)
}

// Clases

class Citas {
    constructor() {
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter( cita => cita.id !== id )
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        
    }
}

class UI {

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // agregar clase dependiendo del tipo

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent= mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar alerta despues de 5 segundos

        setTimeout(() => {
            divMensaje.remove();
        }, 5000);

    }

    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach(cita => {
            // Extraer la informacion del objeto de cita
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML= `
                <span clas="font-weight-bolder"> Propietario:</span> ${propietario}
            `
            
            const telfonoParrafo = document.createElement('p');
            telfonoParrafo.innerHTML= `
                <span clas="font-weight-bolder"> Telefono:</span> ${telefono}
            `
            
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML= `
                <span clas="font-weight-bolder"> Fecha:</span> ${fecha}
            `
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML= `
                <span clas="font-weight-bolder"> Hora:</span> ${hora}
            `
            
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML= `
                <span clas="font-weight-bolder"> Sintomas:</span> ${sintomas}
            `

            // BTN para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML =  'Eliminar ';

            btnEliminar.onclick = () => eliminarCita(id);

            // BTN para editar cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar';
            btnEditar.onclick = () => cargarEdicion(cita);
 
            // Agregar los parrafos al divCitas
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telfonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar las citasal HTML
            contenedorCitas.appendChild(divCita);

            
        });
    }

    limpiarHTML(){
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }

}

const ui = new UI();
const administrarCitas = new Citas();


//functiones


//Objeto con la informacion de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// agrega datos al objeto de cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

}


// Valida y agregar una nueva cita

function nuevaCita(e) {
    e.preventDefault();

    // Extraer la informacion del objeto de cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj

    // Validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los campos son oblgatorios', 'error');
        return;
    }

    if (editando) {
        console.log('Modo Edicion');
        // Mensaje de editcion 
        ui.imprimirAlerta('Se edito correctamente');

        // pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});

        // Cambiar el texto del boton a su valor original
        formulario.querySelector('button[type="submit"]').textContent = "Crear cita";
        
        // quitar modo edicion. 
        editando = false

    } else {
        console.log('Modo Nueva Cita');
        // Generar un id unico
        citaObj.id = Date.now();
    
        // Creando una nueva cita.
        administrarCitas.agregarCita({...citaObj});

        // Mensaje de agregado correctamente

        ui.imprimirAlerta('Se agrego correctamente');

    }


    // Reiniciar objeto para la validacion
    reiniciarObjeto()

    // Reiniar el formulario
    formulario.reset();

    // Mostrar el HTML de las citas
    ui.imprimirCitas( administrarCitas );


}


function reiniciarObjeto() {

    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';

}

function eliminarCita(id) {
    // Eliminar cita
    administrarCitas.eliminarCita(id)
    // Muestre el mensaje
    ui.imprimirAlerta('La cita se elimino correctamente');
    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // LLenar los input
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;


    // Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = "Guardar Cambios";

    editando = true;
}