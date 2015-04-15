AutoForm.hooks({
	'edit-item-form': {
		after: {
			update: function(docId, modifier) {
				Router.go('/items');
			}
		}
	}
});