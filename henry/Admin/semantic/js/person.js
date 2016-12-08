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
     $("#file-upload").semanticFileUploader({
        defaultText: "上传文件",
        defaultLabel: "点击选择文件或者将文件拖入此区域",
        loadingText: "上传文件中...",
        successText: "上传成功",
        onDrop: function(file){
                //File object => https://developer.mozilla.org/en-US/docs/Web/API/File
                // console.log(file.name);

                var formData = new FormData();
                // var name = $("input").val();
                formData.append("file",file);
                // formData.append("name",name);
                $.ajax({
                    url : 'http://k12.iyunbei.com/api/resources/resourceUpload',
                    type : 'POST',
                    data : formData,
                    async: false,
                    cache: false,
                    // 告诉jQuery不要去处理发送的数据
                    processData : false,
                    // 告诉jQuery不要去设置Content-Type请求头
                    contentType : false,
                    beforeSend:function(){
                        console.log("正在进行，请稍候");
                    },
                    success : function(responseStr) {
                        if(responseStr.status===0){
                            console.log("成功 "+responseStr);
                        }else{
                            console.log("失败 "+responseStr);
                        }
                    },
                    error : function(responseStr) {
                        console.log("error "+responseStr);
                    }
                });
                // Upload your file using the method you prefer (ex: $.ajax) and call
                // the method finishUpload() as soon as your upload is finished;
                // var fileObj = new FormData($('#uploadFileForm').get(0));
                // $.ajax({
                //       url: 'http://k12.iyunbei.com/api/resources/resourceUpload' ,
                //       type: 'POST',
                //     //   data: file,
                //       data: fileObj,
                //       async: false,
                //       cache: false,
                //       contentType: false,
                //       processData: false,
                //       success: function (returndata) {
                //           console.log(returndata);
                //           fileUpload.uploadFinished();
                //       },
                //       error: function (returndata) {
                //           console.log(returndata);
                //       }
                //
                //   });
        }
    });
}
