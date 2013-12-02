$(function() {
	$('.tour img').click(function() {
		$('.tour').hide('slow')
		$('.living').css('display', 'block')
	})

	$('.living img').click(function() {
		$('.living').hide('slow')
		$('.bath').css('display', 'block')
	})

	$('.bath img').click(function() {
		$('.bath').hide('slow')
		$('.kitchen').css('display', 'block')
	})

	$('.kitchen img').click(function() {
		$('.kitchen').hide('slow')
		$('.backyard').css('display', 'block')
	})
})