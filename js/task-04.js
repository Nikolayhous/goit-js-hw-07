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
