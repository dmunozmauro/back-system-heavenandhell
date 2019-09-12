'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EliquidSchema = Schema({
    name: String,
    ml: Number,
    nicotine: String,
    stock: Number,
    price: Number,
    type: String,
    description: String
});

module.exports = mongoose.model('Eliquid', EliquidSchema);