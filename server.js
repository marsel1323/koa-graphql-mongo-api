const config = require('config');
const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
const cors = require('@koa/cors');

const {PORT} = config;

const app = new Koa();

app.use(cors());

// app.use(async ctx => {
// 	ctx.body = 'Hello World';
// });

app.use(mount('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
})));

app.on('error', err => {
	log.error('server error', err)
});

initDB();

app.listen(process.env.PORT || PORT, "0.0.0.0", () => {
	console.log(`localhost:${PORT}`);
});
