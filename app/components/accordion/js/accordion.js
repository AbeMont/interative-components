console.log('Accordion');

var accordionSections = Array.from(document.querySelectorAll('.accordion__content'));
var accordionBtns = Array.from(document.querySelectorAll('.accordion__btn'))
console.log(accordionSections);
console.log(accordionBtns);

accordionBtns.forEach(function(btn){

  btn.addEventListener('click', function(){

    // Get the next sibling
    var section = this.nextElementSibling;
    var sectionScollHeight = section.scrollHeight + 'px';

    // Conditions to remove all heights from all sections if not 0
    for (var i = 0; i < accordionSections.length; i++) {
      if (accordionSections[i].style.height) {
        accordionSections[i].style.height = 0 + 'px';
      }
    }

    // Give the next section its height
    section.style.height = section.scrollHeight + 'px';
  });
});
