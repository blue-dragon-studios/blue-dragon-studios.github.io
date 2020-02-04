$(document).ready(function() {
	$('.gallery').cycle({
		fx: 'scrollHorz', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 0,
		next: '#right',
		prev: '#left',
		slides: 'img',
		centerHorz: true,
		centerVert: true,
		speed: "0",
		manualSpeed: "0",
		fx: "scrollHorz"
	});
	$('.description').cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 0,
		slides: 'div',
		autoHeight: "calc",
		next: '#right',
		prev: '#left',
		speed: "0",
		manualSpeed: "0"
	});
	//var number = $('#mySlideshow').is( '.cycle-paused' );
	//$('.description').cycle('goto', number;
	
});
