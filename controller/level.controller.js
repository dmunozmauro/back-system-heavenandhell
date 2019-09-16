'use strict';

var Level = require('../models/level');

var level_controller = {
	getDataLevel: function(req, res) {
		var eliquidId = req.params.id;
        if (eliquidId == null) return res.status(404).send({ message: 'El nivel no existe' });
        
		Level.find({id_eliquid: eliquidId}).exec((err, level) => {
			if (err) return res.status(500).send({ message: 'Error al consultar el nivel. Method: getDataLevel' });
			if (!level) return res.status(404).send({ message: 'No existen niveles' });
			return res.status(200).send({ level });
		});
	},

	getStock: function(req, res) {
		var eliquidId = req.params.id;
		var nicotina = req.params.nicotine;

        if (nicotina == null) return res.status(404).send({ message: 'No existe nicotina' });
		Level.find({nicotine: nicotina, id_eliquid: eliquidId}).exec((err, stock) => {
			if (err) return res.status(500).send({ message: 'Error al consultar el nivel. Method: getStock' });
			if (!stock) return res.status(404).send({ message: 'No existen niveles' });
			return res.status(200).send({ stock });
		});
	}
};

module.exports = level_controller;