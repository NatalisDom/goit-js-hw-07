import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

// Render gallery items.
gallery.insertAdjacentHTML(
    "beforeend",
    galleryItems
      .map(
        ({ preview, original, description }) =>
          `
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
          `
      )
      .join("")
  );
  
  // Simple-lightbox init.
  const viem = { captionsData: "alt", captionDelay: 450 };
  
  var lightbox = new SimpleLightbox(".gallery a", viem);
