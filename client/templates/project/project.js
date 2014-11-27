Template.project.events({

	'click, touchend a.close-button': function(e) {

		if($(e.target).attr('id') == 'close-button') {

			e.preventDefault();

			Router.go('home');
		}
	}
});