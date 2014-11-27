if (Portfolio.find().count() === 0) {
	images = ['dress_up.png', 'dulux.png', 'dumping_ground.jpg', 'easytone.jpg', 'give_chrome.jpg', 'hondamentalism.jpg', 'kellogs_crunchy_nut_bites_explosion.jpg', 'mns_125years.jpg', 'photobooth.jpg', 'wates_siteSafety.jpg'];
	l = images.length;

	for (var i = 0; i < 14; i++) {
		Portfolio.insert({
			title: 'Dumping Ground',
			subtitle: 'Multiplayer physics game suite',
			category: 'Game',
			client: 'CBBC',
			company: 'Preloaded',
			companyUrl: 'http://preloaded.com/',
			role: 'Creative Developer',
			tech: 'Flash, ActionScript 3, Robotlegs, Box2d, XML, BBC\'s GamesGrid multiplayer api',
			challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi est, tempor a tristique a, sodales a purus. Etiam rutrum dui ac elit pulvinar efficitur. Pellentesque maximus semper eros eget lobortis.',
			solution: 'Nunc aliquam nec odio sed ultricies. Nunc ligula tellus, blandit id metus eget, tincidunt finibus enim. Proin nec purus quis dui tempus congue. Sed viverra dapibus semper.',
			infoUrl: 'http://preloaded.com/games/dumping-ground/',
			infoUrlLabel: 'Preloaded\'s write-up',
			url: 'http://www.bbc.co.uk/cbbc/games/the-dumping-ground-game',
			start: 'November 2012',
			end: 'April 2013',
			image: 'images/portfolio/' + images[i%images.length]
		});
	}
}

if (About.find().count() === 0) { 
	About.insert({
		title: 'About',
		description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi est, tempor a tristique a, sodales a purus. Etiam rutrum dui ac elit pulvinar efficitur. Pellentesque maximus semper eros eget lobortis. Nunc aliquam nec odio sed ultricies. Nunc ligula tellus, blandit id metus eget, tincidunt finibus enim. Proin nec purus quis dui tempus congue. Sed viverra dapibus semper. Vivamus porta auctor risus, a porttitor nisi dictum non.</p><p>In facilisis enim at sapien finibus, vel ullamcorper massa aliquet. Praesent aliquam sit amet magna eu tincidunt. Nunc dapibus ullamcorper tortor, vitae aliquet dolor volutpat nec. Integer facilisis laoreet velit eget dignissim. Donec in nunc accumsan, eleifend quam sed, mollis ex. Praesent sed diam eget enim mollis faucibus a quis ante. Donec accumsan ipsum id eros ullamcorper, vel aliquet tellus congue.</p>'
	});
}