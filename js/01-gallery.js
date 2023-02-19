// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.


import { galleryItems } from "./gallery-items.js";
// Change code below this line
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
    return;
  }
  const fullScreenImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  fullScreenImg.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      fullScreenImg.close();
    }
  });
}