const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const itemImgEl = images.map((img) => {
//   const imagesEl = document.createElement('img');
//   imagesEl.classList.add('gallery__img');
//   imagesEl.src = img.url;
//   imagesEl.alt = img.alt;
//   console.log(imagesEl)
// });

// const body = document.querySelector('body')
// body.append(...itemImgEl);
// const itemEl = document.createElement('li');
// itemEl.append(...itemImgEl);

// console.log(itemEl)

// const imagesArr = document.querySelector('#gallery');
// imagesArr.appendChild(itemEl);

// console.log(imagesArr);

const imagesEl = document.createElement('img');
imagesEl.classList.add('gallery__img');
imagesEl.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const at = document.querySelector('p');
at.append(imagesEl);
console.log(imagesEl)