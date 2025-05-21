const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ mensaje: 'Token no encontrado. Acceso denegado.' });
    }

    try {
        const decoded = jwt.verify(token, 'mi_clave_secreta');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ mensaje: 'Token inválido o expirado.' });
    }
}

app.get('/login', (req, res) => {

    const usuario = {
        id: "homero218",
        nombre: "Homero",
        correo: "homero@planta-nuclear.org",
        rol: "admin"
    }

    const token = jwt.sign(usuario, 'mi_clave_secreta', { expiresIn: '1m' });
    res.json({ token });
    
});

app.get('/protegido', authMiddleware, (req, res) => {
    res.json({ mensaje: `Hola, ${req.user.nombre}. Accediste a una ruta protegida. `});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
