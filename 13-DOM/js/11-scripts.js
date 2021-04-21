

const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')


btnFlotante.addEventListener('click', toggleFooter);

function toggleFooter (){

    footer.classList.toggle('activo')
    this.classList.toggle('activo')

    if (this.classList.contains('activo')) {
        this.textContent = 'X Cerrar'
    } else {
        this.textContent = 'Idioma y Moneda'
    }
    
}