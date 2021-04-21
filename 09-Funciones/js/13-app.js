const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    crearPlaylist: () => {
        let playlists;
        playlists = prompt('Nombra tu nueva playlists')
        console.log(`Tu playlists fue creada exitosamente. Nombre: "${playlists}"`);
        return playlists
    },
    reproducirPlaylists: playlists => console.log(`Reproduciendo.... "${playlists}"`),
    
    set nuevaCancion(cancion){
        this.cancion= cancion
        console.log(`Nueva cancion: ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    } 
    
}

reproductor.reproducir(30)

reproductor.pausar()

const newLists = reproductor.crearPlaylist()

reproductor.reproducirPlaylists(newLists)

reproductor.nuevaCancion = 'Bailando';

reproductor.obtenerCancion;