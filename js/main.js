
//*** Header
$(window).scroll(function() { //스크롤되면 header.on
   if($(window).scrollTop() >= 660) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
   $('.family_wrap').hide()
});

$('.header_left #gnb>li').hover(function() { //over
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
   $('header').css('background-color', '#FFF')
   $(this).addClass('over')
}, function() {
   $(this).removeClass('over')
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
$('.header_left #gnb li').hover(function() {
   $('header')
})

//*** Footer - Family Site
$('.familysite_wrap').click(function() {
   $('.family_wrap').toggle()
});

//*** Main-manage-Swiper
const mainSwiper = new Swiper ('.swiper_content', {
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

//*** 스크롤 시 ht_box 소제목 아래에서 위로 올라오는 fade 효과
$('.ht_box').css({
   opacity: 0,
   transform: 'translateY(30px)',
   transition: 'opacity 0.6s ease, transform 0.6s ease'
});
$(window).on('scroll', function() {
   $('.ht_box').each(function() {
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();
      let offsetTop = $(this).offset().top;

      //화면의 30% 지점에서 보이도록
      if (scrollTop + windowHeight * 0.7 > offsetTop) {
         $(this).css({
            opacity: 1,
            transform: 'translateY(0)' //원래 위치로 이동
         });
      }
   });
});