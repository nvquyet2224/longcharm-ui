import Swiper, { Pagination, Navigation } from "swiper";

export function apartmentSwiper() {
  if (document.querySelector(".detailSlider")) {
    new Swiper(".detailSlider", {
      modules: [Pagination],
      effect: "slide",
      loop: true,
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
      pagination: {
        el: ".detail__body .swiper-pagination",
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