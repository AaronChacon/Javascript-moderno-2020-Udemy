

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const spinner = document.querySelector('#spinner');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    /* console.log(ciudad);
    console.log(pais); */

    if (ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    
    // Consultar la API

    consultarAPI(ciudad, pais);
}


function mostrarError(mensaje){
    const alerta = document.querySelector('.bg-red-100');
    if (!alerta) {
        // Crear alerta
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100','boder-red-400','text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold"> Error! </strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);
        // Eliminar Alerta
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}

function consultarAPI(ciudad, pais) {
    const appID = '9f6993981b75f41f85f34edac1441642';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
    /* console.log(url); */

    Spinner() // Muestra el spinner

    fetch(url)
        .then( resp => resp.json())
        .then( datos => {
            limpiarHtml() // limpiar el HTML previo
            console.log(datos);
            if (datos.cod ==="404") {
                mostrarError('Ciudad no encontrada')
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })
}


function mostrarClima(datos) {
    const { name, main:{ temp, temp_max, temp_min } } = datos


    const centigrados = kelvinACentigrados(temp);
    const centigradosMax = kelvinACentigrados(temp_max)
    const centigradosMin = kelvinACentigrados(temp_min)

    const nombreCiudad = name
    
    const ciudad = document.createElement('p');
    ciudad.innerHTML = ` ${name}`;
    ciudad.classList.add('font-bold', 'text-6xl');

    const actual = document.createElement('p');
    actual.innerHTML = ` ${centigrados} &#8451; `;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = ` ${centigradosMax} &#8451; - Max`;
    tempMax.classList.add('font-bold', 'text-xl');
    
    const tempMin = document.createElement('p');
    tempMin.innerHTML = ` ${centigradosMin} &#8451; - Min`;
    tempMin.classList.add('font-bold', 'text-xl');
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(ciudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
    
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    spinner.classList.add('block')
}