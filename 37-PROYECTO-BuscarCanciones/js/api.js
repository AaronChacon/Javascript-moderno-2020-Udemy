import * as UI from './interfaz.js';


class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() { 
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then( resp => resp.json())
            .then(resp => {

                if (resultado.lyrics) {

                    const { lyrics } = resp;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.innerHTML = 
                    `Letra: <br><br>
                    ${this.cancion} <br> ${this.artista}`
                } else {
                    UI.divMensajes.textContent = 'Cancion no encontrada';
                    UI.divMensajes.classList.add('error')

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }

                
            })
    }
}

export default API;