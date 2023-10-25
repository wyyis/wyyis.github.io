function tiaoshi(){
    $('.year-end-fragment').hide();
    $('.year-end-fragment-indexBox').hide();
    $('.year-end-fragment-indexBox-gai').hide();
    $('.year-end-scene .scene-box').eq(5).addClass('scene-box-index');
    $('.haibao').css('left','0')
}

// tiaoshi()



// 加载图片的流程
// 先加载图片后显示图片的可拖拽图
function loadimg() {
    var img = [],
        flag = 0,
        mulitImg = [];
        console.log($(".loading").length)
        
    if ($(".loading").length >= 1) {
        // $(".fxb_img").each(function (i, elem) {
        //     var imgSrc = $(this).attr("src")
        //     mulitImg.push(imgSrc)
        // })
        
        $(".nz_bg").each(function (i, elem) {
            var imgSrc = $(this).css("background-image")
            if (imgSrc == "none") {
                console.log("没有图片")

            } else {
                imgSrc = imgSrc.replace('url("', '')
                imgSrc = imgSrc.replace('")', '')
                mulitImg.push(imgSrc)
                console.log("已找到一张图片")
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
                   console.log("已加载完毕")
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
        $('.audio-box').removeClass('paused');
    }
})

// 决定声音播放器的关和停
var isFalse = true;
$('.audio-box').click(function(){
    if (isFalse == true) {
        isFalse = false;
        $('#pageaudio')[0].pause();
        $('.audio-box').addClass('paused');
    } else {
        isFalse = true;
        $('#pageaudio')[0].play();
        $('.audio-box').removeClass('paused');
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



// 进入每个页面后



var e;
var numIndex=10;
var moveX;
var moveY;
var startX;
var startY
var numBox;
var timer = null;
var Twotimer = null;
var imgNum = 1;
var imgnumT = 1;
var haibao = 1;
var ZuiMaxWidth = (parseInt($('.wrap').width()) - parseInt($('.year-end-box').width() * (wrapH / objH))) / 2;
var flag1 = false;
var flag2 = false;
var flag3 = false;
$('.year-end-fragment li').on({
    touchstart: function (e) {
        e.preventDefault();
        numIndex = $(this).index();
        e = e || window.event;
        /* 获取元素可移动的最大宽高值 */
        maxWidth = $('.year-end').width() - $(this).width();
        maxHeight = $('.year-end').height() - $(this).height();
        /* 获取鼠标点击的位置距元素左边的值 正常 */
        // startX = e.originalEvent.targetTouches[0].pageX - $(this).offset().left;
        // startY = e.originalEvent.targetTouches[0].pageY - $(this).offset().top;
        /* 获取鼠标点击的位置距元素左边的值 缩放 */
        startX = ((e.originalEvent.targetTouches[0].pageX - ZuiMaxWidth) / (wrapH / objH)) - (($(this).offset().left - ZuiMaxWidth) / (wrapH / objH));
        startY = (e.originalEvent.targetTouches[0].pageY / (wrapH / objH)) - ($(this).offset().top / (wrapH / objH));
    },
    touchmove: function (e) {
        if ($(this).attr("changjing") == "off") {
            numBox = $('.year-end-fragment-indexBox li').eq(numIndex);
            e = e || window.event;
            e.preventDefault();
            // /* 新的位置 减去 最开始的位置 等于 要移动的值 */
            moveX = ((e.originalEvent.targetTouches[0].pageX - ZuiMaxWidth) / (wrapH / objH)) - startX;
            moveY = (e.originalEvent.targetTouches[0].pageY / (wrapH / objH)) - startY;

            // 超出范围限制
            if (moveX >= maxWidth) {
                moveX = maxWidth
            }
            if (moveY >= maxHeight) {
                moveY = maxHeight
            }
            if (moveX <= 0) {
                moveX = 0
            }
            if (moveY <= 0) {
                moveY = 0
            }
            // 给元素赋值
            $(this).css({ left: moveX, top: moveY });
        }
    },
    touchend: function (e) {
        e.preventDefault();
        e = e || window.event;
        var endWidth = ($('.year-end-fragment-indexBox').offset().left - ZuiMaxWidth) / (wrapH / objH);
        var endHeight = $('.year-end-fragment-indexBox').offset().top / (wrapH / objH)
        var endWidthMax = endWidth + ($('.year-end-fragment-indexBox').width() * (wrapH / objH));
        var endHeightMax = endHeight + ($('.year-end-fragment-indexBox').height() * (wrapH / objH));
        var thisNumW = $(this).offset().left;
        var thisNumH = $(this).offset().top;
        var thisNumWMax = $(this).offset().left + $(this).width()
        var thisNumHMax = $(this).offset().top + $(this).height()

        //  当前left      坑left      当前left     坑的宽度        当前top     坑的top        当前top      坑的高度
        if (thisNumW >= endWidth && thisNumW <= endWidthMax && thisNumH >= endHeight && thisNumH <= endHeightMax) {
            var endBoxW = numBox.css('left');
            var endBoxH = numBox.css('top');
            $(this).css({
                left: endBoxW,
                top: endBoxH
            });
            $(this).addClass('fragment-index-ac');
            var _this = $(this)

            // 加载动画场景
            setTimeout(function () {
                if (_this.attr("changjing") == 'off') {

                    $('.year-end-fragment').hide();
                    $('.year-end-fragment-indexBox').hide();
                    $('.year-end-fragment-indexBox-gai').hide();
                    $('.year-end-scene .scene-box').eq(numIndex).addClass('scene-box-index');

                    
                    if ($('.scene-box').eq(numIndex).index() == 6) {
                        
                        $('.scene-box').eq(numIndex).find('.fanhui').show();


                    } else {
                        setTimeout(function () {
                            imgShow();
                        }, 100);
                    }

                    function imgShow() {
                        timer = setInterval(function () {

                            // 辽宁js
                            if ($('.scene-box').eq(numIndex).index() == 2) {
                                setTimeout(function () {

                                    // $('.xinwen1').show();
                                    $('.xinwen3').animate({
                                        opacity: 1,
                                    },1000);
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 1000)
                                setTimeout(function () {

                                    $('.fanhui3').show();
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 3000)
                                setTimeout(function () {

                                    // $('.xinwen1').show();
                                    $('.scene-box3-li-3').animate({
                                        opacity: 1,
                                    },2500);
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 1000)
                                setTimeout(function () {
                                    console.log("fDF")
                                    if(flag3 == false){
                                        flag3 =true;
                                        $("body").append('<script src="js/ech3.js"></script>')

                                    }
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 2500);
                                // 世界经济论坛
                            } 

                                // 吉林
                            else if ($('.scene-box').eq(numIndex).index() == 1) {
                                setTimeout(function () {

                                    // $('.xinwen1').show();
                                    $('.xinwen2').animate({
                                        opacity: 1,
                                    },1000);
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 1000)

                                setTimeout(function () {

                                    $('.fanhui2').show();
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 3000)
                                setTimeout(function () {

                                    // $('.xinwen1').show();
                                    $('.title2').animate({
                                        opacity: 1,
                                    },1000);
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 2000)
                                setTimeout(function () {
                                    console.log("fDF")
                                    if(flag2 == false){
                                        flag2 =true;
                                        $("body").append('<script src="js/ech2.js"></script>')

                                    }
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 2500);

                               
                            } 
                            // 最后一个场景
                            else if ($('.scene-box').eq(numIndex).index() == 0) {

                                setTimeout(function () {

                                    // $('.xinwen1').show();
                                    $('.xinwen1').animate({
                                        opacity: 1,
                                    },1000);
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 1000)


                                setTimeout(function () {

                                    $('.fanhui1').show();
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 3000)

                               
                                setTimeout(function () {
                                    console.log("fDF")
                                    if(flag1 == false){
                                        flag1 =true;
                                        $("body").append('<script src="js/ech1.js"></script>')

                                    }
                                    // document.write("<script language='javascript' src='ech1.js'></script>");
                                }, 2500);

                            }else{

                            }
                        }, 20);
                    }


                    $('.scene-box').eq(numIndex).find('.fanhui').click(function () {
                        console.log("dsd")
                        imgNum = 1;
                        clearInterval(timer);
                        clearInterval(Twotimer);
                        $('.scene-box').eq(numIndex).removeClass('scene-box-index');
                        _this.removeClass('fragment-btn');
                        setTimeout(function () {
                            $('.year-end-fragment').show();
                            $('.year-end-fragment-indexBox').show();
                            $('.year-end-fragment-indexBox-gai').show();
                        }, 
                        .1000);
                        _this.attr("changjing", "on");
                        haibao ++
                        if (haibao - 1 == $('.year-end-fragment li').length) {
                            setTimeout(function () {
                                $('.haibao').css('left','0');
                            }, 1000);
                            clearInterval(timer);
                        }
                    })
                } else {
                    
                }
            }, 1000)
        } else {
            // console.log(222)
        }
    }
})

// 换一个
$('.haibao-flag').width($('.haibao-flag-list img').eq(0).attr('p-width'))
$('.haibao-flag').height($('.haibao-flag-list img').eq(0).attr('p-height'))

var rand =1;
function haiBaoRandom(rand) {
    $(".haibao-flag").find('img').attr('src',$('.haibao-flag-list img').eq(rand).attr('src'));
    $('.haibao-flag').width($('.haibao-flag-list img').eq(rand).attr('p-width'));
    $('.haibao-flag').height($('.haibao-flag-list img').eq(rand).attr('p-height'));
}

$(".huan").click(function () {
    haiBaoRandom(rand%4);
    rand=rand+1;
});


// 生成海报
$(".newshaibao").click(function(){

	
	if(navigator.appVersion.indexOf('ChinaNews')!=-1 || navigator.appVersion.indexOf('chinanews')!=-1){
        $('.haibaiUrl').css('left','0')
        html2canvas(document.querySelector('.haibai-sc'), { useCORS: true }).then(canvas => {
			$(".haibaiUrl").html("")
            var dataUrl = canvas.toDataURL();
            var newImg = document.createElement("img");
            // newImg.style.mixBlendMode = 'multiply';
            newImg.src = dataUrl;
            $(".haibaiUrl").append(newImg)
	});
	}else{
    $('.haibaiUrl').css('left','0')
    // $(".haibai-sc-name").append("<img src='"+userPic+"' >")
	html2canvas(document.querySelector('.haibai-sc'), { useCORS: true }).then(canvas => {
			$(".haibaiUrl").html("")
            var dataUrl = canvas.toDataURL();
            var newImg = document.createElement("img");
            // newImg.style.mixBlendMode = 'multiply';
            newImg.src = dataUrl;
            $(".haibaiUrl").append(newImg)
	});
	
	}
})