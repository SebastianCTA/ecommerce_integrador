const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Crear la carpeta 'images' si no existe
const uploadDir = './images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único del archivo
    },
});

// Filtros de archivos (opcional)
const fileFilter = (req, file, cb) => {
    // Aceptar solo imágenes
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Formato de archivo no permitido. Solo se permiten imágenes.'), false);
    }
};

// Instancia de Multer
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limitar a 5MB por archivo
});

module.exports = upload;