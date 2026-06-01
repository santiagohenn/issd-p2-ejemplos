const express = require('express');
const app = express();
const PORT = 4000;
const suma = require('./utils/suma');
const dividir = require('./utils/dividir');
const { notifyUser } = require('./utils/notifier');
const metrics = require('./utils/metrics');

app.use(express.static('public'));
app.use(express.json());

// Middleware de métricas
app.use((req, res, next) => {
  res.on('finish', () => {
    metrics.logRequest(req.method, req.path, res.statusCode);
  });
  next();
});

app.get('/api/saludo', (req, res) => {
  res.status(200).json({ mensaje: '¡Hola desde la API!' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', metrics.getContentType());
  res.end(await metrics.getMetrics());
});

app.get('/api/metrics', async (req, res) => {
  res.set('Content-Type', metrics.getContentType());
  res.end(await metrics.getMetrics());
});

app.post('/api/feedback', (req, res) => {
  const { type } = req.body;
  if (type === 'up' || type === 'down') {
    metrics.logFeedback(type);
    res.status(200).json({ status: 'Feedback received' });
  } else {
    res.status(400).json({ error: 'Invalid feedback type' });
  }
});

app.post('/api/sumar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: suma(a, b) });
});

app.post('/api/dividir', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: dividir(a, b) });
});

app.post('/api/notificar', (req, res) => {
  const { user, message } = req.body;
  const enviado = notifyUser(user, message);
  res.json({ enviado });
});

module.exports = app;