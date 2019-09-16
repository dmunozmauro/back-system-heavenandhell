'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EliquidSchema = Schema({
    name: String,
    ml: String,
    price: String,
    type: String,
    description: String
});

module.exports = mongoose.model('Eliquid',  new Schema({url: String, text: String, id: Number}), 'eliquid');
