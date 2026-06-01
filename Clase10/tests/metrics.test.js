const request = require('supertest');
const app = require('../app');
const metrics = require('../utils/metrics');

describe('Pruebas de Métricas', () => {
  
  test('debe incrementar el contador de peticiones al llamar a una ruta', async () => {
    await request(app).get('/api/saludo');
    await request(app).get('/api/saludo');

    const res = await request(app).get('/metrics');
    
    expect(res.text).toContain('http_requests_total');
    expect(res.text).toContain('method="GET",route="/api/saludo",status="200"');
  });

  test('el middleware debe llamar a logRequest', async () => {
    const spy = jest.spyOn(metrics, 'logRequest');
    
    await request(app).get('/api/saludo');
    
    // El middleware se ejecuta con res.on('finish'), así que esperamos un poco
    // Supertest suele esperar a que termine la respuesta
    expect(spy).toHaveBeenCalledWith('GET', '/api/saludo', 200);
    
    spy.mockRestore();
  });

  test('debe incrementar el contador de feedback al enviar un pulgar arriba', async () => {
    await request(app)
      .post('/api/feedback')
      .send({ type: 'up' });

    const res = await request(app).get('/metrics');
    
    expect(res.text).toContain('user_feedback_total{type="up"} 1');
  });

  test('debe incrementar el contador de feedback al enviar un pulgar abajo', async () => {
    await request(app)
      .post('/api/feedback')
      .send({ type: 'down' });

    const res = await request(app).get('/metrics');
    
    expect(res.text).toContain('user_feedback_total{type="down"} 1');
  });
});
