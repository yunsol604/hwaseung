/* header on */
// $('header').hover(function() {
//    $('header').toggleClass('on');})

$(window).scroll(function() { //스크롤링이 될 때마다
   if($(window).scrollTop() >= 660) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
   $('.family_wrap').hide()
});

/* Header */
$('.header_left #gnb>li').hover(function() { //over
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
   $('header').css('background-color', '#FFF')
});
$('.header_left .allmenu_wrap').hover(function() { //out
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
}, function() {
   $('.header_left .allmenu_wrap').stop().slideUp();
   $('header').removeClass('on')
   $('header').css('background-color', '')
});
$('.btn_total_menu').click(function() {
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
});

/* Footer - Family Site */
$('.familysite_wrap').click(function() {
   $('.family_wrap').toggle()
});

/* Main-manage-Swiper*/
const mainSwiper = new Swiper ('.swiper_content', {
   // effect:
   loop: false,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   centeredSlides: true,
   centerInsufficientSlides: true,
   slidesPerView: 3,
   spaceBetween: 80,
   speed: 300,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'on',
   },
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
   },
});
$('.swiper_content .auto-play').click(function() {
   $(this).hide()
   $('.swiper_content .auto-stop').show();
      mainSwiper.autoplay.start();
})
$('.swiper_content .auto-stop').click(function() {
   $(this).hide()
   $('.swiper_content .auto-play').show();
      mainSwiper.autoplay.stop();
})
