const mongoose = require('mongoose');

const dbUser = 'user';
const dbPassword = 'qwerty123';

const initDB = () => {
	mongoose.connect(
		`mongodb://${dbUser}:${dbPassword}@ds349065.mlab.com:49065/koa-graphql`,
		{useNewUrlParser: true}
	);
	
	mongoose.connection.once('open', () => {
		console.log('connected to database');
	});
};

module.exports = initDB;
