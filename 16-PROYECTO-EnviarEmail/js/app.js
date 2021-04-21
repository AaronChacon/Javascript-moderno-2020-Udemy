// variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// event listener
eventListener();
function eventListener() {
    // Iniciando la applicacion
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    // Campos de formlario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Enviar email
    formulario.addEventListener('submit', enviarEmail);

    // reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

}

// funciones
function iniciarApp() {
    console.log('iniciando');
    btnEnviar.disabled = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e) {

    if (e.target.value.length > 0) {

        // elimina los errores
        const error = document.querySelector('p.error')
        if (error) {
            error.remove();
        }
            
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
    } else {
        /* e.target.style.borderBottomColor = 'red'; */
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email' ) {

        if ( er.test( e.target.value ) ) {

            const error = document.querySelector('p.error')
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else { 
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('El email no es valido');
        }

    }

    if (er.test( email.value ) && asunto.value !== '' && mensaje.value !== '') {
        
        btnEnviar.disabled = false
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')

    }

}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'error', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center');
    
    const errores = document.querySelectorAll('.error');

    if (errores.length === 0) {
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10'))
    }

}

// envia el email
function enviarEmail(e) {
    e.preventDefault();
    // mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    // Despues de 3 segundos ocultar el spinner
    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje confirmando el envio del correo
        const parrafo = document.createElement('p')
        parrafo.textContent = 'Correo enviado correctamente'
        parrafo.classList.add('border','border-green-500', 'bg-green-100', 'text-green-500', 'p-3', 'mb-10', 'text-center' )
        formulario.insertBefore( parrafo , spinner)

        setTimeout(() => {
            parrafo.remove(); // eliminar el mensaje de enviado
            resetearFormulario();
        }, 5000);



    }, 3000);
}

// fucion que resetea el formulario
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}