import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


const makeGalleryCard = ({ preview, original, description }) => {
    return `<li class='gallery-item'>
    <a href="#">
    <img src="${preview}" alt="${description}">
    </a>
    </li>`;   
}
const imagesList = document.querySelector('.images-list');
console.log(imagesList);

const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

