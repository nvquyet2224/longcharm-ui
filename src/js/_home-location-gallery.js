import Swiper, { Navigation } from "swiper";

export function locationGallery() {
  if (document.querySelector(".locationSlider")) {
    new Swiper(".locationSlider", {
      modules: [Navigation],
      effect: "slide",
      loop: true,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 2,
      autoHeight: false,
      centeredSlides: true,
      loopAdditionalSlides: 5,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      },
      // navigation: {
      //   nextEl: ".home-our-techniques__gallery .swiper-button-next",
      //   prevEl: ".home-our-techniques__gallery .swiper-button-prev",
      // },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}
