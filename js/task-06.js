

const validInput = document.getElementById('validation-input');
validInput.addEventListener('blur', getValidInputBlur);



  function getValidInputBlur () {

    if (validInput.getAttribute('data-length') > validInput.value.length) {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    } else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    }
    console.log(validInput.value.length);
};

// function onInputBlur () {
// console.log('Инпут потерял фокус')
// };


 
// document.getElementById("validation-input").onblur = function() {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };