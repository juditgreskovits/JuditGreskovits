Template.header.events({

	'click nav a' : function (e) {

		e.preventDefault()
		
		var link = $(e.target).attr('href');
		$('nav a.active').removeClass('active');
		$('nav a[href$=' + link + ']').addClass('active');

		updateOnScroll = false;

		$('html, body').animate({
			scrollTop: $(link).offset().top
		}, 500, function() {
			updateOnScroll = true;
		});
	}
})