// Ensures that users who are subscribing from this app
// are all logged in without having to check in each publish function
var originalPublishFunction = Meteor.publish;

Meteor.publish = function(name, fn){
	originalPublishFunction(name, function(){
		if(this.userId){
			return fn.apply(this, arguments);
		}else{
			return this.ready();
		}
	});
};