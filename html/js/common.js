const modules = index.modules;
const $ = modules.$;

let scrollPosition = 0;
function togglePopup(show) {
  console.log(window.scrollY);
  const body = document.body;

  if (show) {
    scrollPosition = window.scrollY;
    $('body').addClass('no-scroll');
    body.style.top = `-${scrollPosition}px`;
  } else {
    $('body').removeClass('no-scroll');
    window.scrollTo(0, scrollPosition);
  }
}


function navClick() {
  $(document).on('click', '.burger-btn', function () {
    if ($('.header').hasClass('with-background')) {
      $('.header').removeClass('with-background');
      $('.symbol-open-icon').removeClass('hidden');
      $('.symbol-close-icon').addClass('hidden');
    } else {
      $('.header').addClass('with-background');
      $('.symbol-open-icon').addClass('hidden');
      $('.symbol-close-icon').removeClass('hidden');
    }
  });

  // mouse event
  $(".nav-item").mouseenter(function () {
    var menuH = $(this).find('.dropdown-menu > .container').innerHeight();
    var winH = $(window).innerHeight() - 200;
    var realH = menuH < winH ? menuH : winH;
    $('.header').addClass('header-in');

    $('.bg-menu').css({ 'height': realH + 'px' });
    $(this).addClass('active');
  }).mouseleave(function () {
    $('.bg-menu').css({ 'height': '0px' });
    $(this).removeClass('active');
    $('.header').removeClass('header-in');
  });

}

function toggleAccordion() {
  $(document).on('click', '.bloc-wrapper .title', function () {
    var parent = $(this).parent();
    if ($(parent).hasClass('active')) {
      $(parent).removeClass('active');
    } else {
      var oldActive = $('.bloc-wrapper');
      oldActive.removeClass('active');
      $(parent).addClass('active');
    }
  });
}


function openPinOverlay() {
  $('.popin-overlay').addClass('show');
}


function closePinOverlay() {
  $('.popin-overlay').removeClass('show');
}

function openWishList() {
  $(document).on('click', '#block-wishlistlink', function () {
    $('#wishListPop').addClass('active');
    openPinOverlay();
  });
}

function openAccount() {
  $(document).on('click', '#block-myaccount', function () {
    $('#accountPop').addClass('active');
    openPinOverlay();
  });
}

function openCart() {
  $(document).on('click', '#block-shoppingbag', function () {
    $('#cartPop').addClass('active');
    openPinOverlay();
  });
}


function openFilter() {
  $(document).on('click', '.btn-sort', function () {
    $('#filterPop').addClass('active');
    openPinOverlay();
  });
}


function openProductDetail() {
  $(document).on('click', '.open__ProductInfo .accordion__header', function () {
    $('#productDetailPop').addClass('active');
    openPinOverlay();
  });
}


function openCollection() {
  $(document).on('click', '.btn-choice', function () {
    $('#collectionPop').addClass('active');
    openPinOverlay();
  });
}



function closeSide() {
  $(document).on('click', '.side_close, .popin-overlay', function () {
    $('.side').removeClass('active');
    closePinOverlay();
  });
}




(function () {
  navClick();
  openWishList();
  openAccount();
  openCart();
  openCollection();
  openFilter();
  openProductDetail();



  closeSide();

  toggleAccordion();

  //$('#filterPop').addClass('active');

})();
