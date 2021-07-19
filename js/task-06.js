

const validInput = document.getElementById('validation-input');


validInput.addEventListener('blur', getValidInputBlur);


  function getValidInputBlur (event) {

    const targetValue = event.currentTarget.value;
    const inputLength = validInput.dataset.length;
    if (targetValue.length === +inputLength) {
        // validInput.classList.remove('invalid');
        // validInput.classList.add('valid');
        toggleClass('valid', 'invalid');
    } 
    else {
        // validInput.classList.remove('valid');
        // validInput.classList.add('invalid');
        toggleClass('invalid', 'valid')
    }

};
function toggleClass (add, remove) {
    validInput.classList.remove(remove);
    validInput.classList.add(add);
}

// targetValue.length === +inputLength ? toggleClass('valid', 'invalid') :   toggleClass('invalid', 'valid');

