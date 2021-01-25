function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe('Testing de las funciones suma y resta', () => {
    test('Suma de 20 y 30', () => {
        expect(suma(20, 30)).toBe(50);
    })

    test('Resta de 20 y 30', () => {
        expect(resta(20, 30)).toBe(-10);
    })

    test('Suma 10 + 10 no sea 10', () => {
        expect(resta(10, 10)).not.toBe(10);
    })

    test('Resta 10 y 5 no sea 10', () => {
        expect(resta(10, 5)).toBe(5);
    })

});