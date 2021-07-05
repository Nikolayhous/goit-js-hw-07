const input = document.getElementById('name-input');
input.addEventListener('input', onInputInput);
input.addEventListener('blur', onInputBlur);
console.log(input);

const span = document.getElementById('name-output')

function onInputInput(event) {
    if(input.value === '') {
        span.textContent = 'Незнакомец';
    } else {
        span.textContent = event.currentTarget.value;
    }
};

function onInputBlur() {
    console.log('Инпут потерял фокус');
};

// const input = document.querySelector('#name-input');
// const span = document.getElementById('name-output');
// input.oninput = function() {
//     if (input.value === '') {
//         span.innerHTML = 'Незнакомец';
//     } 
//     else {
//         span.innerHTML = input.value; }
        
// };

// console.log(typeof(span.innerHTML))