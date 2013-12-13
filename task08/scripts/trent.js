$(function() {
	//Setting width, height and context for the canvas
	var width = 1000,
		height = 600,
		//Shorthand for JQuery object
		$canvas = $('canvas'),
		//JQuery returns an array, so we need the first object
		canvas = $canvas[0],
	context = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
	$canvas.width(width);
	$canvas.height(height);
	var ball = new Ball(500, 300);

	//The paddle will move along the y-axis
	var y = 0;

	function render() {
		//Styling the background first
		context.fillStyle = '#E0FFFF';
		context.clearRect(0, 0, width, height);
		//Styling the paddle
		context.fillStyle = '#FF1493';
		//y-100 because we want the mouse to be in the center of the paddle
		context.fillRect(0, y-100, 50, 200)
		//How many times it calls the function
		ball.render();
		ball.update();
		setTimeout(render, 30)
	}
	setTimeout(render, 30);

	//When the mouse moves, function that paddle moves along y-axis
	$canvas.mousemove(function(event) {
		y = event.clientY;
	});



	function Ball(x, y) {
		this.x = x;
		this.y = y;
		this.speedX = 5;
		this.speedY = 2;
		this.radius = 8;
	}

	Ball.prototype.render = function() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		context.fillStyle = '#000000'
		context.fill();
	};

	var update = function() {
		ball.update();
	};

	Ball.prototype.update = function() {
		this.x -= this.speedX;
		this.y += this.speedY;

    	if (this.x < 0 || this.x > 600) {
	        this.speedY = 0;
	        this.speedX = 5;
	        this.x = 500;
	        this.y = 300;
    	}

    	if (this.x - 50 < 0) {
	        this.x = 50;
	        this.speedX = -this.speedX;
    	} else if (this.x + 50 > 1000) {
	        this.x = 550;
	        this.speedX = -this.speedX;
    	}
    };	
});