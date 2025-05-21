const express = require('express');
const router = express.Router();
const { login, recursoProtegido } = require('../controllers/authController');
const autenticarJWT = require('../middlewares/authMiddleware');

router.post('/login', login);

// Ruta protegida con middleware
router.get('/protegido', autenticarJWT, recursoProtegido);

module.exports = router;