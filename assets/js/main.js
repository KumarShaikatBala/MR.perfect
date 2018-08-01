$(document).ready(function($){
	"use strict";


    /***
     Preloader
     ***/
    $('body').addClass('preloader-active');

    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });
// wow js for animation:
    new WOW().init();

 // AOS Scrooling animation:
    AOS.init();

// Slicknav Responsive Nav:
    $(function(){
        $('#menu').slicknav();
    });


// Sidebar:

    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
    });



    // Scroll Header:
    $('nav').stickynav();
    // $('.scroll').stickynav();

// Scroll From Footer:
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 3000 );
    });


    /*$(document).on('click','a[href^="#"]',function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop:$($.attr(this,'href')).offset().top
        },2000)
    });*/



// Fixed Nav when Scrooling:
    window.onscroll = function(){

        if (window.pageYOffset >100) {

            nav.style.background = "#000000";
            nav.style.position ="fixed";

        }
        else{
            nav.style.background = "transparent";
        }
    }

    // owl-carousel blog section:
    $('.blog .owl-carousel').owlCarousel({
        margin: 30,
        loop:true,
        autoplay:true,
        item:3,
        navigation : true,
        pagination:false,
        nav:false,
        smartSpeed:1000,
        autoplayTimeout:2500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // owl curosal
	// ---- Active
    // $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
   /* $('.owl-carousel').owlCarousel({
        'nav':true,
        'autoplay':true,
        'navText':['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        'items':1
    })*/
   /* // owl curosal testimonial
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        items:1,
    })*/

    // Magnific Popup:video

    /*$('#video').magnificPopup({type:'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            },

            srcAction: 'iframe_src',
        }

    });*/

/*
Skillbar:
source link:https://www.jqueryscript.net/chart-graph/Animated-Configurable-Skill-Bar-Plugin-with-jQuery-Skills-Bar.html
*/

    $('.skillbar').skillBars({
        // options here
    });


// Clinet/counter:

   /* $('.counter-number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });*/


// portfolio:mixitup

    var mixer = mixitup('.portfolio-content');




// portfolio:popup magnificPopup:::

    $('.image-link').magnificPopup({type:'image'});



   /* $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });*/

}(jQuery));


