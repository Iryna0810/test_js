import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


const imagesList = document.querySelector('.gallery-test');
const bannerImgEl = document.querySelector('.banner__img');
console.log(bannerImgEl);

const makeGalleryCard = ({ preview, original, description }) => {
    return `<li class='gallery-item'>
    <a href="${original}" class="gallery__link">
    <img data-src="${preview}" alt="${description}"
    class="lazyload gallery__img" 
    data-source = "${original}"
    width="200px"
    height="100px"
      </a>
    </li>`;   
}


const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);

const lazyImages = imagesList.querySelectorAll('.gallery__img');
// console.log(imagesList);

lazyImages.forEach(image => {
    return image.addEventListener('load', handleImageLoad, { once: true });
   });

console.log(lazyImages);

function handleImageLoad(event) {
    console.log(event);
    console.log('Картинка завантажилась');
    event.target.classList.add('appear');
};

imagesList.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName!== 'IMG') {
        return;
    }
    console.log(event.target.dataset)
    const bannerUrl = event.target.dataset.source;
    console.log(bannerUrl);
    bannerImgEl.src = bannerUrl;

}
)
