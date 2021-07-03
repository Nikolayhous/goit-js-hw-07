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
//   const itemEl = document.createElement('li');
//   const imagesEl = document.createElement('img');
//   imagesEl.classList.add('gallery__img');
//   imagesEl.src = img.url;
//   imagesEl.alt = img.alt;
//   itemEl.append(imagesEl);
//   const imagesArr = document.querySelector('#gallery');
//   imagesArr.append(itemEl);
//   console.log(imagesArr);
// });

const galleryEl = document.querySelector('#gallery');  
const createGallery = ({ url, alt }) =>   
`<li class =  gallery-item >
  <img class = img-gallery src="${url}" alt = "${alt}">
    </li>`;  
    const showGallery = images.reduce((acc, image) => 
    acc + createGallery(image),   '',);  
    galleryEl.insertAdjacentHTML('beforeend', showGallery);

console.log(galleryEl);