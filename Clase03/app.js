const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Permite recibir cuerpos JSON, por ejemplo: { "nombre": "Ana" }.
app.use(express.json());

// Datos temporales: se reinician cada vez que se para el servidor.
let siguienteId = 3;
const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' }
];

// GET: consulta recursos. Prueba: GET http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Servidor de ejemplos funcionando');
});

// GET: devuelve todos los usuarios.
// Prueba: GET http://localhost:3000/usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET: devuelve un usuario concreto según su id.
// Prueba: GET http://localhost:3000/usuarios/1
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((item) => item.id === Number(req.params.id));

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// POST: crea un recurso nuevo.
// Prueba: POST http://localhost:3000/usuarios con { "nombre": "Marta" }.
app.post('/usuarios', (req, res) => {
  if (!req.body.nombre) {
    return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
  }

  const usuario = { id: siguienteId, nombre: req.body.nombre };
  siguienteId += 1;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

// PUT: reemplaza o actualiza un recurso existente.
// Prueba: PUT http://localhost:3000/usuarios/1 con { "nombre": "Ana Pérez" }.
app.put('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((item) => item.id === Number(req.params.id));

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  if (!req.body.nombre) {
    return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
  }

  usuario.nombre = req.body.nombre;
  res.json(usuario);
});

// DELETE: elimina un recurso.
// Prueba: DELETE http://localhost:3000/usuarios/1
app.delete('/usuarios/:id', (req, res) => {
  const indice = usuarios.findIndex((item) => item.id === Number(req.params.id));

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  usuarios.splice(indice, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
