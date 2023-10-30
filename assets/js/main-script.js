(function($) {
"use strict";

//mobile nav
if($('.mobile-menu').length){

    var mobileMenuContent = $('#top-navigation .navigation').html();

    $('.mobile-menu .navigation').append(mobileMenuContent);

    $('.sticky-header .navigation').append(mobileMenuContent);

    $('.mobile-menu .close-btn').on('click', function() {
        $('body').removeClass('mobile-menu-visible');
    });

    // Dropdown button

    $(',mobile-menu li.menu-item-has-children .dropdown-btn').on('click',
    function() {
        $(this).prev('ul').slideToggle(500);
    });

    // menu toggle button

    $('.mobile-nav-toggler').on('click', function() {
        $('body').addClass('mobile-meu-visible');
    });


    // menu toggle button

    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible");
    });

}
})(jQuery);