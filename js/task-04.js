const counterValue = {
    value: 0,
    increment() {
         this.value += 1;
    },
    decrement () {
        this.value -= 1;
    }
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.addEventListener('click', function() {

    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value
    
});

incrementBtn.addEventListener('click', function() {

    counterValue.increment();
    valueEl.textContent = counterValue.value
    console.log(counterValue);
});

// let pageValue = document.querySelector('#value');
// // console.log(pageValue);
// let removeListenerBtn = document.querySelector('#counter').firstElementChild;
// // console.log(removeListenerBtn);
// let addListenerBtn = document.querySelector('#counter').lastElementChild;
// // console.log(addListenerBtn);

// let counterValue = 0;
// removeListenerBtn.addEventListener('click', onRemoveBtnClick);
// function onRemoveBtnClick() {
//     counterValue -= 1;
//     pageValue.textContent = counterValue;
//     console.log('Віднімаю елемент!')
// }

// addListenerBtn.addEventListener('click', onAddBtnClick);
// function onAddBtnClick() {
//     counterValue += 1;
//     pageValue.textContent = counterValue;
//     console.log('Додаю елемент!')
// }
// console.log(pageValue)