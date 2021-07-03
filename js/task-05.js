// const input = document.querySelector('#name-input');
// input.addEventListener('input', onInputInput);
// input.addEventListener('blur', onInputBlur);
// console.log(input);

// const span = document.querySelector('#name-output')

// function onInputInput(event) {
//     span.textContent = event.currentTarget.value;
//     console.log(event.currentTarget.value)
// }

// function onInputBlur() {
//     console.log('Инпут потерял фокус')
// }

const input = document.querySelector('#name-input');
const span = document.getElementById('name-output');
input.oninput = function(event) {
    if (event.currentTarget.value === '0') {
       return span.textContent;
    } 
    else {
        span.innerHTML = input.value; }

    console.log(document.getElementById('name-output').innerHTML = input.value);
};