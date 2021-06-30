const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const element = ingredients.map(ingredient => {  
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('ingredients__item');
  ingredientsItemEl.append(ingredient);
  // console.log(ingredientsItemEl);
 return ingredientsItemEl;
});


const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

ingredientsListEl.append(...element);





