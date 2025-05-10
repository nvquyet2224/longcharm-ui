export function navClick() {
  // Open menu
  document.querySelector(".toggle-menu").addEventListener("click", () => {
    const menu = document.querySelector(".header");
    document.querySelector("html, body").classList.add("no-scroll");
    menu.classList.add("open-menu");
  });
  // Close menu
  document.querySelector(".close-menu").addEventListener("click", () => {
    const menu = document.querySelector(".header");
    menu.classList.remove("open-menu");
    document.querySelector("html, body").classList.remove("no-scroll");
  });

  const body = document.querySelector('body');
  if (body) {
    const page = body.getAttribute('data-page');
    if (document.querySelector('.nav-menu li[data-page=' + page + '] > a')) {
      document.querySelector('.nav-menu li[data-page=' + page + '] > a').classList.add('active');
    }
    if (document.querySelector('.sub-menu li[data-sub=' + page + '] > a')) {
      document.querySelector('.sub-menu li[data-sub=' + page + '] > a').classList.add('active');
      const nav = document.querySelector('.sub-menu li[data-sub=' + page + '] > a').closest(".nav-menu > li");
      if (nav) {
        nav.querySelector('span').classList.add('current');
      }
    }
  }

}
