const jwtService = require('../services/jwtService');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(' ')[1];

  try {
    const user = jwtService.verifyToken(token);
    req.user = user;
    next();
  } catch {
    return res.status(403).json({ error: 'Token inválido' });
  }
}

module.exports = authenticate;