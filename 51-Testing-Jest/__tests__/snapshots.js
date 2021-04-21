const cliente = { 
    nombre: 'Aaron Chacon',
    balane: 500,
    tipo: 'Premium'
};




describe('Testing al cliente', () => {
    test('Es Aaron Chacon', () => {
        expect(cliente).toMatchSnapshot();
    });

    
});