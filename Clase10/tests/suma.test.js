const suma = require('../utils/suma');

describe('Función suma()', () => {
  test('suma 1 + 2 y da 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('suma números negativos', () => {
    expect(suma(-5, -8)).toBe(-13);
  });

  test('suma con 0', () => {
    expect(suma(0, 9)).toBe(9);
  });
});