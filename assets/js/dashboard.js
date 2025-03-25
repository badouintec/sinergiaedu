(function($) {
    "use strict";

    $(document).ready(function() {
        console.log("Dashboard initialized");

        // Actualizar la clase activa en el menú lateral
        $('.sidebar-nav a').on('click', function() {
            $('.sidebar-nav li').removeClass('active');
            $(this).parent('li').addClass('active');
            // No hacemos preventDefault() para permitir la navegación normal
        });

        // Mobile toggle para sidebar (si aplica)
        $('.mobile-sidebar-toggle').on('click', function() {
            $('.sidebar').toggleClass('visible-mobile');
        });
    });
})(jQuery);
