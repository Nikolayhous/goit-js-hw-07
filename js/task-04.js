

const [buttonDec, value, buttonInc] = document.querySelector(
    "#counter"
  ).children;
  
  
  const increment = () => (value.textContent = +value.textContent + 1);
  
  const decriment = () => (value.textContent -= 1);
  
  
  buttonInc.addEventListener("click", increment);
  buttonDec.addEventListener("click", decriment);
  




//друге рішення

// const counterValue = {
//     value: 0,
//     increment() {
//          this.value += 1;
//     },
//     decrement () {
//         this.value -= 1;
//     }
// };

// // const [decrement, span, increment] = document.querySelector(‘#counter’).children //деструктуризировано


// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');


// decrementBtn.addEventListener('click', function() {

//     counterValue.decrement();
//     console.log(counterValue);
//     valueEl.textContent = counterValue.value
    
// });

// incrementBtn.addEventListener('click', function() {

//     counterValue.increment();
//     valueEl.textContent = counterValue.value
//     console.log(counterValue);
// });

