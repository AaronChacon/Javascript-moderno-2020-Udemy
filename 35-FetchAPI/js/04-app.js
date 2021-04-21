
const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', onbtenerDatos);

function onbtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( resp => resp.json() )
        .then( resp => verData(resp) )
};

function verData(data) {
    console.log(data);
    const contenido = document.querySelector('.contenido');
    
    let html = '';
    
    data.forEach(perfil => {
       const { author, post_url } = perfil;

       html += `

       <P>Autor: ${author}</P>
       <a href="${post_url}" target="_black" > Ver Imagen</a>

       `

    });

    contenido.innerHTML = html;
    
};

