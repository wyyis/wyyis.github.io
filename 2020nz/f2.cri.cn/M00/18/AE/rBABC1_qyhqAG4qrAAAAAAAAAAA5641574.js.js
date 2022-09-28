// var browser = {
//     versions: function () {
//         var u = navigator.userAgent, app = navigator.appVersion;
//         return {     //移动终端浏览器版本信息
//             trident: u.indexOf('Trident') > -1, //IE内核
//             presto: u.indexOf('Presto') > -1, //opera内核
//             webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//             mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
//             iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//             iPad: u.indexOf('iPad') > -1, //是否iPad
//             webApp: u.indexOf('Safari') == -1 //是否web应用程序，没有头部与底部
//         };
//     }(),
//     language: (navigator.browserLanguage || navigator.language).toLowerCase()
// }
// if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
//     var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
//     if (ua.match(/MicroMessenger/i) == "micromessenger") {
//         //在微信中打开
//     }
//     if (ua.match(/WeiBo/i) == "weibo") {
//         // allLoadOk()
//         //在新浪微博客户端打开
//     }
//     if (ua.match(/QQ/i) == "qq") {
//         //在QQ空间打开
//     }
//     if (browser.versions.ios) {
//         //是否在IOS浏览器打开
//     }
//     if (browser.versions.android) {
//         //是否在安卓浏览器打开
//     }
// } else {
//     //否则就是PC浏览器打开
// }

// var sUserAgent = navigator.userAgent.toLowerCase();
// var isWhat = {
//     bIsIpad: sUserAgent.match(/ipad/i) == "ipad",
//     bIsIphoneOs: sUserAgent.match(/iphone os/i) == "iphone os",
//     bIsMidp: sUserAgent.match(/midp/i) == "midp",
//     bIsUc7: sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
//     bIsUc: sUserAgent.match(/ucweb/i) == "ucweb",
//     bIsCE: sUserAgent.match(/windows ce/i) == "windows ce",
//     bIsWM: sUserAgent.match(/windows mobile/i) == "windows mobile",
//     bIsAndroid: sUserAgent.indexOf('android') > -1 || sUserAgent.indexOf('linux') > -1,
//     bIsTrident: sUserAgent.indexOf('trident') > -1,
//     bIsPresto: sUserAgent.indexOf('presto') > -1,
//     bIsWebKit: sUserAgent.indexOf('applewebkit') > -1,
//     bIsGecko: sUserAgent.indexOf('gecko') > -1 && sUserAgent.indexOf('khtml') == -1,
//     bIsMobile: !!sUserAgent.match(/applewebkit.*mobile.*/) || !!sUserAgent.match(/appleWebkit/),
//     bIsIos: !!sUserAgent.match(/\(i[^;]+;( u;)? cpsuseragent.+mac os x/),
//     // bIsIPhone: sUserAgent.indexOf('iphone') > -1 || sUserAgent.indexOf('mac') > -1, //鏄惁涓篿Phone鎴栬€匭QHD娴忚鍣�
//     bIsWebApp: sUserAgent.indexOf('safari') == -1
// };

// if ((isWhat.bIsIpad || isWhat.bIsIphoneOs || isWhat.bIsMidp || isWhat.bIsUc7 || isWhat.bIsUc || isWhat.bIsAndroid || isWhat.bIsCE || isWhat.bIsWM)) {

