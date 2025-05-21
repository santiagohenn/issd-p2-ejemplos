const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middlewares/authMiddleware');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);

// Ruta protegida
app.get('/protegido', authenticate, (req, res) => {
  // Voy a poner lo que sea que quiera verificar usuarios
  res.json({ message: `Hola, ${req.user.email}` });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
