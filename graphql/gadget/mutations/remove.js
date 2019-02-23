const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType =  require('../type');
const Gadget = require('../../../models/gadget');

module.exports = {
	type: gadgetGraphQLType,
	args: {
		id: { type: GraphQLString }
	},
	resolve(parent, args) {
		return Gadget.findById(args.id).exec()
			.then(gadget => {
				if(gadget) gadget.remove()
			})
			.then(deletedGadget => deletedGadget)
			.catch(error => console.error(error))
	}
};
