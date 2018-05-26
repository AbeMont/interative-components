'use strict';

console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');
var mobileHeader = document.querySelector('.header__mobile');

openMobileMenu.addEventListener('click', function () {
  toggleIcon(this, closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function () {
  toggleIcon(this, openMobileMenu);
});

function toggleIcon(hideElement, showElement) {

  // Delay the animation due to z-index when we remove the active class
  if (!mobileHeader.classList.contains('active')) {
    mobileHeader.classList.add('active');
  } else {
    mobileHeader.classList.remove('active');
  }

  if (hideElement.classList.contains('active')) {
    hideElement.classList.remove('active');
    showElement.classList.add('active');
  }
}
//# sourceMappingURL=navigation-header.js.map
