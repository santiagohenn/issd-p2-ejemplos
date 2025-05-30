const express = require('express');
const app = express();
const PORT = 3000;
const suma = require('./utils/suma');
const dividir = require('./utils/dividir');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.status(200).json({ mensaje: '¡Hola desde la API!' });
});

app.post('/api/sumar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: suma(a, b) });
});

app.post('/api/dividir', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: dividir(a, b) });
});

module.exports = app;