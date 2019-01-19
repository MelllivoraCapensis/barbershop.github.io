var officeEnter = document.getElementById("office-enter");
var office = document.querySelector(".office");
var officeClose = document.querySelector("#office-close");
var modalMask = document.querySelector(".modal-mask");
var login = office.querySelector("[name=office-login]");
var password = office.querySelector("[name=office-password]");
var officeForm = office.querySelector("form");
var map = document.querySelector(".map");
var mapEnter = document.getElementById("map-button");
var mapClose = document.getElementById("map-close");
var galleryPrev = document.querySelector(".js-gallery-prev");
var galleryNext = document.querySelector(".js-gallery-next");
officeEnter.addEventListener("click", function(e) {
	e.preventDefault();
	office.style.display = "block";
	office.classList.add('office-show');
	setTimeout(() => {
		office.classList.remove('office-show');
	}, 500);
	modalMask.style.display = "block";
	if(localStorage.getItem('login'))
	{
		login.value = localStorage.getItem('login');
		password.focus();
	}
	else
		login.focus();
});
officeClose.addEventListener("click", function(e) {
	e.preventDefault();
	office.style.display = "none";
	modalMask.style.display = "none";
});
modalMask.addEventListener("click", function(e) {
	office.style.display = "none";
	modalMask.style.display = "none";
});
officeForm.addEventListener("submit", function(e) {
	if(!login.value || !password.value)
	{   
		e.preventDefault();
		office.classList.add("office-error");
		setTimeout(() => {
			office.classList.remove("office-error");
		}, 300)
	} else {
		localStorage.setItem('login', login.value);
	}
});
mapEnter.addEventListener("click", (e) => {
	e.preventDefault();
	map.classList.add('map-show');
});
mapClose.addEventListener("click", (e) => {
	e.preventDefault();
	map.classList.remove('map-show');
});
const gallerySlider = (direction, slidesCount) => {
	let image = document.querySelector('.gallery-image img');
	let imageSrc = image.src;
	let imageNum = Number(imageSrc.substring(
		imageSrc.lastIndexOf("-") + 1, imageSrc.length - 4)) -1;
	image.style.opacity = 0.3;
	setTimeout(() => {
        image.src = "img/gallery-image-" + 
    (((slidesCount + imageNum + direction) % slidesCount) + 1 ) + ".jpg";
        image.style.opacity = 1;
	}, 600);
  
	
} 
galleryPrev.addEventListener("click", gallerySlider.bind(null, -1, 5));
galleryNext.addEventListener("click", gallerySlider.bind(null, 1, 5));