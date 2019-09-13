'use strict'

var express = require('express');
var EliquidController = require('../controller/eqliquid.controller');
var LevelController = require('../controller/level.controller');

var router = express.Router();

//GUARDA LIQUIDOS
router.post('/save-eliquid', EliquidController.saveEliquid);

//CONSULTA POR UN LIQUIDO
router.get('/eliquid/:name', EliquidController.getEliquid);
router.get('/level', LevelController.getDataLevel);

//CONSULTA POR TODA LA DATABASE
router.get('/data-eliquids', EliquidController.getDataEliquid);

module.exports = router;