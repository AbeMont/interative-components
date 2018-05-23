console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');
var mobileHeader = document.querySelector('.header__mobile');
console.log(mobileHeader);
console.log(sideNav);
openMobileMenu.addEventListener('click', function(){
  toggleIcon(this,closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function(){
  toggleIcon(this,openMobileMenu);
});

function toggleIcon(hideElement,showElement){

  // Delay the animation due to z-index when we remove the active class
  if (!mobileHeader.classList.contains('active')) {
    mobileHeader.classList.add('active');
  } else {
      setTimeout(function(){mobileHeader.classList.remove('active');},350);
  }

  if (hideElement.classList.contains('active')) {
    hideElement.classList.remove('active');
    showElement.classList.add('active');
  }
}
