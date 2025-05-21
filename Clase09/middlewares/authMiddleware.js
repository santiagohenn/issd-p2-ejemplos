const jwt = require('jsonwebtoken');
const SECRET = 'mi_clave_secreta';

function autenticarJWT(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // Guardamos el user en el request para usar más adelante
    next(); // Permite continuar al siguiente middleware o controlador
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado.' });
  }
}

module.exports = autenticarJWT;