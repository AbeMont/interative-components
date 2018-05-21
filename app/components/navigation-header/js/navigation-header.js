console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');

openMobileMenu.addEventListener('click', function(){
  toggleIcon(this,closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function(){
  toggleIcon(this,openMobileMenu);
});

function toggleIcon(hideElement,showElement){
  if (hideElement.classList.contains('active')) {
    hideElement.classList.remove('active');
    showElement.classList.add('active');
  }
}
