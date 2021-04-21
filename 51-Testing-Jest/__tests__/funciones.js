
function suma( a, b ) {
    return a + b;
}


function resta( a, b ) {
    return a - b;
}


describe('Testing a las funciones de suma y resta',() => {
    
    test('suma de 20 y 30', () => {
        expect( suma(20,30) ).toBe(50);
    });
    
    test('resta de 20 y 10', () => {
        expect( resta(20,10) ).toBe(10);
    });

    test('Que la suma de 10 y 10 no sea 10', () => {
        expect( suma(10, 10) ).not.toBe(10)
    })
    
    test('Que la resta de 10 y 10 no sea 10', () => {
        expect( suma(10, 10) ).not.toBe(2)
    })
    
    
});
