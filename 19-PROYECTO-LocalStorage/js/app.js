
// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    // Cuando el usuario agregar un  uevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documeto esta listo
    document.addEventListener('DOMContentLoaded', () =>{

        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHTML();
    });

}

// Function
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    

    // Validacion de campo vacio
    if (tweet === '') {
        /* alert('No puede ir vacio'); */
        mostrarError('Upps... Tu mensaje no puede ir vacio')
        return // Evita que se ejecuten mas lineas de codigo
    }

    console.log(tweet);

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Agadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    // Una vez creado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();



}


// Mostrar mensaje de error
function mostrarError(error) {

    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contendido
    const contendido = document.querySelector('#contenido');
    contendido.appendChild(mensajeError);

    // Elimina la alerta depues de 3 segundos
    setTimeout(() => {
        mensajeError.remove()
    }, 3000);

}


// Muestra un listado de los tweet 
function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach( ( tweet ) => {

            // Agregar un btn de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            } 
            
            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerHTML = tweet.tweet;

            // Asignar el btn
            li.appendChild(btnEliminar);

            // Insertar en HTML
            listaTweets.appendChild(li)


        });
    }

    sincronizarStorage();
    
}

// Eliminar el tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id );
    console.log(tweets);

    crearHTML()
}

// Elimina el html previo
function limpiarHTML() {
    
    while ( listaTweets.firstChild ) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Agregar los tweets actuales al storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}