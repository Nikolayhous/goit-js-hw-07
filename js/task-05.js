const input = document.getElementById('name-input');
const span = document.getElementById('name-output')

console.log(input);

input.addEventListener('input', onInputInput);




function onInputInput({target:{value}}) {
//     if(value.trim() === '') {
//         span.textContent = 'Незнакомец';
//     } else {
//         span.textContent = value;
//     }
span.textContent = value.trim() === '' ? 'Незнакомец' : value;
};
