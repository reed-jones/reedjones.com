$(function() {
    "use strict";
    /*
      =======================================================================
                Project Tabs
      =======================================================================
    */
    $("ul.tabs li").on("click", function() {
        var a = $(this).attr("data-tab"),
            b = $("ul.tabs li");
        b.removeClass("current");
        $(".tab-content").removeClass("current");
        $(this).addClass("current");
        $("#" + a).addClass("current");
        return false;
    });
    /*
      =======================================================================
                Page nav
      =======================================================================
    */
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120, 
        speed: 1200,
        currentClass: "act-link"
    });
    $(".scroll-nav-holder").scrollToFixed({
        minWidth: 540,
        zIndex: 12
    });

    function a() {
        // $(".alt").each(function() {
        //     $(this).css({
        //         "margin-top": -$(this).height() / 2 + "px"
        //     });
        // });
        var a = $(".scroll-nav li").length;
        // var b = $(".scroll-nav").width();
        // $(".scroll-nav li").css({
        //     //width: b / a - 0.5
        // });
        $(".hero-slider .item").css({
            height: $(".hero-slider").outerHeight(true)
        });
        $(".single-carousel-holder .item").css({
            height: $(".single-carousel-holder").outerHeight(true)
        });
    }
    a();
    var $window = $(window);
    $window.resize(function() {
        a();
    });
    /*
      =======================================================================
                Scroll animation - Skills stats
      =======================================================================
    */
    $(".stats").appear(function() {
        $(".num").countTo();
        $(".gpa").countToD();
    });
    $(".piechart-holder").appear(function() {
        $(this).find(".chart").each(function() {
            $(".chart").easyPieChart({
                barColor: "#ffc815",
                trackColor: "#404040",
                scaleColor: "#ffc815",
                size: "150",
                lineWidth: "40",
                lineCap: "butt",
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(".skillbar-box").appear(function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    /*
      =======================================================================
                Progress
      =======================================================================
    */
    $window.on("scroll", function(a) {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            height: d + "%"
        });
    });

    $window.ready(function(a) {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            height: d + "%"
        });
    });
    /*
      =======================================================================
                Scroll To Object
      =======================================================================
    */
    $(".custom-scroll-link").on("click", function() {
        var a = 20;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".to-top").on("click", function(a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*
      =======================================================================
                Hero image
      =======================================================================
    */
    var $one = $(".hero-image"),
        browserPrefix = "",
        usrAg = navigator.userAgent;

    var mobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

    // chrome goodies
    if (!mobile && usrAg.indexOf("Chrome") > -1){
        $("body").mousemove(function(a) {
            var b = Math.ceil(window.innerWidth / 1.5),
                c = Math.ceil(window.innerHeight / 1.5),
                d = a.pageX - b,
                e = a.pageY - c,
                f = e / c,
                g = -(d / b),
                h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
                i = h >= 1.5 ? 15 : 10 * h;

            $one.css("transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
        });
    }
});