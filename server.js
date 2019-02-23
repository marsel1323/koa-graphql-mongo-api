const config = require('config');
const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
const cors = require('@koa/cors');

const {PORT} = config;

const app = new Koa();

app.use(cors())

app.use(mount('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
})));

app.on('error', err => {
	log.error('server error', err)
});

initDB();

app.listen(PORT, () => {
	console.log(`localhost:${PORT}`);
});
