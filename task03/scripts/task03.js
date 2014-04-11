$(function() {
	var counter = -1;

	var nextSlide = function() {
		counter++;

		$('.slide').hide('slow');

		$('#slide-' + counter)
		  .show('slow')
		  .click(function() {
		  	nextSlide();
		  });	
	}	
	nextSlide();
})