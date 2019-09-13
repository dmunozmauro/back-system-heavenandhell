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

	/* getDataLevel: function(req, res) {
		Level.find({}).exec((err, level) => {
			if (err) return res.status(500).send({ message: 'Error al consultar. Method: getDataEliquid' });
			if (!level) return res.status(404).send({ message: 'No existen liquidos' });
			return res.status(200).send({ level });
		});
	} */

};

module.exports = level_controller;