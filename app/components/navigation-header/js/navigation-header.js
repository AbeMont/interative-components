console.log('Navigation Header');

var openMobileMenu = document.querySelector('.header .header__desktop [data-open-sideNav]');
var closeMobileMenu = document.querySelector('.header .header__desktop [data-close-sideNav]');
var mobileHeader = document.querySelector('.header__mobile');
var mainHeaderList = Array.from(document.querySelector('.header__main ul').children);
var headerSideNav = document.querySelector('.header__mobile .side-nav-accordion');
var headerHoverMenu = Array.from(document.querySelectorAll('.header__hover-menu'));
console.log(headerHoverMenu);

openMobileMenu.addEventListener('click', function(){
  toggleIcon(this,closeMobileMenu);
});

closeMobileMenu.addEventListener('click', function(){
  toggleIcon(this,openMobileMenu);
});

function toggleIcon(hideElement,showElement){

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

mainHeaderList.forEach(function(e){
  var listAnchor = e.children[0];
  var subMenu = e.children[0].nextElementSibling;
  if(subMenu){
    e.classList.add('header__subnav--active');
    listAnchor.addEventListener('click', function(){
      console.log(this);
    });
  }
});

var sideNavList = function () {

  var ul = document.createElement('ul');
  var sideNavUl = headerSideNav.appendChild(ul);

  mainHeaderList.forEach(function(listItem){

    var li = document.createElement('li');
    var a = document.createElement('a');
    var listText = listItem.children[0].textContent;

    var sideNavAnchor = sideNavUl.appendChild(li).appendChild(a);
    sideNavAnchor.href = listItem.children[0].href;
    sideNavAnchor.textContent = listText;

    var subMenu = listItem.children[0].nextElementSibling;

    if(subMenu){
      sideNavAnchor.setAttribute('data-toggle-subnav','');
      var i = document.createElement('i');
      var newAnchor = sideNavAnchor.appendChild(i);
      newAnchor.classList.add('fa','fa-angle-down');

      var ul = document.createElement('ul');
      var subnav = sideNavAnchor.parentNode.insertBefore(ul,sideNavAnchor.nextElementSibling);
      subnav.classList.add('sub-section');

      headerHoverMenu.forEach(function(el){
        if (el.parentNode.children[0].textContent === sideNavAnchor.textContent) {

          for (var i = 0; i < el.children.length; i++) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            var href = el.children[i].children[0].href;
            var innerSubNav = subnav.appendChild(li).appendChild(a);
            var innerSubNavText = el.children[i].children[0].textContent;
            innerSubNav.href = href;
            innerSubNav.textContent = innerSubNavText;
          }
        }
      });
    }

  });

}

sideNavList();
