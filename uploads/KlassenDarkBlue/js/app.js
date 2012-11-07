// JavaScript Document

// Slidshow
//выжидаем пару секунд, чтобы картинки успели загрузиться... можно просто поставить на onload-событие последнего из рисунков
$(document).ready(function(){
    setTimeout( "slideSwitch('slideshow',1000);",8000 );
});
    
// Slider
//
$(window).load(function(){

  $(".carousel").jCarouselLite({
      btnNext: ".next",
      btnPrev: ".prev",
      visible: 5,
      scroll: 2,
      //start: 0,
      //circular: false,
      speed: 900
  });
  
});