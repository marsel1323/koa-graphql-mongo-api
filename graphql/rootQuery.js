const { GraphQLObjectType } =  require('graphql');

const {findById, list} = require('./gadget/queries');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		queryAllGadgets: list,
		queryGadgetById: findById,
	}
});


module.exports = RootQuery;
