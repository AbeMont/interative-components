console.log('Switches');

var inputSwitch = Array.from(document.querySelectorAll('.switch input'));

inputSwitch.forEach(function(input){

  // Text from .switch__desc
  var textOutput_On = input.parentNode.parentNode.children[1].children[0].dataset.switchOn;
  var textOutput_off = input.parentNode.parentNode.children[1].children[0].dataset.switchOff;
  var textOutput_Disabled = input.parentNode.parentNode.children[1].children[0].dataset.switchDisabled;

  function toggleIO(input) {

    if(input.disabled){
    //  input.parentNode.parentNode.classList.toggle('switch--disabled');
      input.parentNode.parentNode.children[1].children[0].textContent = textOutput_Disabled;
    } else if (input.checked) {
      input.parentNode.parentNode.children[1].children[0].textContent = textOutput_On;
    }  else {
      input.parentNode.parentNode.children[1].children[0].textContent = textOutput_off;
    }
  }

    input.addEventListener('click', function () {
      toggleIO(input);
    });

    toggleIO(input);

});
