// menu for mobile
var mainNav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

toggle.addEventListener('click', function() {
	if(mainNav.classList.contains('main-nav--closed')) {
		mainNav.classList.remove('main-nav--closed');
		mainNav.classList.add('main-nav--opened');
	} else {
		mainNav.classList.remove('main-nav--opened');
		mainNav.classList.add('main-nav--closed');
	}
});


//login

var logForm = document.querySelector('.log-in');
var login = document.getElementById('login');
var modal = document.querySelector('.modal-overlay');
var loginClose = document.getElementById('login-close');


login.onclick = function (event) {
	event.preventDefault();

	modal.style.display = 'block';
	logForm.style.display = 'block';
}

loginClose.onclick = function () {
	logForm.style.display = 'none';
	modal.style.display = 'none';
}

modal.onclick = function () {
	logForm.style.display = 'none';
	modal.style.display = 'none';
}

if ( !document.body.classList.contains(".inner-page") ) {
	// toggles advantages
	var advantagesToggles = document.querySelectorAll('.advantages__toggle');
	var advantagesSliderItem = document.querySelectorAll('.advantages-slider__item');

	// toggles reviews

	var reviewsToggles = document.querySelectorAll('.reviews__toggle');
	var reviewsSliderItem = document.querySelectorAll('.reviews-slider__item');


	function advantagesSlider(num) {
		for(var i = 0; i < 3; i++) {
			advantagesToggles[i].classList.remove('advantages__toggle--active');
			advantagesSliderItem[i].style.display = 'none';
		}
		advantagesToggles[num].classList.add('advantages__toggle--active');
		advantagesSliderItem[num].style.display = 'block';
	};

	function reviewsSlider(num) {
		for(var i = 0; i < 3; i++) {
			reviewsToggles[i].classList.remove('reviews__toggle--active');
			reviewsSliderItem[i].style.display = 'none';
		}
		reviewsToggles[num].classList.add('reviews__toggle--active');
		reviewsSliderItem[num].style.display = 'flex';
	};

	advantagesToggles[0].onclick = function() {
		advantagesSlider(0);
	};
	advantagesToggles[1].onclick = function() {
		advantagesSlider(1);
	};
	advantagesToggles[2].onclick = function() {
		advantagesSlider(2);
	};

	reviewsToggles[0].onclick = function() {
		reviewsSlider(0);
	};
	reviewsToggles[1].onclick = function() {
		reviewsSlider(1);
	};
	reviewsToggles[2].onclick = function() {
		reviewsSlider(2);
	};

}