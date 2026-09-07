// FACTORY (FÁBRICA)
// Centraliza la creación de objetos para no usar "new" por toda la aplicación.
class NotificacionEmail {
  enviar(mensaje) {
    return `Email enviado: ${mensaje}`;
  }
}

class NotificacionSms {
  enviar(mensaje) {
    return `SMS enviado: ${mensaje}`;
  }
}

function crearNotificacion(tipo) {
  if (tipo === 'email') return new NotificacionEmail();
  if (tipo === 'sms') return new NotificacionSms();

  throw new Error('Tipo de notificación no válido');
}

const notificacion = crearNotificacion('email');
console.log(notificacion.enviar('Hola'));

module.exports = crearNotificacion;
