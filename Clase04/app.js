const express = require('express');
const connectDB = require('./config/db');
const responseHandler = require("./middlewares/responseHandler");
const errorHandler = require("./middlewares/errorHandler");
const productosRoutes = require('./routes/productos');


const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.static('public'));
app.use(responseHandler);
app.use(errorHandler);

app.use(express.json()); // Middleware para JSON

// GET: devuelve un usuario concreto según su id.
// Prueba: GET http://localhost:3000/usuarios/1
app.get('/usuarios/:id', (req, res) => {
  res.json(id);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}!`);
});