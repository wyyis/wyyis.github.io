// 加载图片的流程
// 先加载图片后显示图片的可拖拽图
function loadimg() {
    var img = [],
        flag = 0,
        mulitImg = [];
    if ($(".loading").length >= 1) {
        // $(".fxb_img").each(function (i, elem) {
        //     var imgSrc = $(this).attr("src")
        //     mulitImg.push(imgSrc)
        // })
        $(".nz_bg").each(function (i, elem) {
            var imgSrc = $(this).css("background-image")
            if (imgSrc == "none") {

            } else {
                imgSrc = imgSrc.replace('url("', '')
                imgSrc = imgSrc.replace('")', '')
                mulitImg.push(imgSrc)
            }
        })
        var imgTotal = mulitImg.length;
        for (var i = 0; i < imgTotal; i++) {
            img[i] = new Image()
            img[i].src = mulitImg[i]
            img[i].onload = function () {
                flag++
                if (flag == imgTotal) {
                   $('.loading-zi').remove();
                   $('.loading-img').addClass('loadactive');
                }
            }
        }
    } else {
        // audioLoadOkfn()
    }
}
loadimg()


// 拖拽图片被点击后消失
// 后声音开始播放
$('.loading').click(function(){
    if ($('.loadactive').length) {
        $('.loading').remove();
        $('#pageaudio')[0].play();
    }
})

// 决定声音播放器的关和停
var isFalse = true;
$('.audio-box').click(function(){
    if (isFalse == true) {
        isFalse = false;
        $('#pageaudio')[0].pause();
    } else {
        isFalse = true;
        $('#pageaudio')[0].play();
    }
})


var wrapBL = $(".wrap").width() / $(".wrap").height()
var wrapW = $(".wrap").width();
var wrapH = $(".wrap").height();
var objBL = $(".wrap-auto").width() / $(".wrap-auto").height()
var objH = $(".wrap-auto").height();
var objW = $(".wrap-auto").width();
var timer = null;
autoDiv()
$(window).resize(function () {
    autoDiv()
})

function autoDiv() {

    timer = setTimeout(function () {
        wrapH = $(".wrap").height();
        objH = $(".wrap-auto").height();
        objW = $(".wrap-auto").width();

        wrapBL = $(".wrap").width() / $(".wrap").height()

        if (wrapBL.toFixed(2) >= objBL.toFixed(2)) {
            $(".wrap-auto").css({
                "transform": "scale(" + wrapH / objH + "," + wrapH / objH + ")",
                "margin-top": -(wrapH / 2) + "px",
                "margin-left": -($(".wrap-auto").width() / 2) + "px",
                "visibility": "visible"
            })

        } else {
            $(".wrap-auto").css({
                "transform": "scale(1,1)",
                "margin-top": -(objH / 2) + "px",
                "margin-left": -($(".wrap-auto").width() / 2) + "px",
                "visibility": "visible"
            })
        }
    }, 300)
}