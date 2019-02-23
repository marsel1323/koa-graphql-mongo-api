const mongoose = require('mongoose');
const config = require('config');

const {database: {name, user, password}} = config;

const initDB = () => {
	mongoose.connect(
		`mongodb://${user}:${password}@ds349065.mlab.com:49065/${name}`,
		{useNewUrlParser: true}
	);
	
	mongoose.connection.once('open', () => {
		console.log('connected to database');
	});
};

module.exports = initDB;
