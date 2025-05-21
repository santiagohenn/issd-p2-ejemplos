const express = require('express');
const connectDB = require('./config/db');
const responseHandler = require("./middlewares/responseHandler");
const errorHandler = require("./middlewares/errorHandler");
const productosRoutes = require('./routes/productos');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(responseHandler);
app.use(errorHandler);

connectDB();             // Conecta a MongoDB

app.use(express.json()); // Middleware para JSON

app.use('/api/productos', productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}!`);
});