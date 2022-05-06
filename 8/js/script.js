let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--hidden')) {
    navMain.classList.remove('main-nav--hidden');
    navMain.classList.add('main-nav--visible');
  } else {
    navMain.classList.add('main-nav--hidden');
    navMain.classList.remove('main-nav--visible');
  }
});
