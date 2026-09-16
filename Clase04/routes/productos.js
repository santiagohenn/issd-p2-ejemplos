const express = require('express');
const router = express.Router();

const { listarProductos, crearProducto, validarProducto } = require('../controllers/productoController');

const agregarUsuario = require('../controllers/usuarioController');

router.get('/', listarProductos);
router.post('/', validarProducto, crearProducto);

router.get('/agregarUsuario', agregarUsuario());

module.exports = router; 