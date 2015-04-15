Meteor.publish('item', function(_id){
	return Items.find(_id);
});