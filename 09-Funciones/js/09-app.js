
// metodos de propiedad

const reproductor = {

    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function () {
        console.log('pausando...');
    },
    crearPlaylist: function () {
        let playlists;
        playlists = prompt('Nombra tu nueva playlists')
        console.log(`Tu playlists fue creada exitosamente. Nombre: "${playlists}"`);

        return playlists
    
    },
    reproducirPlaylists: function(playlists){
        console.log(`Reproduciendo.... "${playlists}"`);
    }


}

reproductor.reproducir(30)
reproductor.reproducir(20)

reproductor.pausar()

reproductor.borrar = function (id) {
    console.log(`Borrando cancion id ${id}`);
}

reproductor.borrar(20)


const newLists = reproductor.crearPlaylist()

reproductor.reproducirPlaylists(newLists)