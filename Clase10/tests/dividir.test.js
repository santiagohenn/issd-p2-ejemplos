const dividir = require('../utils/dividir');

describe('Función dividir()', () => {

  test('dividir por 0', () => {
    
    expect(dividir(1, 0)).toBe("No se puede dividir por cero");

    let resultado = dividir(4, 2);
    expect(resultado).toBe(2);

  });

});

