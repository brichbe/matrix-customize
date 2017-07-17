var animateIntervalId;

function isAnimationActive() {
	return (animateIntervalId != null);
}

function runAnimation(canvas, firstLetter, letterRange, colorRgb,
		animateRate) {
	if (animateIntervalId) {
		clearInterval(animateIntervalId);
	}

	var context = canvas.getContext("2d");
	var screen = window.screen;
	var width = canvas.width = screen.width;
	var height = canvas.height = screen.height;
	context.clearRect(0, 0, width, height);

	var columns = Array(256).join(1).split('');

	context.font = "30px Arial";
	animateIntervalId = setInterval(function() {
		context.fillStyle = "rgba(0,0,0,0.05)";
		context.fillRect(0, 0, width, height);
		
		columns = columns.map(function(value, index) {
			context.fillStyle = colorRgb != null ? colorRgb : window.getRandomColor();
			var r = Math.random();
			context.fillText(String.fromCharCode(Math.round(firstLetter + r
					* letterRange)), index * 30, value);
			value = (value * 1 + 30);
			return value > 768 + r * 10000 ? 0 : value;
		});
	}, animateRate);
}