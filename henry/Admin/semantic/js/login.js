$(document).ready(function () {
    init();
})


function init() {
    $('.ui.form').submit(function(e){
        return false;
    });
    $('.ui.form').form({
        inline:true,
        on: 'blur',
        transition: 'fade up',
        fields: {
            username: {
                identifier: 'username',
                rules: [{
                    type: 'empty',
                    prompt: '请输入用户名'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: '请输入密码'
                }]
            },

        },
        onSuccess: function() {
            var username = $('#username').val();
            var password = $('#password').val();
            var url_addr = 'http://k12.iyunbei.com/api/login?username='+username+'&password='+password;
            $.ajax({
                url:'http://k12.iyunbei.com/api/login',
                type: 'post',
                xhrFields: {
                        withCredentials: true
                },
                data:{"username":"admin","password":"123456"},
                dataType: 'json',
                cache: false,
                success: function (data) {
                    if (data.error) {
                        console.log('帐户不存在');
                    } else {
                        location.href = "./index.html";
                    }
                },
                error: function (e) {
                    console.log(e)
                }

            })
        }
    });

}
