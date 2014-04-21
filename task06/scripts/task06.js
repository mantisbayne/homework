$(function() {

	var d = new Date();

	var	summer = new Date(2014, 06-1, 21);
	
	var	days = (summer - d) / (1000 * 60 * 60 * 24);

	text = Math.floor(days);

	$('#days').text(text);

});


