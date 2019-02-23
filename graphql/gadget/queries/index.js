const {GraphQLString, GraphQLList} = require('graphql');
const gadgetGraphQLType = require('../type');
const Gadget = require('../../../models/gadget');

const findById = {
	type: gadgetGraphQLType,
	args: {id: {type: GraphQLString}},
	resolve(parent, args) {
		return Gadget.findById(args.id)
	}
};

const list = {
	type: new GraphQLList(gadgetGraphQLType),
	args: {},
	resolve() {
		return Gadget.find({})
	}
};

module.exports = {
	findById,
	list
};
