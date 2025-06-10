const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/mitienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, 'public')));

const apiRoutes = require('./routes/productos_router');

app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
