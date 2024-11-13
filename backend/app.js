// Importar las dependencias necesarias
const express = require('express');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Definir el puerto del backend (4201 en este caso)
const port = 4201;

// Usar CORS para permitir que tu frontend (Angular) se comunique con el backend
app.use(cors());

// Middleware para parsear el body de las solicitudes en formato JSON
app.use(express.json());

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Servidor de Node.js funcionando correctamente en el puerto 4201!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
