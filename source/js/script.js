const navMain = document.querySelector('.main-menu__list');
const navToggle = document.querySelector('.main-menu__toggle');

navMain.classList.remove('main-menu__list--nojs');
navMain.classList.add('main-menu--closed');
navToggle.classList.remove('main-menu__toggle--opened');
navToggle.classList.add('main-menu__toggle--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
  }

  if (navToggle.classList.contains('main-menu__toggle--opened')) {
    navToggle.classList.remove('main-menu__toggle--opened');
    navToggle.classList.add('main-menu__toggle--closed');
  } else {
    navToggle.classList.remove('main-menu__toggle--closed');
    navToggle.classList.add('main-menu__toggle--opened');
  }
});
