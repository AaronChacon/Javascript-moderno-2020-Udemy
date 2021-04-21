const cliente = { 
    nombre: 'Aaron chacon',
    balane: 500
};

describe('Testing del cliente', () => {
    test('El cliente es premiun', () => {
        expect(cliente.balane).toBeGreaterThan(400);
    });

    test('No es premium', () => {
        expect(cliente.balane).not.toBe(550);
    })
    
    test('Es Aaron chacon', () => {
        expect(cliente.nombre).toBe('Aaron chacon');
    });

    test('No es otro ciente ', () => {
        expect(cliente.nombre).not.toBe('Mariam Levy');
    });

    
    
    
});