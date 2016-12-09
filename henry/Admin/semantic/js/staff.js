$(document).ready( function () {
        init();
});

function init() {
        $('.ui.sidemenu').on('click', function() {
            $('.sidemenu.sidebar')
                .sidebar('setting', 'transition', 'scale down')
                .sidebar('toggle');
        });
        $('.ui.dropdown').dropdown();
        // $('.ui.dropdown.my-select-subject').on('click', function (e) {
        //     var targetDom = $(e.target);
        //     var menuDom = targetDom.find('.menu');
        //     if (menuDom.hasClass('visible')) {
        //         menuDom.slideUp();
        //         menuDom.removeClass('visible').addClass('hidden');
        //     } else {
        //         menuDom.slideDown();
        //         menuDom.removeClass('hidden').addClass('visible');
        //     }
        //
        // })
        // var el = document.getElementById("my-table");
        // el.addEventListener("updatedTable", function (e) {
        //     $('#my-table').get(0).setAttribute("fireUpdate", e.detail.data);
        // });
}
