'use strict';

var express = require('express');
var EliquidController = require('../controller/eqliquid.controller');
var LevelController = require('../controller/level.controller');

var router = express.Router();

router.post('/save-eliquid', EliquidController.saveEliquid);
router.get('/eliquid/:name', EliquidController.getEliquid);
router.get('/data-eliquids', EliquidController.getDataEliquid);

router.get('/stock/:nicotine/:id', LevelController.getStock);
router.get('/level/:id', LevelController.getDataLevel);


module.exports = router;
