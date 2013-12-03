$(function() {
	var counter = -1

	$('#btn-yes').click(function() {
		
	counter++;

	$('.cat').hide('slow');

	$('#play-' + counter).show('slow');

		});
	}
})