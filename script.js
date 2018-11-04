// OnLoad
window.onload = function () {
	var animation = Animate();
	animation.beginAnimation();
};

// classes

function Animate() {
	var experiences = ['Mount Holyoke student', 'Microsoft Garage Alumni', 'radio show host', 'Dungeons and Dragons player'];
	var index = 0;
	var next = function() {
		index = index + 1 < experiences.length ? index + 1 : 0;
	};

	var experienceElt = $('#experience')

	var animateExperiences = function() {
		experienceElt.fadeOut(200, function () {
			next();
			experienceElt.text(experiences[index]);
		}).fadeIn(200);
	};

	this.beginAnimation = function() {
		var timer = setTimeout(function tick(){
			animateExperiences();
			timer = setTimeout(tick, 2000)
		}, 2000);
	};
	return this;
}