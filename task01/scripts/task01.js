
$(function() {

	//creating variables for the colors green and red
	var r = 0;
	var g  = 242;

	//
	$('#pink-maker').click(function() {
		$('body').css('background-color', 'rgb(200, 50, 90)'); 
	});

	$('#blue-maker').click(function() {
		$('body').css('background-color', 'rgb(0, 0, 100)');
	});

});