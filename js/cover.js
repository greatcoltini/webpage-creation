

var cover_choices = new Array('assets/cover_small.jpg', 'assets/cover_small_dark.jpg');

function randomCover() {
	var rand = Math.floor(Math.random() * cover_choices.length);
	$('body').css({
		'background-image' : 'url(' + cover_choices[rand] +')'
	});
}

window.onload = randomCover;