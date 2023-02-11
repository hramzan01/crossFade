var startImage = document.getElementById('startImg');
var nextImage = document.getElementById('nextImg');
var myStep = document.getElementById('title');
var myProcess = document.getElementById('process');
var imageArray = [
	'img/teaBag.svg',
	'img/teaBlack.svg',
	'img/teaMilk.svg',
	'img/teaMix.svg',
	'img/teaCup.svg',
];
var processArray = [
	'get cup',
	'put in the teabag',
	'pour hot water',
	'add milk',
	'mix it up',
];
var stepArray = [
	'Step One',
	'Step Two',
	'Step Three',
	'Step Four',
	'Step Five',
];
var arrayIndex = 0;

function changeImage() {
	startImage.setAttribute('src', imageArray[arrayIndex]);
	arrayIndex = (arrayIndex + 1) % imageArray.length;
	startImage.classList.toggle('opaque');
	nextImage.classList.toggle('opaque');
}

function changeProcess() {
	myProcess.innerHTML = processArray[arrayIndex];
}

function changeStep() {
	myStep.innerHTML = stepArray[arrayIndex];
}

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#button');
	button.addEventListener('click', function () {
		changeImage();
		changeProcess();
		changeStep();
	});
});
