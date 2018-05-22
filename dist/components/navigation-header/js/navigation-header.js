'use strict';

console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');
var mobileHeader = document.querySelector('.header__mobile');
console.log(mobileHeader);
console.log(sideNav);
openMobileMenu.addEventListener('click', function () {
  toggleIcon(this, closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function () {
  toggleIcon(this, openMobileMenu);
});

function toggleIcon(hideElement, showElement) {

  if (!mobileHeader.classList.contains('active')) {
    console.log('I have it slow me down');
    mobileHeader.classList.add('active');
  } else {
    setTimeout(function () {
      mobileHeader.classList.remove('active');
    }, 400);
  }

  if (hideElement.classList.contains('active')) {
    hideElement.classList.remove('active');
    showElement.classList.add('active');
  }
}
//# sourceMappingURL=navigation-header.js.map
