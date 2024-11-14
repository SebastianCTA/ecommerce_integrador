
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PersonaSchema = Schema({
    numero_documento: {type: String, required: true},
    nombres: { type: String, required: true },
    apellido_paterno: { type: String, required: true },
    apellido_materno: { type: String, required: true },
    foto: {type: String, require: false},

    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('persona', PersonaSchema);