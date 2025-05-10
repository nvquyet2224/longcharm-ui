import Swiper, { Autoplay, Pagination } from "swiper";

export function bannerSwipper() {
  if (document.querySelector(".bannerSlider")) {
    new Swiper(".bannerSlider", {
      modules: [Pagination, Autoplay],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () { },
        transitionStart: function () { },
        transitionEnd: function () { },
      },
    });
  }
}
