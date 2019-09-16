'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LevelSchema = Schema({
    nicotine: String,
    stock: String,
    id_eliquid: String
});

module.exports = mongoose.model('Level', new Schema({url: String, text: String, id: Number}),'level');