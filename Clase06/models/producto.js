const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  precio: { type: Number},
  stock: { type: Number, default: 0 }
}, { collection: 'productos'});

const producto = mongoose.model('Producto', productoSchema);

module.exports = producto;