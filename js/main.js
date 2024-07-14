(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]


/*-------------------------------------------
  js wow
--------------------------------------------- */
 new WOW().init();
/*-------------------------------------------
  js scrollup
--------------------------------------------- */
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 
/*-------------------------------------------
  jQuery MeanMenu
--------------------------------------------- */
jQuery(".main-menu").meanmenu();
	
/*-------------------------------------------
    isotope activation 
--------------------------------------------- */
//=================
$('container').imagesLoaded(function () {
	// filter items on button click
	$('.filtering-button').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
    });
    $('.filtering-button').on('click', 'a', function () {
        $('.filtering-button a').removeClass('active');
        $(this).addClass('active');
    });
	var $grid = $('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		animationOptions: {
			duration: 500,
			easing: 'zoom-in'
		},
		masonry: {
			// use element for option
			columnWidth: '.grid-item'
		},
		transitionDuration: '.9s'
	})
});


/*-------------------------------------------
testimonial-slide
--------------------------------------------- */
$(".testimonial-slide").owlCarousel({
	autoPlay: true, 
	slideSpeed:2000,
	pagination:true,
	navigation:false,	  
	items : 1,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	itemsDesktop : [1199,1],
	itemsDesktopSmall : [980,1],
	itemsTablet: [768,1],
	itemsMobile : [479,1],
}); 
/*-------------------------------------------
Sticky Header
--------------------------------------------- */
$(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}); 
/*-------------------------------------------
Counter up activation
--------------------------------------------- */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});




})(jQuery);
