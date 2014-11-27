Template.contact.created = function() {

	Session.set('emailSendErrors', {});
}

Template.contact.rendered = function() {

	$('input, textarea').keydown(function(e){
		$(e.target).removeClass('form-error');
	})
}

Template.contact.helpers({

	error: function(field) {
		return !!Session.get('emailSendErrors')[field] ? 'form-error' : '';
	}
});

Template.contact.events({

	'submit form': function(e) {

		e.preventDefault();

		var email = {

			name: $(e.target).find('[name=name]').val(),
			email: $(e.target).find('[name=email]').val(),
			phone: $(e.target).find('[name=phone]').val(),
			message: $(e.target).find('[name=message]').val()
		};

		var errors = validateEmail(email);
		if (errors.name || errors.email || errors.message) {
			return Session.set('emailSendErrors', errors);
		}

		Meteor.call('sendEmail', email, function(error, result) {
			if (error) {
				$('form p#contact-error').addClass('active');
			}

			$('form p#contact-success').addClass('active');
		});
	}
});