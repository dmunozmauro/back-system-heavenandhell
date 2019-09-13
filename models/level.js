'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LevelSchema = Schema({
    id_eliquid: String,
    nicotine: String,
    stock: String
});

module.exports = mongoose.model('Level', new Schema({url: String, text: String, id: Number}),'level');