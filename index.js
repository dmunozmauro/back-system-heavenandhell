'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3701;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/databasehh')
    .then(() => {
        console.log('Connection database Heaven & Hell');

        //server
        app.listen(port, () => {
            console.log('Run server in localhost:3701');
        });
    })
    .catch(err => {
        console.log(err);
    });