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
        // $('.add-item').on('click', function () {
        //     $('.ui.modal.info').modal('show');
        // });
        // $('.modify-item').on('click', function () {
        //     $('.ui.modal.modify').modal('show');
        // });
        // $('.search-item').on('click', function () {
        //     $('.ui.modal.info').modal('show');
        // });
        // $('.delete-item').on('click', function () {
        //     $('.ui.modal.delete').modal('show');
        // });
        // $('.export-item').on('click', function () {
        //
        // });
        // $('.import-item').on('click', function () {
        //     $('.ui.modal.file').modal('show');
        // });
}
