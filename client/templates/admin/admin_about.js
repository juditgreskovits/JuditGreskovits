Template.adminAbout.created = function() { 

	Session.set('adminAboutErrors', {});
}

Template.adminAbout.helpers({
	
	error: function(field) {
		return !!Session.get('adminAboutErrors')[field] ? 'form-error' : '';
	}
});

Template.adminAbout.events({

	'submit form': function(e) {

	    e.preventDefault();

		var aboutId = this._id;
		var adminProperties = {
			title: $(e.target).find('[name=admin-about-title]').val(),
			description: $(e.target).find('[name=admin-about-description]').val()
		}

		var errors = validateAdmin(adminProperties);
		if (errors.title || errors.description) {
			return Session.set('adminAboutErrors', errors);
		}

		About.update(aboutId, {$set: adminProperties}, function(error) {
			if (error) {
				alert('About update error ' + error.reason);
			}
			else {
		    	alert('About successfully updated');
		     }
		});
	}
});

