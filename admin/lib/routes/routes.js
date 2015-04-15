// Your routes file should be clean and concise.
// You are only specifying route definitions here, e.g. the paths for the route, where the route is available (client/server) and possibly naming the route.
// The heavy work for each route like data, waitOn, render, etc. all go in their individual route controller files in the client/controllers or server/controllers folders respectively.
var SubscriptionManager = new SubsManager();


Router.configure({
  	layoutTemplate: 'MasterLayout'
  	, notFoundTemplate: 'NotFound'
	, loadingTemplate: 'Loading'
});

Router.plugin('ensureSignedIn', { except: [
	'Home'
	, 'atChangePwd'
	, 'atSignIn'
	, 'atSignUp'
	, 'atVerifyEmail'
	, 'atResetPwd'
	, 'atForgotPwd'
] });

Router.route('/', {
	name: 'Home'
});

Router.route('/items', {
	name: 'Items'
	, waitOn: function () {
		return SubscriptionManager.subscribe('items');
	}
	, data: function () {
		return {
			items: Items.find()
		}
	}
});

Router.route('/item/new', {
	name: 'NewItem'
});

Router.route('/item/:_id', {
	name: 'EditItem'
	, waitOn: function () {
		return SubscriptionManager.subscribe('item', this.params._id);
	}
	, data: function () {
		return {
			item: Items.findOne(this.params._id)
		}
	}
});