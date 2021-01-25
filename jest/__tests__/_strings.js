const { expect } = require("@jest/globals");

const password = "123456";

describe('Valida password 6 caracteres de largo', () => {

    test('Que el password tenga 6 carcteres', () => {
        expect(password).toHaveLength(6);

    });

    test('Password no vacío', () => {
        expect(password).not.toHaveLength(0);
    })

});