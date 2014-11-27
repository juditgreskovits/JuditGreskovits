Portfolio = new Mongo.Collection('portfolio');

addError = function(errors, portfolioItem, property, fieldPrefix, message) {

	if(!portfolioItem[property]) {
		if(!errors) {
			errors = {};
		}
		errors[fieldPrefix + property] = message;
	}
	return errors;
}

validatePortfolioItem = function(portfolioItem, fieldPrefix) {

	var errors;
	errors = addError(errors, portfolioItem, 'image', fieldPrefix, 'Please fill in the Image URL');
	errors = addError(errors, portfolioItem, 'title', fieldPrefix, 'Please fill in the Project Title');
	errors = addError(errors, portfolioItem, 'subtitle', fieldPrefix, 'Please fill in the Project Subtitle');
	errors = addError(errors, portfolioItem, 'category', fieldPrefix, 'Please fill in the Project Category');
	errors = addError(errors, portfolioItem, 'client', fieldPrefix, 'Please fill in the Client');
	errors = addError(errors, portfolioItem, 'company', fieldPrefix, 'Please fill in the Company');
	errors = addError(errors, portfolioItem, 'companyUrl', fieldPrefix, 'Please fill in the Company URL');
	errors = addError(errors, portfolioItem, 'role', fieldPrefix, 'Please fill in the Role');
	errors = addError(errors, portfolioItem, 'tech', fieldPrefix, 'Please fill in the Tech Used');
	/*errors = addError(errors, portfolioItem, 'infoUrl', fieldPrefix, 'Please fill in the Extra Info URL');
	errors = addError(errors, portfolioItem, 'infoUrlLabel', fieldPrefix, 'Please fill in the Extra Info URL Label');
	errors = addError(errors, portfolioItem, 'url', fieldPrefix, 'Please fill in the Project URL');*/
	errors = addError(errors, portfolioItem, 'start', fieldPrefix, 'Please fill in the Project Start Date');
	errors = addError(errors, portfolioItem, 'end', fieldPrefix, 'Please fill in a Project End Date');
	errors = addError(errors, portfolioItem, 'challenge', fieldPrefix, 'Please fill in the Challenge');
	errors = addError(errors, portfolioItem, 'solution', fieldPrefix, 'Please fill in a the Solution');

	return errors;
}