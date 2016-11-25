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
		defaultText: "Upload your file",
		onDrop: function(file){
			//File object => https://developer.mozilla.org/en-US/docs/Web/API/File
			console.log(file.name);

			// Upload your file using the method you prefer (ex: $.ajax) and call
			// the method finishUpload() as soon as your upload is finished;
			setTimeout(function(){
				fileUpload.uploadFinished();
			}, 3000);
		}
	});	
}
