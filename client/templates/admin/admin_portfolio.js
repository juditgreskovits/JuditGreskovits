Template.adminPortfolioItemInput.helpers({

	error: function(field) {

		if(Session.get('adminPortfolioErrors_' + this._id) == undefined) {
			return '';
		}
		return !!Session.get('adminPortfolioErrors_' + this._id)[field] ? 'form-error' : '';
	}
});

getPortfolioItemProperties = function(e) {

	var portfolioItemProperties = {
		image: $(e.target).find('[name=admin-portfolio-item-image]').val(),
		title: $(e.target).find('[name=admin-portfolio-item-title]').val(),
		subtitle: $(e.target).find('[name=admin-portfolio-item-subtitle]').val(),
		category: $(e.target).find('[name=admin-portfolio-item-category]').val(),
		client: $(e.target).find('[name=admin-portfolio-item-client]').val(),
		company: $(e.target).find('[name=admin-portfolio-item-company]').val(),
		companyUrl: $(e.target).find('[name=admin-portfolio-item-companyUrl]').val(),
		role: $(e.target).find('[name=admin-portfolio-item-role]').val(),
		tech: $(e.target).find('[name=admin-portfolio-item-tech]').val(),
		infoUrl: $(e.target).find('[name=admin-portfolio-item-infoUrl]').val(),
		infoUrlLabel: $(e.target).find('[name=admin-portfolio-item-infoUrlLabel]').val(),
		url: $(e.target).find('[name=admin-portfolio-item-url]').val(),
		start: $(e.target).find('[name=admin-portfolio-item-start]').val(),
		end: $(e.target).find('[name=admin-portfolio-item-end]').val(),
		challenge: $(e.target).find('[name=admin-portfolio-item-challenge]').val(),
		solution: $(e.target).find('[name=admin-portfolio-item-solution]').val()
	}
	return portfolioItemProperties
}

Template.adminPortfolioItem.events({

	'submit form': function(e) {

	    e.preventDefault();

		var portfolioItemId = this._id;
		Session.set('adminPortfolioErrors_' + portfolioItemId, {});
		var portfolioItemProperties = getPortfolioItemProperties(e);

		var errors = validatePortfolioItem(portfolioItemProperties, 'admin-portfolio-item-');
		if (errors) {
			return Session.set('adminPortfolioErrors_' + this._id, errors);
		}

		Portfolio.update(portfolioItemId, {$set: portfolioItemProperties}, function(error) {
			if (error) {
				alert('Project update error ' + error.reason);
			}
			else {
		    	console.log('Project successfully updated');
		     }
		});
	},

	'click form #form-delete': function(e) {

		console.log('click form #delete');
		e.preventDefault();

		if(confirm('Delete this project?')) {
			var portfolioItemId = this._id;
			Portfolio.remove(portfolioItemId);
			alert('Project successfully deleted');
		}
	}
});

Template.adminAddPortfolioItem.events({

	'submit form': function(e) {

	    e.preventDefault();

		var portfolioItemId = this._id;
		Session.set('adminPortfolioErrors_' + portfolioItemId, {});
		var portfolioItemProperties = getPortfolioItemProperties(e);

		var errors = validatePortfolioItem(portfolioItemProperties, 'admin-portfolio-item-');
		if (errors) {
			return Session.set('adminPortfolioErrors_' + this._id, errors);
		}

		Portfolio.insert(portfolioItemProperties, function(error) {
			if (error) {
				alert('Project insert error ' + error.reason);
			}
			else {
		    	alert('Project successfully inserted');
		     }
		});
	}
});