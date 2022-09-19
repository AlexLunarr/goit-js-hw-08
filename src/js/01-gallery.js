// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// підключаємо бібліотеки JS

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// виконуємо розмітку
const gallery = document.querySelector(".gallery");


const markup = galleryItems.map((el) => 
	`<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
).join("");
 
gallery.insertAdjacentHTML('beforeend', markup);

// делегування div.gallery отримання url вел. зображення.
gallery.addEventListener("click", preventDef);

function preventDef(event) {
	event.preventDefault();
	  if (event.target.nodeName !== "IMG") {
    return;
	};
	
	if (!document.querySelector(".simple-lightbox")) {
		new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, animationSpeed: 250, });
	};
};

