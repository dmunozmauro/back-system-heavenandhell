'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LevelSchema = Schema({
    ml: String,
    nicotine: String,
    stock: String,
    price: String,
    type: String,
    description: String,
    id_eliquid: String
});

module.exports = mongoose.model('Level', new Schema({url: String, text: String, id: Number}),
                    'level');