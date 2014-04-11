$(function() {
	var california = ["Los Angeles", "San Diego", "Santa Clara", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"];
	var texas = ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo"];

	var randomCaliCity = function() {
		return california[Math.floor(california.length * Math.random())];
	}

	var randomTexasCity = function() {
		return texas[Math.floor(texas.length * Math.random())];
	}

	var showPlace = function(place) {
		 geocoder.geocode( { 'address': place}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
          	var cords = results[0].geometry.location.lat() + "," + results[0].geometry.location.lng()	; 
		 	var url = "http://maps.googleapis.com/maps/api/streetview?size=800x600&location=" + cords + "&fov=90&heading=235&pitch=10&sensor=false";
		 	$('img').attr('src', url);
          } else {
            alert("Something got wrong " + status);
          }
        });
	}

	var geocoder =  new google.maps.Geocoder();

	var state = null;
	var city = null;

	$('#start').click(function() {

		if (Math.random() > .5) {
			state = 'california';
			city = randomCaliCity() + ', California';

		} else {
	        state = 'texas';
			city = randomTexasCity() + ', texas';
		}

		showPlace(city);
		console.log(city)
	});

	$('#california').click(function() {
		if (state === 'california') {
			alert('You win!');
		} else {
			alert('You lose, it was Texas!');
		}
	});

	$('#texas').click(function() {
		if (state === 'texas') {
			alert('You win!');
		} else {
			alert('You lose, it was California!');
		}
	});
	
});
