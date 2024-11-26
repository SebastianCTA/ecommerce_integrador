const Categorie = require('../models/categorieModel');
const mongoose = require('mongoose');
const path = require('path');
async function registrarCategoria(req, res) {
    try {
        // Logs para depuración
        console.log('Body recibido:', req.body);
        console.log('Archivo recibido:', req.file);

        // Extraer datos del cuerpo de la solicitud
        const { title, state } = req.body;

        // Validar título
        if (!title || title.trim() === '') {
            return res.status(400).send({
                message: 'El título de la categoría es obligatorio y no puede estar vacío.',
            });
        }

        // Validar estado (opcional)
        const parsedState = state ? parseInt(state, 10) : 1; // Estado predeterminado
        if (isNaN(parsedState)) {
            return res.status(400).send({
                message: 'El estado debe ser un número válido.',
            });
        }

        // Procesar la imagen
        let imagenPath = null;
        if (req.file) {
            imagenPath = req.file.filename; // Nombre del archivo subido
        }

        // Crear nueva categoría
        const nuevaCategoria = new Categorie({
            _id: new mongoose.Types.ObjectId(),
            title: title.trim(),
            imagen: imagenPath, // Imagen es opcional
            state: parsedState,
            createdAt: new Date(),
        });

        // Guardar en la base de datos
        await nuevaCategoria.save();

        return res.status(201).send({
            message: 'Categoría registrada correctamente.',
            data: {
                id: nuevaCategoria._id,
                title: nuevaCategoria.title,
                imagen: nuevaCategoria.imagen,
                state: nuevaCategoria.state,
            },
        });
    } catch (error) {
        console.error('Error en el controlador:', error);
        return res.status(500).send({
            message: 'Error al registrar la categoría.',
            error: error.message,
        });
    }
}

module.exports = {
    registrarCategoria,
};