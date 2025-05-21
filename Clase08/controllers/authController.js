const jwtService = require('../services/jwtService');

async function login(req, res) {
  const user = req.body;
  try {
    const result = await loginUser(user);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

async function loginUser(user) {

  // Acá me conectaría con la base de datos para verificar usuario y pwd.
  // (Ahora no hago nada, solo veo que los campos no esten vacíos)
  if (user.email !== "homero@issd.com" || user.password !== "1234") {
     throw new Error('Credenciales inválidas');
  }

  // Crear el payload del token
  const payload = { id: user.id, email: user.email };
  const token = jwtService.generateToken(payload);

  return { token, user: { id: user.id, email: user.email } };
}

module.exports = {
  login,
};
