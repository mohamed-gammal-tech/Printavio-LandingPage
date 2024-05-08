
// Header import Start
document.addEventListener("DOMContentLoaded", function () {
	fetch("landingHeader.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("header-placeholder").innerHTML = data;
		});
});
// Header Import End


// Footer Import Start
document.addEventListener("DOMContentLoaded", function () {
	fetch("footer.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("footer-placeholder").innerHTML = data;
		});
});
// Footer Import End


const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

// Product slider start

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})

	preBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})
})

// Product slider end

// Artist slider start

const artistContainers = [...document.querySelectorAll('.artist-container')];
const artnxtBtn = [...document.querySelectorAll('.art-nxt-btn')];
const artpreBtn = [...document.querySelectorAll('.art-pre-btn')];

artistContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;
	
	artnxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})
	
	artpreBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})
})
// Artist slider End

// Offers slider Start

const offersContainers = [...document.querySelectorAll('.offers-container')];
const offersnxtBtn = [...document.querySelectorAll('.offers-nxt-btn')];
const offerspreBtn = [...document.querySelectorAll('.offers-pre-btn')];

offersContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;
	
	offersnxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})
	
	offerspreBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})
})

// Offers slider End