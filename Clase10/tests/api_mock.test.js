const request = require('supertest');
const app = require('../app');
const emailService = require('../utils/emailService');

// Mockeamos el servicio que usa la API internamente
jest.mock('../utils/emailService');

describe('Pruebas de API con Mocking de Servicios', () => {
  
  test('POST /api/notificar llama al emailService mockeado', async () => {
    // Configuramos el mock para que devuelva true
    emailService.sendEmail.mockReturnValue(true);

    const res = await request(app)
      .post('/api/notificar')
      .send({
        user: { email: 'estudiante@ejemplo.com' },
        message: 'Tu nota es 10'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.enviado).toBe(true);
    
    // Verificamos que la API realmente usó el servicio con los datos correctos
    expect(emailService.sendEmail).toHaveBeenCalledWith(
      'estudiante@ejemplo.com',
      'Tu nota es 10'
    );
  });
});
