const {GraphQLObjectType} = require('graphql');

const {add, update, remove} = require('./gadget/mutations');

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addGadget: add,
		updateGadget: update,
		removeGadget: remove,
	}
});


module.exports = Mutation;
