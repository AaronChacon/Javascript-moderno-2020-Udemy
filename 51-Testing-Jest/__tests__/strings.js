const password = '123456';

describe('Valida password', () =>{
    test('6 Caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0)
    });


    
});