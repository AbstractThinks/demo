$(document).ready( function () {
    init();
});


function init() {
    $('.sidemenu').on('click', function() {
        $('.pushable .ui.sidebar')
            .sidebar('setting', 'transition', 'scale down')
            .sidebar('toggle') ;
    })
    $('.my-header .right.menu a')
      .popup({
        popup : $('.my-header .right.menu .popup'),
        on    : 'click',
        position: 'bottom right',
        offset: -10,
        delay: {
          show: 300
        }
    })
}
