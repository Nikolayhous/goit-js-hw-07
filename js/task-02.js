const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulEl = document.querySelector('#gallery');
const imageList = images.reduce(
  (acc, image) =>
    acc + `<li><img src='${image.url} alt='${image.alt} width='150px'></li>`, ''
);

ulEl.insertAdjacentHTML('afterbegin', imageList);
console.log(ulEl);


// const element = ingredients.map(ingredient => {  
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.classList.add('ingredients__item');
//   ingredientsItemEl.append(ingredient);
//   // console.log(ingredientsItemEl);
//  return ingredientsItemEl;
// });


// const ingredientsListEl = document.querySelector('#ingredients');
// console.log(ingredientsListEl);

// ingredientsListEl.append(...element);







