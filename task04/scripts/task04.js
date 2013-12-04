$(function() {
	var counter = 0

	$('.btn-yes').click(function() {
			
		counter++;

		$('.cat').hide('slow');

		$('#play-' + counter).show('slow');
	});

	$('.btn-no').click(function() {
		$('.cat').hide('slow');
		$('#lose').show('slow');
	});

})