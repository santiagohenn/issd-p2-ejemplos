const jwt = require('jsonwebtoken');

function generarToken(usuario) {
  // Datos del usuario que se codificarán en el token
  const payload = {
    sub: usuario.id,  // Identificador único del usuario
    nombre: usuario.nombre,  // Nombre del usuario
    correo: usuario.correo,  // Correo electrónico del usuario
    rol: usuario.rol  // Rol del usuario, por ejemplo: 'admin', 'usuario', etc.
  };

  // Clave secreta utilizada para firmar el token (mantenerla segura)
  const secret = 'mi_clave_secreta';

  // Opciones adicionales: Por ejemplo, caducidad del token
  const opciones = {
    expiresIn: '1h'  // El token expirará después de 1 hora
  };

  // Firmar el token con el payload, la clave secreta y las opciones
  const token = jwt.sign(payload, secret, opciones);
  return token;
}

const usuario = {
  id: "homero218",
  nombre: "Homero",
  correo: "homero@planta-nuclear.org",
  rol: "admin"
}

let token = generarToken(usuario);
console.log(token);