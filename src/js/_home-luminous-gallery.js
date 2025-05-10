import Swiper, { Navigation } from "swiper";

export function homeLuminousGallery() { 
  if (document.querySelector(".gallerySlider")) {
    new Swiper(".gallerySlider", {
      modules: [Navigation],
      effect: "slide",
      loop: true,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1.8,
      spaceBetween: 15,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      breakpoints: {
        1023: {
          slidesPerView: 1.8,
          spaceBetween: 22
        }
      },
      navigation: {
        nextEl: ".luminous .swiper-button-next",
        prevEl: ".luminous .swiper-button-prev",
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
