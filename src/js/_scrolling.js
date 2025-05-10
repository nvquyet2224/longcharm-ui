import $ from "jquery";

export function onScroll() {

  function setDelay(items, start) {
    if ($(items).length) {
      $(items).each(function (index) {
        $(this).css('animation-delay', `${(index + 1) * start}s`); // Delay increases for each item
      });
    }
  }

  // Function to add/remove class on scroll
  var lastScrollTop = 0;
  function toggleClassOnView() {
    setTimeout(() => {
    const items = `.header, .banner, .title, .home-about__key h3, .home-about__info, .home-about__key--item, .home-about__gallery--box, .home-collection__gallery, 
    .title-category, .product, .home-our-techniques__gallery, .home-millwork__item, .article, .box-center, .about__title, .about__mission--item, .about__milestone--img,
    .about__milestone--txt, .about__human--item, .about__human--brief, .about__sustainability--item, .about__sustainability--gallery__item, .about__tour--information,
    .about__tour--gallery__box, .breadcrumb li, .product__page--information, .product-cate, .tab-menu li, .technique__information p, .technique__item--img, 
    .technique__item--txt, .manufacturing__txt, .manufacturing__box--gallery, .millwork__infomation, .millwork__item, .form-group, .brochure__item, .footer, .pagination`;
      $(items).each(function () {
        if ($(this).length) {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ vÃ o khung nhÃ¬n
          if (elementTop < viewportBottom && elementBottom > viewportTop) {
            $(this).addClass('in-view');
          }

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ thoÃ¡t khá»i khung nhÃ¬n
          if (elementBottom <= viewportTop || elementTop >= viewportBottom) {
            $(this).removeClass('in-view');
          }
        }

      });
      var scrollTop = $(this).scrollTop();
      if (scrollTop > lastScrollTop) {
        if (scrollTop >= 200) {
          $('.header').addClass('sticky');
        }
      } else if (scrollTop < lastScrollTop) {
        $('.header').removeClass('sticky');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 50);
  }

  $(window).on('scroll resize', toggleClassOnView);

  setDelay('.breadcrumb li', 0.15);
  setDelay('.tab-menu li', 0.15);
  toggleClassOnView();

}
