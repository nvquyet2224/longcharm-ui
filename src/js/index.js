import "../sass/index.scss";
import $ from "jquery";
import Swiper, { Pagination, Navigation, Scrollbar, Mousewheel, FreeMode } from "swiper";
//import gsap from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
//import { CountUp } from 'countup.js';


export { Swiper, Pagination };
export { $ };

function motionGallery() {
  if (document.querySelector(".motionSlider")) {
    new Swiper(".motionSlider", {
      modules: [Navigation, Pagination],
      effect: "slide",
      loop: false,
      speed: 800,
      preloadImages: false,
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 4,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      // scrollbar: {
      //   el: '.luminous__gallery .swiper-scrollbar',
      //   hide: false,
      //   draggable: true
      // },
      // mousewheel: {
      //   sensitivity: 1,
      //   forceToAxis: true, // Bắt buộc cuộn theo trục chính
      //   releaseOnEdges: true, // Tiếp tục cuộn khi đến cuối
      // },
      breakpoints: {
        1023: {
          slidesPerView: 4,
          spaceBetween: 4
        }
      },
      // pagination: {
      //   el: ".luminous .swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: "#motion .swiper-button-next",
        prevEl: "#motion .swiper-button-prev",
      },
      pagination: {
        el: "#motion .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}

function collectionGallery() {
  if (document.querySelector(".collectionSlider")) {
    new Swiper(".collectionSlider", {
      modules: [Navigation],
      effect: "slide",
      loop: false,
      speed: 800,
      preloadImages: false,
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 4,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 4
        }
      },
      navigation: {
        nextEl: "#collection .swiper-button-next",
        prevEl: "#collection .swiper-button-prev",
      },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}

function productGallery() {
  if (document.querySelector(".productSlider")) {
    new Swiper(".productSlider", {
      modules: [Navigation, Pagination],
      effect: "slide",
      loop: false,
      speed: 800,
      preloadImages: false,
      lazy: true,
      slidesPerView: 2,
      spaceBetween: 4,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      breakpoints: {
        1023: {
          slidesPerView: 4,
          spaceBetween: 4
        }
      },
      navigation: {
        nextEl: "#product .swiper-button-next",
        prevEl: "#product .swiper-button-prev",
      },
      pagination: {
        el: "#product .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}

function newGallery() {
  if (document.querySelector(".newSlider")) {
    new Swiper(".newSlider", {
      modules: [Navigation],
      effect: "slide",
      loop: false,
      speed: 800,
      preloadImages: false,
      lazy: true,
      slidesPerView: 1,
      spaceBetween: 4,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 4
        }
      },
      navigation: {
        nextEl: "#news .swiper-button-next",
        prevEl: "#news .swiper-button-prev",
      },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}

function onScroll() {
  var windowH = 0;
  setTimeout(() => {
    windowH = $(window).innerHeight();
    $('.page').attr({ 'style': `--height:${windowH}px` });
  }, 350);

  // Function to add/remove class on scroll
  var lastScrollTop = 0;
  function toggleClassOnView() {
    setTimeout(() => {
      const items = `.infrastructure__building--floor,
        .infrastructure__building--light,
        .infrastructure__box .title,
        .infrastructure__building--main,
        .infrastructure__information,
        .infrastructure .box-center,
        .infrastructure__information--list,
        .infrastructure__special`;
      $(items).each(function () {
        if ($(this).length) {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ vÃ o khung nhÃ¬n
          if (elementTop < viewportBottom && elementBottom > viewportTop) {
            $(this).addClass('in-view');
            if ($('.infrastructure__information--list.in-view')) {

              if ($('#number1').length) {
                number1.update(+$('#number1').attr('data-end'));
              }
              if ($('#number2').length) {
                number2.update(+$('#number2').attr('data-end'));
              }
              if ($('#number3').length) {
                number3.update(+$('#number3').attr('data-end'));
              }

            }
          }

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ thoÃ¡t khá»i khung nhÃ¬n
          if (elementBottom <= viewportTop || elementTop >= viewportBottom) {
            $(this).removeClass('in-view');
          }

        }

      });
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 45) {
         $('.header').addClass('sticky');
      } else {
         $('.header').removeClass('sticky');
      }
      /*var scrollTop = $(this).scrollTop();
      if (scrollTop > lastScrollTop) {
        $('.header').removeClass('sticky');
      } else if (scrollTop < lastScrollTop) {
        if (scrollTop <= $('.banner__box').height()) {
          $('.header').removeClass('sticky');
        } else {
          $('.header').addClass('sticky');
        }
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;*/
    }, 50);
  }

  //$(window).on('scroll resize', toggleClassOnView);
  $(window).on('scroll', toggleClassOnView);
  $(window).on('resize', function () {
    toggleClassOnView();
    setTimeout(() => {
      windowH = $(window).innerHeight();
      $('.page').attr({ 'style': `--height:${windowH}px` });
    }, 10);
  });

  toggleClassOnView();

}

(function () {
  onScroll();
  motionGallery();
  collectionGallery();
  productGallery();
  newGallery();
})();
