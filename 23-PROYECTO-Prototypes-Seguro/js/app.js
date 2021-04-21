
/// Constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    
    /* 
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35; 
            break;
    
        default:
            break;
    }

    // leer el año 
    const diferencia = new Date().getFullYear() - this.year;

    // que cada año se reduce un 3% el valor del seguro
    cantidad -= ((diferencia * 3) * cantidad ) / 100;

    /* 
        Si el seguro es basico se multiplica por 30% mas
        Si el seguro es completo se multiplica por 50% mas
    */

    if (this.tipo === 'Basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad

}

function UI() {
    
}

// llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();    
    const min = max - 20;

    const selectYear = document.querySelector('#year');
    
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;
    // insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
       div.remove(); 
    }, 3000);


}

UI.prototype.mostrarResultado = (seguro, total) => {

    const {marca, tipo, year} = seguro

    let textMarca

    switch (marca) {
        case '1':
            textMarca = 'Americano'
            break;
        case '2':
            textMarca = 'Asiatico'
            break;
        case '3':
            textMarca = 'Europeo'
            break;   
        default:
            break;
    }



    // crear el resultado
     const div = document.createElement('div');
     div.classList.add('mt-10');
     div.innerHTML = `
        <p class="header"> Tu Resumen de tu cotizacion </p>
        <p class="font-bold"> Marca: <span class="font-normal"> ${textMarca} </span> </p>
        <p class="font-bold"> Año: <span class="font-normal"> ${year} </span> </p>
        <p class="font-bold"> Tipo: <span class="font-normal"> ${tipo} </span> </p>
        <p class="font-bold"> Total: $ <span class="font-normal"> ${total} </span> </p>
     `
     const resultadoDiv = document.querySelector('#resultado');

     // Mostrar el spinner
     const spinner = document.querySelector('#cargando')
     spinner.style.display = 'block';
     
     setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
     }, 3000);

}

const ui =  new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // LLenar el select con los años...
});

//
eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada 
    const marca = document.querySelector('#marca').value
    
    // Leer el año seleccionado
    const year = document.querySelector('#year').value
    
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    
    if (marca === ''|| year === '' || tipo=== '') {
        ui.mostrarMensaje('Todos los campos son requeridos', 'error');
        return;
    }
    
    ui.mostrarMensaje('Cotizando...', 'exito');

    // ocualtar las cotizaciones previas

    const resultados = document.querySelector('#resultado div');
    if (resultados!= null) {
        resultados.remove()
    }


    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    // Utilizar el prototy que va a cotizar

    ui.mostrarResultado(seguro, total);


    
}