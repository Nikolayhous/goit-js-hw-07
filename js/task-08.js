// перше рышення задачі
const btnRender = document.querySelector("[data-action='render']");
const btnDestroy = document.querySelector("[data-action='destroy']");
const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");

const min = +input.getAttribute("min");
const max = +input.getAttribute("max");
const step = +input.getAttribute("step");

btnRender.addEventListener("click", render);
btnDestroy.addEventListener("click", destroy);
let size = 30;

function render() {
  let arrDiv = [];
  if (+input.value > min && +input.value <= max) {
    for (let i = 0; i < +input.value; i += step) {
      const divEl = document.createElement("div");
      divEl.style.background = createRandom();
      divEl.style.width = size + "px";
      divEl.style.height = size + "px";
      size += 10;

      arrDiv.push(divEl);
    }
    divBox.append(...arrDiv);
  } else {
    alert(`Try once more`);
  }
}

function destroy() {
  input.value = "";
  size = 30;
  divBox.innerHTML = "";
}

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}




// //Друге рышення задачі
// const createBtn = document.querySelector('[data-action="render"]');
// const clearBtn = document.querySelector('[data-action="destroy"]');
// const divBoxes = document.getElementById('boxes');

// createBtn.addEventListener('click', getAmount);
// clearBtn.addEventListener('click', destroyBoxes);

// function getAmount() {
//   const amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

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