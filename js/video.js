var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autplay = false;
	video.loop = false;
});

var volume = document.getElementById("volume")
var slider = document.getElementById("slider")
if (document.getElementById("play")) {
	document.getElementById("play").addEventListener("click", function() {
		console.log("play")
		volume.innerHTML = slider.value + "%";
		slider.oninput = function() {
			volume.innerHTML = this.value + "%";
			video.volume = this.value / 100;
		}
		video.play();
	})
}

if (document.getElementById("pause")) {
	document.getElementById("pause").addEventListener("click", function() {
		console.log("paused");
		video.pause();
	});

}

if (document.getElementById("slower")) {
	document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate -= (video.playbackRate * 0.10);
		console.log("Speed Down: " + video.playbackRate);
	})
}

if (document.getElementById("faster")) {
	document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate += (video.playbackRate * 0.1111);
		console.log("Speed Up: " + video.playbackRate);
	})
}

video.muted = false; 
if (document.getElementById("mute")) {
	document.getElementById("mute").addEventListener("click", function() {
		if (video.muted !== false) {
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
			console.log("unmuted");
		}
		else {
			console.log("muted");
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
		}
	})
}

if (document.getElementById("skip")) {
	document.getElementById("skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.duration <= video.currentTime) {
			video.currentTime = 0;
		}
		console.log("current time: " + video.currentTime);
	})
}

if (document.getElementById("vintage")) {
	document.getElementById("vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	})
}

if (document.getElementById("orig")) {
	document.getElementById("orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})
}
