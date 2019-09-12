'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EliquidSchema = Schema({
    name: String,
    ml: Number,
    nicotine: String,
    stock: Number,
    price: Number
});

module.exports = mongoose.model('Eliquid', EliquidSchema);