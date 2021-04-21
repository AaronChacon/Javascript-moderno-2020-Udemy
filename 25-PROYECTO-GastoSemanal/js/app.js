// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')


// Eventos
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', presguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

// Classes

class Presupuesto {
    constructor( presupuesto ) {
        this.presupuesto = Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;

        console.log(this.restante);
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        console.log(this.gastos);
        this.calcularRestante();

    }

}

class UI {
    insertarPresupuesto( cantidad ){
        // extrayendo los valores
        const { presupuesto, restante } = cantidad;
        // agregar al HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div

        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        
        if ( tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;
        
        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        //Quitar el HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    mostrarGasto(gastos){

        this.limpiarHTML(); // elimina el html previo

        // iterar sobre los gastos
        gastos.forEach( gasto => {
            
            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;


            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`


            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerText = 'Borrar';
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar)

            // agregar al HTML
            gastoListado.appendChild(nuevoGasto);


        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
    }

    comprobarPresupuesto(presupuestoObj){
        const { presupuesto, restante } = presupuestoObj;


        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if ((presupuesto / 4 ) > restante) {
            
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
            
        } else if ((presupuesto / 2 ) > restante){
            
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
            
        } else {

            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');

        }

        // si el total es menor a 0 
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se a agotado', 'error')
            formulario.querySelector('button[type="submit"]').disabled = true
        }
    }
} 

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones

function presguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto??');

    if ( presupuestoUsuario === '' || presupuestoUsuario === null 
        || isNaN( presupuestoUsuario )  || presupuestoUsuario <= 0 ) {
        window.location.reload();
    } 

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto)
}

// añade gastos

function agregarGasto(e) {
    e.preventDefault()

    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value
    const cantidad = Number( document.querySelector('#cantidad').value )

    //validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if ( cantidad <= 0 || isNaN( cantidad ) ){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }
    
    // añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );
    
    // mensaje todo bien
    ui.imprimirAlerta('Gasto Agregado Correctamente');

    // Imprimir los gastos
    const {  gastos, restante } = presupuesto;
    ui.mostrarGasto( gastos );
    
    ui.actualizarRestante( restante );

    ui.comprobarPresupuesto( presupuesto );

    // reinicio de formulario
    formulario.reset();

}

function eliminarGasto(id) {
    // Elimina del objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGasto(gastos);

    ui.actualizarRestante( restante );

    ui.comprobarPresupuesto( presupuesto );


}