const { sumar, restar } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Multiplicar 2 * 3 y devuelve 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
});

test('Dividir 6 / 3 y devuelve 2', () => {
    expect(dividir(6, 3)).toBe(2);
});

test('Raiz cuadrada de 25 y devuelve 5', () => {
    expect(raizCuadrada(25)).toBe(5);
});