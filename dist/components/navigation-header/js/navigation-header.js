'use strict';

console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');
var mobileHeader = document.querySelector('.header__mobile');
var mainHeaderList = Array.from(document.querySelector('.header__main ul').children);
console.log(mainHeaderList);

openMobileMenu.addEventListener('click', function () {
  toggleIcon(this, closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function () {
  toggleIcon(this, openMobileMenu);
});

function toggleIcon(hideElement, showElement) {

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

mainHeaderList.forEach(function (e) {
  var listAnchor = e.children[0];
  console.log(listAnchor);
  var subMenu = e.children[0].nextElementSibling;
  console.log(subMenu);
  if (subMenu) {}
});
//# sourceMappingURL=navigation-header.js.map
