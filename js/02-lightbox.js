// Використати бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях,
//     відкриття і закриття модального вікна,
//     а також гортання зображень за допомогою клавіатури.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),
};

function makeGallery({ preview, original, description }) {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            width="340"></img>
    </a>
    `;
}

const galleryList = galleryItems.map(makeGallery).join('');

refs.gallery.insertAdjacentHTML('afterbegin', galleryList);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});