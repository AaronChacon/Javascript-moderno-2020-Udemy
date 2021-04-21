
window.addEventListener('scroll', ()=>{
    /* const scrollPX = window.scrollY
    console.log(scrollPX); */

    const premium  = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 100) {
        console.log('Visible');
    } else {
        console.log('Aun no es visible');
    }

    /* console.log(ubicacion); */
})
