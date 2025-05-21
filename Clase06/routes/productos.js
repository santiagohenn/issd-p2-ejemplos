const express = require('express');
const router = express.Router();

const { listarProductos, crearProducto, validarProducto } = require('../controllers/productoController');

router.get('/', listarProductos);
router.post('/', validarProducto, crearProducto);

module.exports = router;