$(function() {
	var r = 0;
	var g  = 242;

	$('#pink-maker').click(function() {
		r += 10;
		g -= 10;
		$('body').css('background-color', 'rgb(' + r + ', ' + g + ' , 255)');
	});
});