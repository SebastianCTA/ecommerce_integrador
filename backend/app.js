"use strict";
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const http = require("http");
const cors = require("cors");
const connectDB = require('./db'); // Archivo para conectar a la base de datos
const app = express();
const server = http.createServer(app);

// Importación de rutas
const usuarioRoutes = require('./routes/usuarioRoutes');

// Configuración de middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Configuración de rutas
app.use('/api/usuario', usuarioRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// Configuración del puerto
const port = process.env.PORT || 4201;

// Conexión a la base de datos y arranque del servidor
connectDB()
    .then(() => {
        server.listen(port, () => {
            console.log(`Servidor backend corriendo en http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Error al conectar con la base de datos:", err);
    });

module.exports = app;
