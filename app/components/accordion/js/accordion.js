console.log('Accordion');

var accordionSections = Array.from(document.querySelectorAll('.accordion__content'));
var accordionBtns = Array.from(document.querySelectorAll('.accordion__btn'))
console.log(accordionSections);
console.log(accordionBtns);

accordionBtns.forEach(function(btn){

  btn.addEventListener('click', function(){

    // Get the next sibling
    var section = btn.nextElementSibling;
    var sectionScollHeight =  (section.scrollHeight*2) + 'px';

    // Conditions to remove all heights from all sections if not 0
    for (var i = 0; i < accordionSections.length; i++) {
      if (accordionSections[i].style.maxHeight) {
        accordionSections[i].style.maxHeight = null;
      }
    }

    // Give the next section its height
    section.style.maxHeight = sectionScollHeight;

  });
});
