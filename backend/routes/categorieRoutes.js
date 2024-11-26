const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');
const upload = require('../services/upload')

// Ruta para registrar categoría con Multer para manejar el archivo 'portada'
router.post('/register', upload.single('portada'), categorieController.registrarCategoria);

module.exports = router;