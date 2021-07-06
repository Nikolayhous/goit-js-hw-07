

const validInput = document.getElementById('validation-input');
const inputLength = validInput.dataset.length;

validInput.addEventListener('blur', getValidInputBlur);


  function getValidInputBlur (event) {

    const targetValue = event.currentTarget.value;

    if (targetValue.length == inputLength) {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    } else if 
        (targetValue.length === 0) {
            validInput.classList.remove('invalid');
            validInput.classList.remove('valid');
    }
    else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    }
    console.log(validInput.value.length);
};



 
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