import { galleryItems } from './gallery-items.js';
import { basicLightbox } from 'basiclightbox'
console.log(galleryItems);


const makeGalleryCard = ({ preview, original, description }) => {
    return `<li class='gallery-item'>
    <a href="#" class="gallery__link">
    <img data-src="${preview}" alt="${description}"
    class="lazyload" 
    width="600px"
     height="300px"
      </a>
    </li>`;   
}
const imagesList = document.querySelector('.gallery-test');
console.log(imagesList);

const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);

const lazyImages = document.querySelectorAll('img');

lazyImages.forEach(image => {

    return image.addEventListener('load', handleImageLoad, { once: true });
    

});

console.log(lazyImages);

function handleImageLoad(event) {
    console.log(event);
    console.log('Картинка завантажилась');
    event.target.classList.add('appear');


};

// import { basicLightbox } from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
