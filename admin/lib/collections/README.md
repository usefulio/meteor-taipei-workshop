"Both" collection files contain the base collection definition. E.g. MyCollection = new Mongo.Collection('mycollection');

They also contain any constants related to that collection, tacked onto the collection variable, e.g. 

MyCollection.status = {
	new: 'new'
	, open: 'open'
	, closed: 'closed'
};

They also contain collection hooks that need to run on the both the client and the server.

One collection per file. One file per collection.