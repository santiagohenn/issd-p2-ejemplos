const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.status(200).json({ mensaje: '¡Hola desde la API!' });
});

app.post('/api/sumar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a + b });
});

module.exports = app;