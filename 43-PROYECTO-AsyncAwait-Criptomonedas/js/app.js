 
const criptoMonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado')

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () =>{
    consultarCriptoMonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptoMonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Crear un promise 
const obtenerCriptoMonedas = criptomonedas => new Promise ( resolve => {
    resolve(criptomonedas);
});

async function consultarCriptoMonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    /* fetch(url)
        .then(resp => resp.json())
        .then(resp => obtenerCriptoMonedas(resp.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas)) */

    try {
        const resp = await fetch(url);
        const rest = await resp.json();
        const cripto = await obtenerCriptoMonedas(rest.Data);
        selectCriptomonedas(cripto);
        
    } catch (error) {
        console.log(error);
    }
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        console.log(cripto);
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptoMonedasSelect.appendChild(option);

    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value
/*     console.log(objBusqueda); */
}

function submitFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API con los resultados.
    consultarAPI()

}

function mostrarAlerta(mensaje) {

    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        // mensaje de error
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

}

async function consultarAPI() {
    const {moneda, criptomoneda} = objBusqueda;
    /* const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=${moneda}`; */
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    console.log(url);
    
    /* fetch(url)
        .then(resp => resp.json())
        .then(resp => {

            mostrarCotizacion(resp.DISPLAY[criptomoneda][moneda]);
        }) */


    try {
        const resp = await fetch(url);
        const rest = await resp.json();
        mostrarCotizacion(rest.DISPLAY[criptomoneda][moneda])
        
    } catch (error) {
        console.log(error);
    }

}

function mostrarCotizacion(cotizacion) {
    
    /* console.log(cotizacion); */

    limpiarHTML()

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML=`Cotizacion <br><span>${PRICE}</span>`;
    

    const precioMax = document.createElement('p');
    precioMax.innerHTML=`<span>${HIGHDAY}</span> - Maximo`;
    
    const precioMin = document.createElement('p');
    precioMin.innerHTML=`<span>${LOWDAY}</span> - Minimo`;
    
    const variacion = document.createElement('p');
    variacion.innerHTML=`<span>${CHANGEPCT24HOUR}%</span> - Variacion`;
    
    const update = document.createElement('p');
    update.innerHTML=`Actualizacion - <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioMax);
    resultado.appendChild(precioMin);
    resultado.appendChild(variacion);
    resultado.appendChild(update);


}

function limpiarHTML() {

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    
}