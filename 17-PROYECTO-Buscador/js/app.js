// Variables GLobales

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados
const resultado = document.querySelector('#resultado tbody')

const max = new Date().getFullYear();
const min = max - 10;

// generar un objeto con las busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''   
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra los autos al cargar
    
    //agrega las opciones de años
    agregarSelect()

});

// Event listener para los inputs de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt( e.target.value )
    filtrarAuto()
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt( e.target.value )
    filtrarAuto()
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
});


// Funciones

//Muestra los autos en pantalla
function mostrarAutos(autos) {

    limpiarHTML(); // elimina el html previo

    autos.forEach((auto, index) => {
        const { 
            marca, modelo,  year, precio, 
            puertas, color, transmision } = auto;
        const autoHTML = document.createElement('tr')

        autoHTML.innerHTML = `
        
            <td> ${index + 1} </td>
            <td> ${marca} </td>
            <td> ${modelo} </td>
            <td> ${year} </td>
            <td> ${precio} </td>
            <td> ${puertas} </td>
            <td> ${color} </td>
            <td> ${transmision} </td>
            
        `
        autoHTML.classList.add('border', 'border-gray-400' );
        // insertar en el HTML 
        resultado.appendChild(autoHTML);
        
        
        
    });

    totalAutos = autos.length
    /* console.log(totalAutos); */
    const totalHTML = document.createElement('tr')
    totalHTML.innerHTML = `
        <td  class="text-left" colspan="7">
        Total Encontrados
        </td>
        <td>
            ${totalAutos}
        </td>
    `
    resultado.appendChild(totalHTML)

}

// limpiar HTML

function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
    
}

// genera los años del select
function agregarSelect() {
    
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agregar lasopciones el año al select
    }


}

// funcion para el filtrado segun las busquedas

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor )

    
    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }

}

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement( 'tr' );
    noResultado.classList.add('error','alerta');
    noResultado.innerHTML = `
    <td colspan="8">
        Lo siento, no tengo autos que concuerden con tu busqueda. 
        <br>
        Puedes intentar buscar nuevamente

    </td>
    `;
    resultado.appendChild(noResultado);

}

function filtrarMarca( auto ) {

    const { marca } = datosBusqueda;

    if ( marca ) {
        return auto.marca === marca
    }
    return auto;
}

function filtrarYear( auto ) {
    const { year } = datosBusqueda;

    if ( year ) {
        return auto.year === year
    }
    return auto;
}

function filtrarMinimo(auto) {

    const { minimo } = datosBusqueda;

    if ( minimo ) {
        return auto.precio >= minimo
    }
    return auto;
    
}

function filtrarMaximo(auto) {

    const { maximo } = datosBusqueda;

    if ( maximo ) {
        return auto.precio <= maximo
    }
    return auto;
    
}

function filtrarPuertas(auto) {

    const { puertas } = datosBusqueda;

    if ( puertas ) {
        return auto.puertas === puertas
    }
    return auto;
    
}

function filtrarTransmision(auto) {

    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision
    }
    return auto;
    
}

function filtrarColor(auto) {

    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color
    }
    return auto;
    
}