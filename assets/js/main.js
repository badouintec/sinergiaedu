/*
	Binary by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: IE.
			if (skel.vars.browser == 'ie')
				$body.addClass('is-ie');

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: $header.outerHeight() -1
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Posts.
			var $posts = $('.post');

			$posts.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					x;

				// Set image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

			});

	});

})(jQuery);

// Header scroll effect mejorado con nuevos colores
(function() {
    var header = document.querySelector('.modern-header');
    if (header) {
        // Aplicar estilo inicial
        updateHeaderStyle();
        
        // Actualizar en scroll
        window.addEventListener('scroll', updateHeaderStyle);
        
        // Función para actualizar estilos según posición de scroll
        function updateHeaderStyle() {
            if (window.scrollY > 50) {
                header.style.background = "#0D2C54"; // Azul oscuro para mejor contraste al hacer scroll
                header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
                header.style.height = "3.5em";
            } else {
                header.style.background =" #388be6";
                header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
                header.style.height = "4.25em";
            }
        }
        
        // Detectar cuando las imágenes se cargan para ajustar la posición
        window.addEventListener('load', function() {
            // Pequeño retraso para asegurar que todo esté renderizado
            setTimeout(function() {
                var bannerSection = document.getElementById('banner');
                if (bannerSection) {
                    bannerSection.style.marginTop = header.offsetHeight + 'px';
                }
            }, 100);
        });
    }
})();

// Mejora para navegación por anclajes y menú activo
(function() {
    // Función para actualizar el menú activo basado en sección visible
    function updateActiveMenu() {
        const sections = document.querySelectorAll('section[id], article[id], div[id="inicio"]');
        const navLinks = document.querySelectorAll('.modern-header nav.main-nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}` || 
                (currentSection.includes('one') && href === '#inicio') ||
                (currentSection.includes('two') && href === '#inicio') ||
                (currentSection.includes('three') && href === '#inicio') ||
                (currentSection.includes('four') && href === '#inicio') ||
                (currentSection.includes('five') && href === '#inicio') ||
                (currentSection.includes('six') && href === '#inicio')) {
                link.classList.add('active');
            }
        });
    }
    
    // Escuchar eventos de scroll para actualizar el menú
    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
    
    // Smooth scroll mejorado para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Ajustar por la altura del header
                const headerOffset = document.querySelector('.modern-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar URL sin recargar la página
                history.pushState(null, null, targetId);
            }
        });
    });
})();