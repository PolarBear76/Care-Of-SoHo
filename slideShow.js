var slideTitle = document.getElementById('slideTitle');
var slideImage = document.getElementById('slideImage');

var	frontSlide = document.getElementById('frontSlide');
var	backSlide = document.getElementById('backSlide');

var backSlideBottomLine = document.getElementById('bottomSlideLineLeft');
var backSlideUpperLine = document.getElementById('upperSlideLineLeft');

var frontSlideBottomLine = document.getElementById('bottomSlideLineRight');
var frontSlideUpperLine = document.getElementById('upperSlideLineRight');

backSlideBottomLine.style.transform = "rotate(33deg)";
backSlideUpperLine.style.transform = "rotate(-33deg)";

frontSlideBottomLine.style.transform = "rotate(-33deg)";
frontSlideUpperLine.style.transform = "rotate(33deg)";

var pictures = [
	["2d3d.png", "2D + 3D volym fransar ger en naturlig look"], 
	["brows.jpg", " "], 
	["dagensfransar2.jpg", " "], 
	["dagensfransar6.jpg", " "], 
	["dagensfransar7.jpg", " "], 
	["dagensFransarAnnaLila.jpg", "Mixat med lila fransar"], 
	["dagensFransarLeya.jpg", " "], 
	["dagensFransarMalinGuld.jpg", " "], 
	["elemismen.png", "Elemis - Time For Men"], 
	["elemispro.png", "Elemis och Elisabeth Arden PRO - finns att köpa i salongen"], 
	["essieNails2w.png", "Essie Professional Gellack efter 2 veckor"], 
	["essieNails3w.png", "Essie Professional Gellack efter 3 veckor"], 
	["eyeBooster.png", "Elemis - Eye lift Booster Serum"], 
	["eyeLashCollage.png", " "], 
	["fransarMix.jpg", " "], 
	["lattvolym.png", "Lättare volym"], 
	["lilafransar.jpg", "Lila fransar"], 
	["micro3d.jpg", "Microblandning med 3D bryn"], 
	["micro3d2.jpg", "cidesco"], 
	["microBlanding.jpg", "Microblandning 3D bryn"], 
	["nodesc.png", " "], 
	["nodesc1.png", " "], 
	["nodesc2.png", " "], 
	["nodesc3.png", " "], 
	["nodesc4.png", " "], 
	["nodesc5.png", " "], 
	["nodesc6.jpg", " "], 
	["nodesc7.jpg", " "], 
	["pafyllning.jpg", " "], 
	["permfrans.png", "Permanent fransböj"], 
	["produkter.png", "Essie Professional, Elisabeth Arden PRO, Elemis"], 
	["singelfransc.png", "Singelfransar - C-Böj"],
	["singelfransd.png", "Påfylllning, singel med D-böj"]
];

var currentPicture = 0;

console.log(pictures.length);

frontSlide.addEventListener("click", function() {changeSlide("front")});
backSlide.addEventListener("click", function() {changeSlide("back")});

document.addEventListener("keydown", keyPush);

function keyPush(keyPressed) {
	if(keyPressed.keyCode == 39) {
		changeSlide("front");
	} else {
		changeSlide("back");
	}
}

function changeSlide(direction) {
	if (direction == "front") {
		currentPicture++;
	} else {
		currentPicture--;
	}

	if (currentPicture > pictures.length - 1) {
		currentPicture = 0;
	} else if (currentPicture < 0) {
		currentPicture = pictures.length - 1;
	}

	slideImage.src = "bilder/slides/" + pictures[currentPicture][0];
	slideTitle.innerHTML = pictures[currentPicture][1];
	console.log(pictures[currentPicture][1]);
}