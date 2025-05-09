 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
		$('.carousel-team').owlCarousel({
			autoplay: true,
			autoHeight: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 4
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();


})(jQuery);



function sendEmail(event) {
	event.preventDefault(); // Prevent the default form submission

	const name = document.getElementById('appointment_name').value;
	const email = document.getElementById('appointment_email').value;
	const date = document.getElementById('appointment_date').value;
	const time = document.getElementById('appointment_time').value;
	const service = document.getElementById('appointment_service').value;
	const phone = document.getElementById('phone').value;
	const message = document.getElementById('message').value;
	const recipient = 'SquareExstudios@gmail.com'; // Replace with the actual email address

	const subject = 'New Appointment Request';
	const body = `
	Name: ${name}
	Email: ${email}
	Date: ${date}
	Time: ${time}
	Service: ${service}
	Phone: ${phone}
	Message: ${message}
	`;

	const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoLink;
}

document.addEventListener('DOMContentLoaded', function () {
	setTimeout(function () {
		document.getElementById('loadingScreen').style.display = 'none';
		document.body.style.visibility = 'visible';
	}, 3000); // Delay in milliseconds (e.g., 2000 = 2 seconds)
});

/* 		var loadingScreen = document.querySelector(".loadingScreen");
		window.addEventListener('load', function () {
			loadingScreen.style.display = 'none';
		}) */


const navLinks = document.querySelectorAll('#ftco-nav .nav-link');
const sections = document.querySelectorAll('section[id]'); // Assuming your content sections have IDs

function setActiveLink() {
	let currentSectionId = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
			currentSectionId = section.id;
		}
	});

	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${currentSectionId}`) {
			link.classList.add('active');
		} else if (currentSectionId === '' && link.getAttribute('href') === '#index') {
			// Set Home as active if no section is in view (e.g., at the very top)
			link.classList.add('active');
		}
	});
}

// Listen for scroll events
window.addEventListener('scroll', setActiveLink);

// Call setActiveLink on initial load to handle cases where the URL has a hash
setActiveLink();


$(document).ready(function () {
	const privacyPolicyLink = $('#privacyPolicyLink');
	const privacyPolicyBox = $('#privacyPolicyBox');
	const closeButton = $('#closePrivacyPolicy');
	const overlay = $('#overlay');

	privacyPolicyLink.on('click', function (e) {
		e.preventDefault();
		privacyPolicyBox.addClass('show');
		overlay.addClass('show');
	});

	closeButton.on('click', function () {
		privacyPolicyBox.removeClass('show');
		overlay.removeClass('show');
	});

	overlay.on('click', function () {
		privacyPolicyBox.removeClass('show');
		overlay.removeClass('show');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	const dropdownToggles = document.querySelectorAll('.nav-item.dropdown > .nav-link, .nav-item.dropdown > span');

	function clearActive() {
		navLinks.forEach(link => link.classList.remove('active'));
		dropdownToggles.forEach(toggle => toggle.classList.remove('active'));
	}

	function onScroll() {
		let scrollPos = window.scrollY || window.pageYOffset;
		clearActive();

		sections.forEach(section => {
			const top = section.offsetTop - 80;
			const bottom = top + section.offsetHeight;
			const id = section.getAttribute('id');

			if (scrollPos >= top && scrollPos < bottom) {
				navLinks.forEach(link => {
					if (link.getAttribute('href') === '#' + id || link.getAttribute('href') === 'index.html#' + id) {
						link.classList.add('active');
						// Add active to parent dropdown toggle if exists
						const dropdownToggle = link.closest('.dropdown-menu')?.previousElementSibling;
						if (dropdownToggle) {
							dropdownToggle.classList.add('active');
						}
					}
				});
			}
		});
	}

	window.addEventListener('scroll', onScroll);
	onScroll(); // initialize on page load
});

document.addEventListener('DOMContentLoaded', function () {
	const aboutToggle = document.getElementById('navbarDropdown');
	if (aboutToggle) {
		aboutToggle.style.cursor = 'pointer';
		aboutToggle.addEventListener('click', function (e) {
			if (!e.target.classList.contains('dropdown-item')) {
				window.location.href = 'about.html';
			}
		});
	}
	const galleryToggle = document.getElementById('navbarDropdownGallery');
	if (galleryToggle) {
		galleryToggle.style.cursor = 'pointer';
		galleryToggle.addEventListener('click', function (e) {
			if (!e.target.classList.contains('dropdown-item')) {
				window.location.href = 'index.html#gallery';
			}
		});
	}
	const servicesToggle = document.getElementById('navbarDropdownServices');
	if (servicesToggle) {
		servicesToggle.style.cursor = 'pointer';
		servicesToggle.addEventListener('click', function (e) {
			if (!e.target.classList.contains('dropdown-item')) {
				window.location.href = 'index.html#services';
			}
		});
	}
});