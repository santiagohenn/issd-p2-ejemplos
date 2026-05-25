const express = require('express');
const path = require('path');
const cookieMiddleware = require('./middlewares/cookieMiddleware');

const cookieRoutes = require('./routes/cookieRoutes');
const apiRoutes = require('./routes/authRoutes');
const authenticate = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3008;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieMiddleware);
app.use('/', cookieRoutes);
app.use('/api', apiRoutes);

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/pagina_secreta', authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pagina_secreta.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
