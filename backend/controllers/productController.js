const Product = require('../models/productModel');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs'); // Asegúrate de tener fs importado

module.exports = {
    // Registrar un nuevo producto
    register: async (req, res) => {
        try {
            let data = req.body;
            console.log(req.body);
            // Validación si el producto ya existe
            let validProduct = await Product.findOne({ title: data.title });

            if (validProduct) {
                return res.status(400).json({
                    message: 'El producto ya existe',
                    code: 403
                });
            }

            // Crear slug a partir del título
            data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

            // Subir imagen si está presente
            if (req.files && req.files.imagen) {
                const imgPath = req.files.imagen.path;
                const imgName = imgPath.split(path.sep).pop(); // Usar path.sep para mayor compatibilidad
                data.portada = imgName;
            }

            // Crear el producto en la base de datos
            let product = await Product.create(data);

            // Respuesta con el éxito
            return res.status(201).json({
                message: 'Producto registrado con éxito',
                data: {
                    id: product._id,
                    title: product.title,
                    portada: product.portada,
                    slug: product.slug
                }
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al registrar el producto',
                error: error.message
            });
        }
    },

    // Actualizar un producto existente
    update: async (req, res) => {
        try {
            let data = req.body;

            // Validación si el producto ya existe con otro ID
            let validProduct = await Product.findOne({ title: data.title, _id: { $ne: data._id } });

            if (validProduct) {
                return res.status(400).json({
                    message: 'El producto ya existe',
                    code: 403
                });
            }

            // Crear slug a partir del título
            data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

            // Subir nueva imagen si está presente
            if (req.files && req.files.imagen) {
                const imgPath = req.files.imagen.path;
                const imgName = imgPath.split(path.sep).pop();
                data.portada = imgName;
            }

            // Actualizar el producto en la base de datos
            await Product.findByIdAndUpdate(data._id, data);

            return res.status(200).json({
                message: 'Producto actualizado con éxito',
                data: {
                    id: data._id,
                    title: data.title,
                    portada: data.portada,
                    slug: data.slug
                }
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al actualizar el producto',
                error: error.message
            });
        }
    },

    // Listar productos con filtros opcionales
    list: async (req, res) => {
        try {
            let filter = [];

            if (req.query.search) {
                filter.push({ title: new RegExp(req.query.search, 'i') }); // Filtro por búsqueda
            }

            if (req.query.categorie) {
                filter.push({ categorie: req.query.categorie }); // Filtro por categoría
            }

            let products = await Product.find({ $and: filter }).populate('categorie');

            // Respuesta con los productos listados
            return res.status(200).json({
                message: 'Productos obtenidos con éxito',
                products: products
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al listar los productos',
                error: error.message
            });
        }
    },

    // Eliminar un producto
    remove: async (req, res) => {
        try {
            let { _id } = req.query;

            // Eliminar el producto por su ID
            await Product.findByIdAndDelete(_id);

            return res.status(200).json({
                message: 'Producto eliminado correctamente'
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al eliminar el producto',
                error: error.message
            });
        }
    },

    // Obtener imagen del producto
    obtener_imagen: async (req, res) => {
        try {
            const img = req.params['img'];

            // Verificar si la imagen existe
            fs.stat('./images/' + img, function (err) {
                if (!err) {
                    let pathImg = './images/' + img;
                    res.status(200).sendFile(path.resolve(pathImg));
                } else {
                    let pathImg = './images/default.jpg';
                    res.status(200).sendFile(path.resolve(pathImg));
                }
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al obtener la imagen',
                error: error.message
            });
        }
    },

    // Mostrar detalles de un producto
    show: async (req, res) => {
        try {
            let { id } = req.params;

            let product = await Product.findById(id).populate('categorie');
            let varieties = await models.Variedad.find({ product: id });

            return res.status(200).json({
                message: 'Producto encontrado',
                product: resources.Product.product_list(product, varieties)
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al mostrar el producto',
                error: error.message
            });
        }
    },

    // Subir una imagen a la galería del producto
    register_imagen: async (req, res) => {
        try {
            const imgPath = req.files.imagen.path;
            const imgName = imgPath.split(path.sep).pop();

            await Product.findByIdAndUpdate(req.body._id, {
                $push: {
                    galerias: {
                        imagen: imgName,
                        id: req.body._id
                    }
                }
            });

            return res.status(200).json({
                message: 'Imagen subida correctamente',
                imagen: {
                    imagen: 'http://localhost:4201/api/product/images/' + imgName,
                    id: req.body._id
                }
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al subir la imagen',
                error: error.message
            });
        }
    },

    // Eliminar una imagen de la galería
    remove_imagen: async (req, res) => {
        try {
            await Product.findByIdAndUpdate(req.body._id, {
                $pull: {
                    galerias: {
                        id: req.body._id
                    }
                }
            });

            return res.status(200).json({
                message: 'Imagen eliminada correctamente'
            });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Ocurrió un problema al eliminar la imagen',
                error: error.message
            });
        }
    }
};