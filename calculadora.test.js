const { sumar, restar, multiplicar, dividir} = require('./calculadora');

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

// test('Raiz cuadrada de 25 y devuelve 5', () => {
//     expect(raizCuadrada(25)).toBe(5);
// });

/*test('Suma 7 + 3 y devuelve 10', () => {
    expect(sumar(7, 3)).toBe(10);
});

test('Resta 10 - 3 y devuelve 7', () => {
    expect(restar(10, 3)).toBe(7);
});*/