console.log('Modal');

// Dom Elements
var openModal = Array.from(document.querySelectorAll('[data-open-modal]'));
var modals = Array.from(document.querySelectorAll('[data-modal]'));
var closeBtns = Array.from(document.querySelectorAll('[data-close-modal]'));

openModal.forEach(function(modalBtn){
  
  // Event listener for button clicked
  modalBtn.addEventListener('click', function(){

    // Here we get the data attribute value for the button we clicked
    var modalBtnID = modalBtn.dataset.openModal;

    for (var i = 0; i < modals.length; i++) {

      // On this loop iteration, we get All the modals and their data attribute value
      var modal = modals[i];
      var modalID = modals[i].dataset.modal;

      // If their values match, we give the matching modal its active class
      if(modalID === modalBtnID){
        modal.classList.add('active');
      }

    }
  });
});

// Only any close button we click, we remove the active states for any modal
closeBtns.forEach(function(closeBtn){
  closeBtn.addEventListener('click', function(){
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove('active');
    }
  });
});
