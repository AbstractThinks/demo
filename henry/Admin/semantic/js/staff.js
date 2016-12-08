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
        // var el = document.getElementById("my-table");
        // el.addEventListener("updatedTable", function (e) {
        //     $('#my-table').get(0).setAttribute("fireUpdate", e.detail.data);
        // });
}
