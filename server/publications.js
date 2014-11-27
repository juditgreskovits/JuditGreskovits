Meteor.publish('portfolio', function(options) {

	return Portfolio.find();
});

Meteor.publish('about', function() {

	return About.find();
});