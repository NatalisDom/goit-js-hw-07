import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
let imgPainting = "";
let part;


gallery.insertAdjacentHTML(
    "beforeend",
    galleryItems
      .map(
        ({ preview, original, description }) =>
          `
          <div class="gallery__item">
            <a class="gallery__link"  href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-painting="${original}"
                alt="${description}"
              />
            </a>
          </div>
          `
      )
      .join("")
  );

  gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) return;
  
    imgPainting = e.target.dataset.painting;
    const clickEscape = ({ code }) => {
      if (code === "Escape" && part.visible()) part.close();
    };
  
    part = basicLightbox.create(
      `<img src="${imgPainting}" width="800" height="600">`,
      {
        onShow: () => {
          // console.log("Show modal.");
          document.addEventListener("keydown", clickEscape);
        },
        onClose: () => {
          // console.log("Close modal.");
          document.removeEventListener("keydown", clickEscape);
        },
      }
    );
  
    // console.log(instance);
    part.show();
  });  