'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Cambia `tipo_usuario` a String en lugar de ObjectId
let UsuarioSchema = new Schema({
    id_persona: { type: Schema.ObjectId, ref: 'persona', required: true }, // Cambiar 'personas' a 'persona'
    correo: { type: String, required: false, unique: false, sparse: true },
    createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('usuario', UsuarioSchema);
