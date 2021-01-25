const cliente = {
    nombre: 'Nicoarato',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Nombre de cliente', () => {
        expect(cliente.nombre).toBe('Nicoarato');
    })

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Roberto');
    })

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    })
});