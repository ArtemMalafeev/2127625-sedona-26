let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  }
});
