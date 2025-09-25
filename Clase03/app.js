const express = require('express');
const app = express();
const router = express.Router();
const CrearUsuario = require('./use-cases/crear-usuario');

// Controlador que usa un caso de uso
router.post('/usuarios', (req, res) => {
    const usuarioData = req.body;
    const crearUsuario = new CrearUsuario(usuarioRepository);
    crearUsuario.ejecutar(usuarioData)
        .then(usuario => res.status(201).json(usuario))
        .catch(error => res.status(400).json({ error: error.message }));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});