const request = require('supertest');
const app = require('../app');

describe('Pruebas de la API', () => {
  test('GET /api/saludo responde con mensaje', async () => {
    const res = await request(app).get('/api/saludo');

    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe('¡Hola desde la API!');
  });

  test('POST /api/sumar suma dos números', async () => {
    const res = await request(app)
      .post('/api/sumar')
      .send({ a: 3, b: 4 });

    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(7);
  });
});
