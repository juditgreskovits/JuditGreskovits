dragging = false;

$('html, body').on('touchstart', function() {
	dragging = false;
});

$('html, body').on('touchmove', function() {
	dragging = true;
});

$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('.hover');
    });
});


updateOnScroll = true;
var sectionId = 'portfolio';

$(window).scroll(function() {
	if(updateOnScroll) {
		var windowPosition = $(window).scrollTop() + $(window).height();
		var sections = $('section');
		var i = sections.length-1;
		for(i; i>=0; i--) {
			var section = $(sections[i]);
			var test = windowPosition - section.position().top;
			if(test > 0) {
				var id = section.attr('id');
				if(id == 'project') {
					id = 'portfolio';
				}
				if(id != sectionId) {
					sectionId = id;
					$('nav a.active').removeClass('active');
					$('nav a[href$=' + sectionId + ']').addClass('active');
				}
				break;
			}
		}
	}
});


