console.log('Scroll Spy');

/////////////////////////
// Retrieve DOM Elements
///////////////////////


// Get scroll spy element as parent
var scrollSpy = document.querySelector('.scroll-spy');

// Get our sections to target
var scrollSpySections = Array.from(document.querySelectorAll('[data-spy]'));

// Get scroll nav Element
var scrollNav = document.querySelector('.scroll-nav');

// Get the section h3 to use ae titles for Scroll Spy
var text = Array.from(document.querySelectorAll('.scroll-spy-section h3'));

// Get Title from header to update
var title = document.querySelectorAll('.scroll-spy__title')[0].firstElementChild;

// Get the original text from the header title
var initialTitle = document.querySelectorAll('.scroll-spy__title')[0].firstElementChild.textContent;

// Current Section Scrolled
var currentSection;

/////////////////////////
// Scroll Event Listener
//////////////////////

// Event listener to scrollSpy
  window.addEventListener('scroll', function(){

    //document.querySelector('.page__meter').style.width = '0%';
    document.querySelector('.scroll-spy__meter').style.transition = 'width 0.3s';
    document.querySelector('.scroll-spy__meter').style.width = parseInt(((window.pageYOffset + window.innerHeight)/document.body.scrollHeight)*100 )+'%';


    if (window.pageYOffset === 0) {
      document.querySelector('.scroll-spy__meter').style.width = '0%';
    }


    // Trigger the active fixed class
    if(window.pageYOffset >= scrollSpy.children[0].scrollHeight){
      scrollSpy.classList.add('active');
    } else if (window.pageYOffset === 0) {
      scrollSpy.classList.remove('active');
    }
    scrollSpySections.forEach(function(section,index,array){
      var scrollNavText = scrollNav.children[0].children[index].children[0].textContent;

      currentSection = section.dataset.spy;

       if(section.getBoundingClientRect().top < 56){

          if(section.getBoundingClientRect().top > parseInt('-'+section.scrollHeight)+56){
            title.textContent = currentSection;
            scrollNav.children[0].children[index].children[0].classList.add('active')
          } else {
            scrollNav.children[0].children[index].children[0].classList.remove('active')
          }

          //console.log(section, section.getBoundingClientRect().top , parseInt('-'+section.scrollHeight));

       } else if (section.getBoundingClientRect().top >= 0) {
           scrollNav.children[0].children[index].children[0].classList.remove('active')
          }

      if (array[0].getBoundingClientRect().top > 56) {
        title.textContent = initialTitle;

      }

    });
  });

// Random ID Generator

function generateId(){
    var Id = Math.floor(Math.random()*9999);
    return Id;
}

//generateId();

function generateEl(cb) {
    var ul = document.createElement('ul');
    var scrollList = scrollNav.appendChild(ul);
    scrollList.classList.add('scroll-list');
    scrollSpySections.forEach(function(e,i){
      // For Each Iteration we must create the elements
      var li = document.createElement('li');
      var a = document.createElement('a');

      e.id = cb();

      var UlList = scrollList.appendChild(li).appendChild(a);
      UlList.textContent = text[i].textContent;
      UlList.href = "#" + e.id;
      //console.log(UlList);
  });

};

generateEl(generateId);
