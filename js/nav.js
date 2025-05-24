		// Switch navbar logo based on background color (scroll)
		$(document).ready(function () {
			function updateLogo() {
				var navbar = $('.ftco_navbar');
				var logo = $('#navlogo');
				if (navbar.hasClass('scrolled')) {
					logo.attr('src', '/logo/logof.png');
				} else {
					logo.attr('src', '/logo/logo-w.png');
				}
			}

			$(window).on('scroll', function () {
				updateLogo();
			});

			// Initial check
			updateLogo();
		});