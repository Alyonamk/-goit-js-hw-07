// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.


import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

function createImgItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`
    )
    .join("");
}
const preventRedirection = document.querySelector(".gallery");
preventRedirection.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
}
const addGalleryMarkup = createImgItem(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;

galleryEl.addEventListener("click", onImageClick);
function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    galleryEl.removeEventListener('keydown', onImageClick)
    return;
  }
  const dataSrc = event.target.dataset.source;
	const fullScreenImg = basicLightbox.create(`<img src="${dataSrc}">`);

  fullScreenImg.show();
  

  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      galleryEl.removeEventListener('keydown', onImageClick)
      fullScreenImg.close();
    }
  });
}
