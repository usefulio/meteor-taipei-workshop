AutoForm.hooks({
	'new-item-form': {
		after: {
			insert: function(docId, modifier) {
				Router.go('/items');
			}
		}
	}
});