// } else {
//     //	$("body").addClass("pcstyle").css("transform","scale(.6, .6)")
//     //	$(".wrap").css("width","750px")
// }
// // if (window.screen.availWidth * 2 > window.screen.availHeight) {
// //     $(".btn-next-1").css({ "top": "21.32rem" });
// //     $(".chat-text").css({ "bottom": "0.75rem" })
// //     $(".chat-bg-ticket").css({ "bottom": "-1rem" })
// // }
// //wx
// var nickname = null;
// var headimgurl = null;
// if (location.href.indexOf('?userInfo') == -1) {
//     var ua = window.navigator.userAgent.toLowerCase();
//     if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//         setTimeout(function () {
//             window.location.href = 'https://www.cri.cn/wxopen/_2020nz-20201229'
//         }, 10000);
//     }
//     function method(s) {
//         return s.split("/").slice("3").join("/")
//     }
// }
// else {
//     get_TELurldata()
// }
// function get_TELurldata() {
//     try {
//         var Request = new UrlSearch();
//         var userInfo = decodeURIComponent(Request.userInfo);
//         userInfo = JSON.parse(userInfo)
//         nickname = userInfo.nickname
//         var openid = userInfo.unionid
//         var language = userInfo.language
//         headimgurl = userInfo.headimgurl
//     } catch (e) { }
// }
// function UrlSearch() {
//     var name, value;
//     var str = location.href;
//     var num = str.indexOf("?")
//     str = str.substr(num + 1);
//     var arr = str.split("&");
//     for (var i = 0; i < arr.length; i++) {
//         num = arr[i].indexOf("=");
//         if (num > 0) {
//             name = arr[i].substring(0, num);
//             value = arr[i].substr(num + 1);
//             this[name] = value;
//         }
//     }
// }

// //提交信息
// var userId = "";
// var userPic = "";
// var userName = "";
// var userContent = "";
// if(location.href.indexOf('?userInfo') != -1){
// 	if(headimgurl==""){
// 		userPic="https://news.cri.cn/wximg/f2.cri.cn/M00/18/B0/rBABCV_qyiiAc36zAAAAAAAAAAA5783986.touxiang.jpg"
// 	}else{
//         userPic = headimgurl;
//         $('.haibao-touxiang').find('img').attr('src',userPic);
// 	}
// 	userName = nickname;
// }else{
// 	// userPic = $("#pl-pic img").attr("src");
// 	userPic="https://news.cri.cn/wximg/f2.cri.cn/M00/18/B0/rBABCV_qyiiAc36zAAAAAAAAAAA5783986.touxiang.jpg"
// 	userName = "游客";
// }


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

$('.loading').click(function(){
    if ($('.loadactive').length) {
        $('.loading').remove();
        $('#pageaudio')[0].play();
    }
})


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

var e;
var numIndex;
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

// $('.year-end').height($(window).height());

