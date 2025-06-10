const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  imagenUrl: String
}, { collection: 'productos' });

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
