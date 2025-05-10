import Swiper, { Navigation } from "swiper";

export function utilGallery() {
  if (document.querySelector(".utilSlider")) {
    new Swiper(".utilSlider", {
      modules: [Navigation],
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      grabCursor: true,
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}
