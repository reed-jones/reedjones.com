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
    $(".scroll-nav ul").singlePageNav({
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

    /*
      =======================================================================
                Scroll animation - Skills stats
      =======================================================================
    */
    $(".stats").appear(function() {
        $(".num").countTo();
        $(".gpa").countToD();
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
    $(window).on("scroll", function(a) {
        progress(a);
    });

    $(window).ready(function(a) {
        progress(a);
    });

    function progress(a){
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            height: d + "%"
        });
    };
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
    

    // chrome goodies
    if (!mobile && navigator.userAgent.indexOf("Chrome") > -1){
        $(".hero-wrap").mousemove(function(a) {
            var b = Math.ceil(window.innerWidth / 1.5),
                c = Math.ceil(window.innerHeight / 1.5),
                d = a.pageX - b,
                e = a.pageY - c,
                f = e / c,
                g = -(d / b),
                h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
                i = h >= 1.5 ? 15 : 10 * h;

            $(".hero-image").css("transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
        });
    }
    //// Firefox fix:
    // var $one = $(".hero-image"), browserPrefix = "", usrAg = navigator.userAgent;
    // if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) browserPrefix = "-webkit-"; else if (usrAg.indexOf("Opera") > -1) browserPrefix = "-o"; else if (usrAg.indexOf("Firefox") > -1) browserPrefix = "-moz-"; else if (usrAg.indexOf("MSIE") > -1) browserPrefix = "-ms-";
    // $(".hero-wrap").mousemove(function(a) {
    //     var b = Math.ceil(window.innerWidth / 1.5), c = Math.ceil(window.innerHeight / 1.5), d = a.pageX - b, e = a.pageY - c, f = e / c, g = -(d / b), h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)), i = 10 * h;
    //     $one.css(browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
    // });
});