
document.addEventListener('visibilitychange', () =>{
    console.log(document.visibilityState);

    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion que reproduzca el video...');
    } else {
        console.log('Pausar el video');
    }
})