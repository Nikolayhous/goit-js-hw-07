// const createBtn = document.querySelector('[data-action="render"]');
// // console.log(createBtn);
// const clearBtn = document.querySelector('[data-action="destroy"]');
// // console.log(clearBtn);
// const divBoxes = document.getElementById('boxes');

// function getAmount() {
//   const amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// // console.log(divEl);
// // console.log(divBoxes);

// function createBoxes(amount) {
//   let size = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     let newSize = size + i * 10;
//     const divEl = document.createElement('div');
//     divEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba(${random()}, ${random()}, ${random()})`;
//     fragment.appendChild(divEl);
//   }
//   divBoxes.appendChild(fragment);
// }

// const destroyBoxes = () => {
//   divBoxes.innerHTML = '';
// };

// function random() {
//   return Math.floor(Math.random() * 256);
// }
// createBtn.addEventListener('click', getAmount);
// clearBtn.addEventListener('click', destroyBoxes);