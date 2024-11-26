
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorieSchema = Schema({
    title: {type: String,maxlenght : 250, required:true},
    imagen: {type: String,maxlength: 250, required:true},
    state: {type:Number, maxlength: 2,default:1},
});

module.exports = mongoose.model('categorie', CategorieSchema);