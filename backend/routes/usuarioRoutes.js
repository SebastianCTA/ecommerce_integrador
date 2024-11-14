const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para insertar usuario y persona
router.post('/insertar', usuarioController.insertarUsuario);

module.exports = router;
