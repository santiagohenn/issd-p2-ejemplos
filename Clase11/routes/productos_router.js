const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

module.exports = router;