'use strict';

var Eliquid = require('../models/eliquid');

var controller = {
	saveEliquid: function(req, res) {
		var eliquid = new Eliquid();

		var params = req.body;
		eliquid.name = params.name;
		eliquid.ml = params.ml;
        eliquid.price = params.price;
        eliquid.type = params.type;
		eliquid.description = params.description;
		
		/* eliquid.nicotine = params.nicotine;
        eliquid.stock = params.stock; */

		eliquid.save((err, eliquidStored) => {
			if (err) return res.status(500).send({ message: 'Error al guardar el liquido: method saveEliquid' });
			if (!eliquidStored) return res.status(404).send({ message: 'No se ha podido guardar el liquido' });
			return res.status(200).send({ eliquid: eliquidStored });
		});
	},

	getEliquid: function(req, res) {
		var eliquidName = req.params.name;

		if (eliquidName == null) return res.status(404).send({ message: 'El liquido no existe' });

		Eliquid.find({ name: eliquidName }).exec((err, eliquid) => {
			if (err) return res.status(500).send({ message: 'Error al consultar por el liquido method getEliquid' });
			if (!eliquid) return res.status(404).send({ message: 'El liquido no existe' });
			return res.status(200).send({ eliquid });
		});
	},

	getDataEliquid: function(req, res) {
		Eliquid.find({}).exec((err, eliquid) => {
			if (err) return res.status(500).send({ message: 'Error al consultar. Method: getDataEliquid' });
			if (!eliquid) return res.status(404).send({ message: 'No existen liquidos' });
			return res.status(200).send({ eliquid });
		});
	}
};

module.exports = controller;
