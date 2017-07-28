/// <reference path="../node_modules/@types/jquery/index.d.ts" />

$(document).ready(function () {
    'use strict';
    // CASHING VALUE FOR PROGRESS BAR */
    var progressOne = $(".skill-one .percentage").attr("data-value") * $(".skill-one .percentage").width() / 100,
        progressTwo = $(".skill-two .percentage").attr("data-value") * $(".skill-two .percentage").width() / 100,
        progressThree = $(".skill-three .percentage").attr("data-value") * $(".skill-three .percentage").width() / 100;

        // PRELOADER //
    /*
        $(".cssload-container").fadeOut(10000, function () {
            $(".preload-overlay").fadeOut(6000, function () {
                $("body").css("overflow","auto");
            });
        });
*/
    
        $(window).on("load", function() {
        var preloader = jQuery('.cssload-container');
        var preloaderArea = jQuery('.preload-overlay');
        preloader.fadeOut(3000);
        preloaderArea.delay(350).fadeOut('slow');
    });

    // ON REFREH NOT REMOVE CLASSES //
    if ($(this).scrollTop() > 1) {
        $(".top-nav").addClass("nav-fixed");
    } else {
        $(".top-nav").removeClass("nav-fixed");
    }
    // FOR PROGRESS BAR //
    if ($(this).scrollTop() > 800) {
        $('.skill-one span').animate({
            width: progressOne,
        }, 3000);
        $('.skill-two span').animate({
            width: progressTwo,
        }, 3000);
        $('.skill-three span').animate({
            width: progressThree,
        }, 3000);
    }

    // Add Class To Burger Icon //

    $(".burger-icon").on("click", function () {
        $(".top-nav ul").parents(".list-up").toggleClass('sticky');
    });

    // Add Active Class To Menu  Links //

    $(".top-nav ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // SMOOTH SLIDING TO SECTION //

    $(".slide-section").on("click", function (e) {
        e.preventDefault();
        var navHref = $(this).attr("href"),
            navHeight = $('.top-nav').height();
        if (navHref == ("#about")) {
            $("body, html").animate({
                scrollTop: $(navHref).offset().top - navHeight + 20
            }, 1500);
        } else {
            $("body, html").animate({
                scrollTop: $(navHref).offset().top - navHeight
            }, 1500);
        }
    });




    // Effects Make On Resize Window //

    $(window).resize(function () {
        $(".top-nav ul").parents().removeClass("sticky");
    });

    // Check The ScrollTop  //

    $(document).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $(".top-nav").addClass("nav-fixed");
        } else {
            $(".top-nav").removeClass("nav-fixed");
        }

        // CHECK SROLLTOP FOR PROGRESS BAR //
        if ($(this).scrollTop() > 800) {
            $('.skill-one span').animate({
                width: progressOne,
            }, 3000);
            $('.skill-two span').animate({
                width: progressTwo,
            }, 3000);
            $('.skill-three span').animate({
                width: progressThree,
            }, 3000);
        }
    });
    // GALLARY FILTER //
    $('.folio-filter').on("click", function () {
        var filterValue = $(this).attr("data-filter");
        if (filterValue == ".all") {
            $(".gallary").show(1000);
        } else {
            $(".gallary").not(filterValue).hide(1000);
            $(".gallary").filter(filterValue).show();
        }
        $(this).addClass("active").siblings().removeClass("active");
    });


    // back to top //
    $(".footer .top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 4000);
        $(".top-nav ul li:first").addClass("active").siblings().removeClass("active");
    });

}); // Document Ready
