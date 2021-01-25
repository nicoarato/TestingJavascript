const cliente = {
    nombre: 'Nico22',
    balance: 500,
    tipo: 'Premium',

};

describe('Testing al cliente', () => {
    test('Es Nico', () => {
        expect(cliente).toMatchSnapshot();
    })
})