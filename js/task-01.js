
// const categoriesUl = document.querySelectorAll(".item");
//   console.log(`В списке ${categoriesUl.length} категории`);
//   const categoriesList = document.querySelectorAll("ul#categories li.item ul ");
//   const categoriesArr = [];
//   categoriesList.forEach(element => {categoriesArr.push(`Категория: ${document.querySelector("h2").textContent
//       } / Количество элементов: ${element.children.length}`
//     );
//   });
//   console.log(categoriesArr);

const ul = document.querySelector('#categories').children;
for (let elem of ul) {
    const category = elem.firstElementChild.textContent;   
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category}. Количество элементов: ${quantityElem}`);
};