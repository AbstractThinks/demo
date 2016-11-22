$(document).ready(function () {
    init();
})


function init() {
    $('.submit.button').on('click', function () {
        var account = $('#account').val();
        var psd = $('#password').val();
        $.get('http://k12.iyunbei.com/api/login', "username="+account+"&password="+psd, function (data) {
            if (data.error) {

            } else {
                location.href = "./index.html"
            }
        })
    });
}
