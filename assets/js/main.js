$(document).ready(function($){
	"use strict";

	// Sticky Header Active
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if(scroll >350) {
			$(".sticky-header").addClass("sticky");
		} else {
			$(".sticky-header").removeClass("sticky");
		}
	});

	// Mobile Menu Active
	$('#mobile-menu').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: '.mobile-menu'
	});

	// Slider Active
	$('.slider-active').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ["Back","Next"],
	    smartSpeed: 1000,
	    autoplay: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	// Product slider Active
	$('.product-active').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ["Back","Next"],
	    smartSpeed: 1000,
	    margin: 30,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	         768:{
	            items:2
	        },
	        1200:{
	            items:4
	        }
	    }
	})

	// Brand slider Active
	$('.brand-active').owlCarousel({
	    loop:true,
	    nav:false,
	    smartSpeed: 1000,
	    autoplay: true,
	    navText: false,
	    autoplayTimeout: 3000,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:5
	        },
	        1200:{
	            items:6
	        }
	    }
	})

	// Range slider
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 50, 450 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );



	// Nice select 
	$('select').niceSelect();

	// Elevete zoom active
	$(".zoom").elevateZoom({
		zoomWindowHeight: 700,
		zoomWindowWidth: 600,
		zoomWindowOffetx: 10,
		borderSize: 1,
		easing:true

	});

	// Skill Bar active
	$('.demo').simpleSkillbar({});

	// Faq accordion active
	$( "#accordion" ).accordion({
      collapsible: true
    });


	// Portfolio Filter active
    var mixer = mixitup('.potrfolio-wrapper');

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

}(jQuery));