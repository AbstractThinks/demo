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
    initPageStyle();
    var el = document.getElementById("my-class");
    el.addEventListener("updatedCards", function (e) {
        $('#my-card').get(0).setAttribute("fireUpdate", e.detail.data);
    });

}
function getParamsUrl() {
    var url = location.search;
    var arr;
    var obj = {};
    if (url) {
        arr = url.split("?")[1].split("&");
        for(var i = 0; i < arr.length; i++) {
            obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }
        return obj;
    } else {
        return '';
    }

}
function initPageStyle() {
    var obj = getParamsUrl();
    if (obj) {
        if (obj.resourceTypeId) {
            $("a.item.active").removeClass("active");
            $("a.item[type="+obj.resourceTypeId+"]").addClass("active");
            $(".class a.button[type="+obj.resourceTypeId+"]").addClass("primary");
        }

        if (obj.subjectId) {
            $(".subject a.button[type="+obj.subjectId+"]").addClass("primary");
        } else {
            $(".subject a.button[type=0]").addClass("primary");
        }
        $(".grade a.button[type=0]").addClass("primary");
    }
}
