const { generateCoupon } = require('../utils/coupons');

describe('Pruebas Mockeando Globales (Math.random)', () => {
  
  test('debe generar un cupón predecible cuando se mockea Math.random', () => {
    // Espiamos y mockeamos Math.random
    // 0.5 en base 36 es "0.i...", substring(2, 7) nos daría algo predecible
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);

    const coupon = generateCoupon();

    // 0.5.toString(36) -> "0.i"
    // "0.i".substring(2, 7) -> "i" (rellenado con vacío si es corto)
    // En realidad, para 0.5 es "I" en mayúsculas
    expect(coupon).toBe('COUPON-I'); 
    expect(spy).toHaveBeenCalled();

    // Es importante restaurar los mocks de funciones globales
    spy.mockRestore();
  });

  test('debe generar cupones diferentes si no está mockeado (demo)', () => {
    const coupon1 = generateCoupon();
    const coupon2 = generateCoupon();
    
    expect(coupon1).not.toBe(coupon2);
  });
});