// $('.year-end-scene .scene-box').each(function () {
//     $(this).height($(window).height())
// })

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

                    // 火星场景js
                    if ($('.scene-box').eq(numIndex).index() == 3) {
                        
                        $('.scene-box').eq(numIndex).find('.fanhui').show();

                        Twotimer = setInterval(function () {
                            $('.scene-box4-li-1').each(function () {
                                $(this).animate({
                                    top: '8.11rem',
                                }, 1000)
                                $(this).animate({
                                    top: '8.41rem',
                                }, 1000)
                            })

                            $('.scene-box4-li-2').each(function () {
                                $(this).animate({
                                    top: '2.39rem',
                                }, 1000)
                                $(this).animate({
                                    top: '2.69rem',
                                }, 1000)
                            })

                            $('.scene-box4-li-4').each(function () {
                                $(this).animate({
                                    bottom: '2.95rem',
                                }, 1000)
                                $(this).animate({
                                    bottom: '2.65rem',
                                }, 1000)
                            })
                        }, 1000)

                        $('.scene-box4-li-2').click(function () {
                            $(this).addClass('imgShow');
                            $('.scene-box4-li-3').addClass('imgShow');
                        })
                        $('.scene-box4-li-4').click(function () {
                            $(this).addClass('imgShow');
                            $('.scene-box4-li-5').addClass('imgShow');
                        })
                        $('.scene-box4-li-1').click(function () {
                            clearInterval(Twotimer);
                            imgNum = 5
                            $(this).addClass('imgShow');
                            $('.yun').addClass('yunAc');
                            setTimeout(function () {
                                $('.scene-box4-li-6').addClass('imgShow');
                                $('.yun').removeClass('yunAc');
                                Twotimer = setInterval(function () {
                                    imgNum++
                                    $('.scene-box').eq(numIndex).find('li').eq(imgNum).addClass('imgShow');

                                    if (imgNum == 9) {
                                        clearInterval(Twotimer);
                                        imgNum = 1;
                                    }
                                }, 1000)
                            }, 2000);

                        })

                    } else {
                        setTimeout(function () {
                            imgShow();
                        }, 500);
                    }

                    function imgShow() {
                        timer = setInterval(function () {

                            // 拜登场景js
                            if ($('.scene-box').eq(numIndex).index() == 2) {
                                $('.scene-box').eq(numIndex).find('.fanhui').show();
                                $('.scene-box').eq(numIndex).find('li:lt(2)').addClass('imgShow')
                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == 2) {
                                    imgNum = 2;
                                }
                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == 3) {

                                    $('.scene-box').eq(numIndex).find('li').eq(3).addClass('imgShow');
                                    $('.scene-box').eq(numIndex).find('li').eq(4).addClass('imgShow');
                                    $($('.scene-box').eq(numIndex).find('li').eq(3)).animate({
                                        top: "14rem",
                                    }, { speed: 3000, queue: false });
                                    $($('.scene-box').eq(numIndex).find('li').eq(4)).animate({
                                        height: "15rem",
                                    }, { speed: 3000, queue: false });
                                    imgNum = 4;
                                }
                                imgNum++;
                                $('.scene-box').eq(numIndex).find('li').eq(imgNum - 1).addClass('imgShow');

                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == $('.scene-box').eq(numIndex).find('li').length) {
                                    clearInterval(timer);
                                    imgNum = 1;
                                }

                                // 世界经济论坛
                            } else if ($('.scene-box').eq(numIndex).index() == 5) {
                                $('.scene-box').eq(numIndex).find('.fanhui').show();
                                $('.scene-box').eq(numIndex).find('li:lt(3)').addClass('imgShow');
                                $('.scene-box6-li-1').animate({
                                    height: '3.29rem',
                                }, 1000);
                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == 3) {
                                    imgNum = 3
                                    Twotimer = setInterval(function () {
                                        $('.scene-box6-li-2').each(function () {
                                            $(this).animate({
                                                top: '7.93rem',
                                            }, 1000)
                                            $(this).animate({
                                                top: '8.43rem',
                                            }, 1000)
                                        })

                                        $('.scene-box6-li-3').each(function () {
                                            $(this).animate({
                                                top: '16.81rem',
                                            }, 1000)
                                            $(this).animate({
                                                top: '17.31rem',
                                            }, 1000)
                                        })
                                    }, 1000)
                                }

                                setTimeout(function () {
                                    imgNum++
                                    $('.scene-box').eq(numIndex).find('li').eq(imgNum - 1).addClass('imgShow');
                                }, 1500);

                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == $('.scene-box').eq(numIndex).find('li').length) {
                                    clearInterval(timer);
                                    clearInterval(Twotimer);
                                    imgNum = 1;
                                }

                                // 扩大开放场景js
                            } else if ($('.scene-box').eq(numIndex).index() == 1) {
                                $('.scene-box').eq(numIndex).find('.fanhui').show();
                                clearInterval(timer);
                                $('.scene-box').eq(numIndex).find('li:even').addClass('imgShow');
                                    
                                    Twotimer = setInterval(function () {
                                        $('.scene-box2-li-1').each(function () {
                                            $(this).animate({
                                                top: '12.51rem',
                                            }, 1000)
                                            $(this).animate({
                                                top: '12.81rem',
                                            }, 1000)
                                        })
    
                                        $('.scene-box2-li-3').each(function () {
                                            $(this).animate({
                                                top: '13.47rem',
                                            }, 1000)
                                            $(this).animate({
                                                top: '13.77rem',
                                            }, 1000)
                                        })
    
                                        $('.scene-box2-li-5').each(function () {
                                            $(this).animate({
                                                top: '12.51rem',
                                            }, 1000)
                                            $(this).animate({
                                                top: '12.81rem',
                                            }, 1000)
                                        })
                                    }, 1000)
                                $('.scene-box').eq(numIndex).find('li:even').each(function () {
                                    $(this).click(function () {
                                        $(this).next().addClass('imgShow');
                                        if ($('.scene-box').eq(numIndex).find('.imgShow').length == $('.scene-box').eq(numIndex).find('li').length) {
                                            imgNum = 1;
                                            clearInterval(Twotimer);
                                        }
                                    })
                                });

                                // 东京奥运会场景
                            } else if ($('.scene-box').eq(numIndex).index() == 4) {
                                $('.scene-box').eq(numIndex).find('.fanhui').show();
                                $('.scene-box').eq(numIndex).find('li:lt(3)').addClass('imgShow');
                                $('.jishiqi-1').addClass('active');
                                $('.jishiqi-2').addClass('active');
                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == 3) {
                                    imgNum = 3;
                                }
                                setTimeout(function () {
                                    if ($('.scene-box').eq(numIndex).find('.imgShow').length == 5) {
                                        $('.scene-box').eq(numIndex).find('li:lt(7)').addClass('imgShow');
                                        imgNum = 6;
                                    }
                                }, 1000);

                                setTimeout(function () {
                                    imgNum++
                                    $('.scene-box').eq(numIndex).find('li').eq(imgNum - 1).addClass('imgShow');
                                }, 1000);

                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == $('.scene-box').eq(numIndex).find('li').length) {
                                    clearInterval(timer);
                                    imgNum = 1;
                                }
                            } else if ($('.scene-box').eq(numIndex).index() == 0) {
                                $('.scene-box').eq(numIndex).find('.fanhui').show();
                                $('.scene-box').eq(numIndex).find('li').eq(imgnumT - 1).addClass('imgShow');
                                imgnumT ++
                                if ($('.scene-box').eq(numIndex).find('.imgShow').length == $('.scene-box').eq(numIndex).find('li').length) {
                                    clearInterval(timer);
                                    imgnumT = 1;
                                }

                            }else{

                            }
                        }, 1500);
                    }
                    $('.scene-box').eq(numIndex).find('.fanhui').click(function () {
                        imgNum = 1;
                        clearInterval(timer);
                        clearInterval(Twotimer);
                        $('.scene-box').eq(numIndex).removeClass('scene-box-index');
                        _this.removeClass('fragment-btn');
                        setTimeout(function () {
                            $('.year-end-fragment').show();
                            $('.year-end-fragment-indexBox').show();
                            $('.year-end-fragment-indexBox-gai').show();
                        }, 500);
                        _this.attr("changjing", "on");
                        haibao ++
                        if (haibao - 1 == $('.year-end-fragment li').length) {
                            setTimeout(function () {
                                $('.haibao').css('left','0');
                            }, 1000);
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


function haiBaoRandom() {
    //x上限，y下限     
    var haiBaoRandomX = $('.haibao-flag-list li').length;
    var haiBaoRandomY = 1;
    var rand = parseInt(Math.random() * (haiBaoRandomX - haiBaoRandomY + 1));
    $(".haibao-flag").find('img').attr('src',$('.haibao-flag-list img').eq(rand).attr('src'));
    $('.haibao-flag').width($('.haibao-flag-list img').eq(rand).attr('p-width'));
    $('.haibao-flag').height($('.haibao-flag-list img').eq(rand).attr('p-height'));
}

$(".huan").click(function () {
    haiBaoRandom();
});

// 生成海报
$(".newshaibao").click(function(){

	
	if(navigator.appVersion.indexOf('ChinaNews')!=-1 || navigator.appVersion.indexOf('chinanews')!=-1){
        $('.haibaiUrl').css('left','0')
        html2canvas(document.querySelector('.haibai-sc'), { useCORS: true }).then(canvas => {
			$(".haibaiUrl").html("")
            var dataUrl = canvas.toDataURL();
            var newImg = document.createElement("img");
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
            newImg.src = dataUrl;
            $(".haibaiUrl").append(newImg)
	});
	
	}
})



