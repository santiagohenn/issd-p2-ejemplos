const { notifyUser } = require('../utils/notifier');
const emailService = require('../utils/emailService');

// Mockeamos el módulo completo, no tenemos nada del sistema de email,
// pero queremos tener el esqueleto funcionando
jest.mock('../utils/emailService');

describe('Pruebas con Mockups (Notificador)', () => {
  
  test('debe llamar a sendEmail cuando el usuario tiene email', () => {
    // Configuramos el comportamiento del mock
    emailService.sendEmail.mockReturnValue(true);

    const user = { email: 'test@example.com' };
    const result = notifyUser(user, '¡Hola!');

    // Verificamos que se llamó a la función mockeada
    expect(emailService.sendEmail).toHaveBeenCalledWith('test@example.com', '¡Hola!');
    expect(result).toBe(true);
  });

  test('no debe llamar a sendEmail si el usuario no tiene email', () => {
    // Limpiamos los mocks antes de usarlos
    jest.clearAllMocks();

    const user = { name: 'Juan' }; // Sin email
    const result = notifyUser(user, '¡Hola!');

    // Verificamos que NO se llamó
    expect(emailService.sendEmail).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });

  test('maneja un error en el servicio de email', () => {
    // Forzamos un valor de retorno diferente
    emailService.sendEmail.mockReturnValue(false);

    const user = { email: 'error@example.com' };
    const result = notifyUser(user, 'Fallo');

    expect(result).toBe(false);
  });
  
});
