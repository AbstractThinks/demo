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
    $('.menu.my-tab .item').tab({
            transition:"fade"
    });
     $('.ui.dropdown').dropdown();
     $('#dateField').calendar({ type: 'date' });
     var fileUpload = $("#file-upload").semanticFileUploader({
        defaultText: "上传文件",
        defaultLabel: "点击选择文件或者将文件拖入此区域",
        loadingText: "上传文件中...",
        successText: "上传成功",
        onDrop: function(file){
                //File object => https://developer.mozilla.org/en-US/docs/Web/API/File
                // console.log(file.name);

                var formData = new FormData($('#uploadForm')[0]);
                var name = $("input").val();
                formData.append("file",file);
                formData.append("name",name);
                $.ajax({
                    url : 'http://k12.iyunbei.com/api/resources/fileUpload',
                    type : 'post',
                    data : formData,
                    async: true,
                    cache: false,
                    // 告诉jQuery不要去处理发送的数据
                    processData : false,
                    // 告诉jQuery不要去设置Content-Type请求头
                    contentType : false,
                    beforeSend:function(){
                        console.log("正在进行，请稍候");
                    },
                    success : function(responseStr) {
                        fileUpload.uploadFinished($("#file-upload"));
                        $("#uploadedWork").attr('fileId', responseStr);
                    },
                    error : function(responseStr) {
                        console.log("error "+responseStr);
                    }
                });
                // $('#uploadForm').submit();

        }
    });
    console.log(fileUpload)
}
