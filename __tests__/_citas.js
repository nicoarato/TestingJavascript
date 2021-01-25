import Citas from '../js/classes/Citas';

describe('Probar la clase Citas', () => {

    const citas = new Citas();
    const _id = Date.now();
    test('Agregar una nueva cita', () => {
        const citaObj = {
            id: _id,
            mascota: 'Clarita',
            propietario: 'Jose',
            telefono: '10457889',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        // prueba
        expect(citas).toMatchSnapshot();


    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            mascota: 'Nuevo Nombre',
            propietario: 'Jose',
            telefono: '10457889',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'Solo duerme',
            id: _id
        };
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });


    test('Eliminar cita', () => {

        citas.eliminarCita(_id);

        expect(citas).toMatchSnapshot();
    })
});