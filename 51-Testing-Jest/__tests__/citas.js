import Citas from '../js/classes/Citas.js';

describe('´Probar la clase de citas', () =>{
    
    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        
        const citaObj = {
            mascota: 'Coco',
            propietario: 'Aaron',
            telefono: '920889432',
            fecha: '11-03-2020',
            hora: '10:30',
            sintomas: 'No come',
            id
        }

        citas.agregarCita(citaObj);

        // Prueba

        expect(citas).toMatchSnapshot();
        
    });

    test('Actualizar cita', () => {

        const citaActualizada = {
            mascota: 'Coco 2',
            propietario: 'Aaron',
            telefono: '920889432',
            fecha: '11-03-2020',
            hora: '10:30',
            sintomas: 'No come',
            id
        }

        citas.editarCita(citaActualizada);

        // Prueba
        expect(citas).toMatchSnapshot();

    })
    
    test('Eliminar cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
    


    
});