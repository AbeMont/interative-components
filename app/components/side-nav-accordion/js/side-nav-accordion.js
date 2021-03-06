console.log('Side Navigation Accordion');

var sideNavBtn = document.querySelector('[data-open-sideNav]');
var sideNav = document.querySelector('.side-nav-accordion');
var closeSideNavBtn = document.querySelector('[data-close-sideNav]');
var subNav_Toggle_Menus = Array.from(document.querySelectorAll('[data-toggle-subnav]'));

sideNavBtn.addEventListener('click', function(){
  sideNav.classList.add('active');
});

closeSideNavBtn.addEventListener('click', function () {
    sideNav.classList.remove('active');
});

subNav_Toggle_Menus.forEach(function(el){
  el.addEventListener('click',function(){
    el.classList.toggle('active');
    var subnav = el.nextElementSibling;
    if(subnav.style.height){
      subnav.style.height = null;
    } else {
      subnav.style.height = subnav.scrollHeight + 'px';
    }
  });
});
