
$(function() {

	//creating variables for the colors green and red
	var r = 0;
	var g  = 242;

	//
	$('#pink-maker').click(function() {
		r += 150;
		g -= 150;
		$('body').css('background-color', 'rgb(' + r + ', ' + g + ' , 255)'); 

	$('#blue-maker').click(function() {
		r -= 100;
		g += 100;
		$('body').css('background-color', 'rgb(' + r + ', ' + g + ', 255)');

		});
	});
});