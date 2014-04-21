$(function(){
	var paint = "white"
	
	$('.color').click(function(){
		paint = $(this).css('background-color')
	})

	$('#box').click(function() {
		$(this).css('background-color', paint);
	})
})