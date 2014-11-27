Template.portfolio.helpers({
	portfolio: function() {

		return Portfolio.find();
	}
});

Template.portfolioItem.events({

	'click, touchend a': function(e) {

		if(!dragging) {

			e.preventDefault();

			Router.go('project', {_id: this._id});
		}
	}
});