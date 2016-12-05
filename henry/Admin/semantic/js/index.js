$(document).ready( function () {
    init();
});


function init() {
    $('.ui.sidemenu').on('click', function () {
        $('.sidemenu.sidebar')
          .sidebar('setting', 'transition', 'scale down')
          .sidebar('toggle');
    });


    $('.my-header .menu a.ui.item')
        .popup({
            popup : $('.my-header .menu .popup'),
            on    : 'click',
            position: 'bottom right',
            offset: -10
        });

    $('.ui.rating').rating();

    $("#my-carousel").owlCarousel({

         nav:true,
         loop:true,
         items:1,
         autoplay:true,
         navText:['<i class="chevron circle left icon"></i>','<i class="chevron circle right icon"></i>']

        });
    initPageStyle();
}

function initPageStyle() {
    $("a.item.active").removeClass("active");
    $("a.item[type=0]").addClass("active");
}
