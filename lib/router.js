Router.configure({

	layoutTemplate: 'application',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return [Meteor.subscribe('portfolio'), Meteor.subscribe('about')];
	}
});

Router.map(function() {

	this.route('home', {
		path: '/',
		template: 'home',
		yieldTemplates: {
			'noProject': {to: 'project'}
		}
	});

	this.route('project', {
		path: '/project/:_id',
		template: 'home',
		yieldTemplates: {
			'project': {to: 'project'}
		},
		data: function() {
			return Portfolio.findOne(this.params._id);
		},
		onAfterAction: function() {
			// $(window).scrollTop(0);
			$('html, body').animate({
				scrollTop: 0
			})
		}
	});

	this.route('admin', {
		path: '/admin',
		layoutTemplate: 'admin',
		template: 'adminApplication',
		waitOn: function() {
			return [Meteor.subscribe('portfolio'), Meteor.subscribe('about')];
		},
		data: {
			about: function() { return About.findOne(); },
			portfolio: function() { return Portfolio.find(); }
		},
		onBeforeAction: function (pause) {
            if (!Meteor.user()) {
	            if (Meteor.loggingIn()) { 
					this.render(this.loadingTemplate);
				} 
				else { 
					this.render('adminAccessDenied');
				}
	        }
	        else {
	        	this.next();
	        }
	    }
	});
});

Router.onBeforeAction('dataNotFound', {only: 'project'});