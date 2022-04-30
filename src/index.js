updateClicks();
var Mcount = 0;

function clickayame() {
	new Audio(getRandomSound()).play();
	updateClicks();
	Mcount++;
	document.getElementById("sessionCount").innerHTML = Mcount.toLocaleString('en-US');
}

function getRandomSound() {
	var soundsrc = "src/sound/ONI" + getRandomInt() + ".mp3";
	return soundsrc;
}

//Soundpack will update soon
function getRandomInt(max = 5) {
	let f = Math.floor(Math.random() * max) + 1;
	f = f.toString().padStart(3, "0");
	return f;
}

function updateClicks() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/hit/ayame.canaria.cc/awesomeclick");
	xhr.responseType = "json";
	xhr.onload = function() {
		document.getElementById("counted").innerHTML = parseInt(this.response.value, 10).toLocaleString('en-US');
	}
	xhr.send();
}

var run = setInterval(updateClicks, 60000);