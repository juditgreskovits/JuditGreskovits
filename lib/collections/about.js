About = new Mongo.Collection('about');

validateAdmin = function(about) {
	var errors = {};

	if(!about.title) {
		errors.title = "Please fill in an About Title";
	}

	if(!about.description) {
		errors.description = "Please fill in an About Description";
	}

	return errors;
}

