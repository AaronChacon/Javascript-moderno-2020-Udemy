
// Implicit binging

const usuario = {
    nombre: 'aaron',
    edad: 29,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'COCO',
        edad: 3,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        },
    }

}

usuario.informacion()

usuario.mascota.informacion()