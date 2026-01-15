import navProjects from "./js/nav_projects.js";
import navMenu from "./js/nav_menu.js";
import parallax from "./js/parallax.js";
import particles from "./js/particles.js";
import smartApparition from "./js/smart_apparition.js";
import { previousProjects, nextProjects } from "./js/slider_arrows_projects.js";
import { previousAbout, nextAbout } from "./js/slider_arrows_about.js";
import { form, validateForm } from "./js/form.js";
import serviceWorker from "./js/pwa_app.js";


window.addEventListener("load",function(){
    $('.loader-wrapper').addClass('active');
})   

document.addEventListener("DOMContentLoaded", () => {

	

	document.getElementById("play").addEventListener("click", justplay);

	navProjects();
	navMenu();
	parallax();
	particles();
	smartApparition();
	form();
	validateForm();

	document.getElementById("prevProjects").addEventListener("click", previousProjects);
	document.getElementById("nextProjects").addEventListener("click", nextProjects);
	document.getElementById("prevAbout").addEventListener("click", previousAbout);
	document.getElementById("nextAbout").addEventListener("click", nextAbout);

});


serviceWorker();



let wavy = document.querySelector('#wavy');
let wavyonSpan = document.querySelectorAll('.wavyon span')
let contentwavy = document.querySelector('#content-wavy');
let play = document.querySelector('#play');
let Playing_song = false;
let source = "./assets/midia/musicback.mp3";
let audio1 = new Audio();

audio1.addEventListener("load", function () {
	audio1.play();
}, true);

audio1.src = source;
audio1.autoplay = true;

function justplay() {
	if (Playing_song == false) {
		playsong();
		wavy.style.width = "70px";
		contentwavy.style.overflow = "visible";

	} else {
		pausesong();
		wavy.style.width = "0";
		contentwavy.style.overflow = "hidden";
	}
}

function playsong() {
	audio1.play();
	Playing_song = true;
	play.innerHTML = 'Sound';
	wavyonSpan.forEach((e) => {
		e.style.opacity = '1';
		e.style.transitionDelay = "0s";
	})
}

function pausesong() {
	audio1.pause();
	Playing_song = false;
	play.innerHTML = 'Off';
	wavyonSpan.forEach((e) => {
		e.style.opacity = '0';
		if (window.matchMedia('screen and (max-width: 600px)').matches) {
			e.style.transitionDelay = "0s";
		} else {
			e.style.transitionDelay = "0.5s";
		}
	})
}


if (typeof audio1.loop == 'boolean') {
	audio1.loop = true;
}
else {
	audio1.addEventListener('ended', function () {
		this.currentTime = 0;
		this.play();
	}, false);
}




