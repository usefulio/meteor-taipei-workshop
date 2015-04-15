Items = new Mongo.Collection('items');

Items.attachSchema(new SimpleSchema({
	title: {
		type: String
		, max: 200
	}
	, description: {
		type: String
	}
}));