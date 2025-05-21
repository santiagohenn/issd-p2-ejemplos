const jwt = require('jsonwebtoken');

// Normalmente esto viene de una DB
const FAKE_USER = { id: 1, username: 'admin', password: '1234' };
const SECRET = 'mi_clave_secreta';

function login(req, res) {
  const { username, password } = req.body;

  if (username === FAKE_USER.username && password === FAKE_USER.password) {
    const token = jwt.sign({ id: FAKE_USER.id }, SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true, // No accesible desde JS
      secure: false,  // true si usás HTTPS
      sameSite: 'Strict',
      maxAge: 60 * 60 * 1000 // 1 hora
    });

    res.json({ mensaje: 'Login exitoso' });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
}

function recursoProtegido(req, res) {
    res.json({ mensaje: 'Usted esta autorizado!'});
}

module.exports = { login, recursoProtegido };
